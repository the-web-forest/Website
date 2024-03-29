import { NextPage } from 'next';
import { useCallback, useEffect, useRef, useState } from 'react';
import ComboBox from '../components/ComboBox';
import Header from '../components/header';
import Title from '../components/Title';
import ISelectOptionsEntity from '../core/entities/SelectOptionsEntity';
import FooterSection from '../sections/Footer';
import HeaderSection from '../sections/Header';
import TransparencyTable from '../sections/TransparencyTable';
import styles from '../styles/TransparencyArea.module.scss';
import GetAllSheetsUseCase from '../use-cases/GetAllSheetsUseCase';
import GetSheetDataUseCase from '../use-cases/GetSheetDataUseCase';
import RowData from './api/domain/rowData';
import YearDto from './api/services/transparency/dtos/year.dto';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const TransparencyArea: NextPage = () => {
  const [selectedMonth, setMonth] = useState<number | string>(
    new Date().getMonth() + 1,
  );
  const [selectedYear, setYear] = useState<number | string>(
    new Date().getFullYear(),
  );

  const [sheetList, setSheetList] = useState<YearDto[]>([]);
  const [dataTable, setDataTable] = useState<RowData[]>([]);
  const [nameMonth, setNameMonth] = useState<string>('');
  const [loadTable, setLoadTable] = useState<boolean>(false);

  const getAllYearsAndMonths = useCallback(async () => {
    const listMonthUseCase = new GetAllSheetsUseCase();
    const data = await listMonthUseCase.run();
    setSheetList(data);
  }, []);

  const comboBoxMonth = useCallback(() => {
    const orderMonths = sheetList.filter(sheet => sheet.year == selectedYear);
    if (orderMonths.length > 0) {
      return orderMonths[0]?.months.map(
        month =>
          ({
            label: month.name,
            value: month.number,
          } as ISelectOptionsEntity),
      );
    } else {
      return [];
    }
  }, [selectedYear, sheetList]);

  const comboBoxYear = useCallback(() => {
    const years = sheetList.map(sheet => sheet.year);
    const yearOptions: ISelectOptionsEntity[] = years.map(year => ({
      label: year,
      value: year,
    }));
    return yearOptions;
  }, [sheetList]);

  const getDataTable = useCallback(async () => {
    setLoadTable(true);
    const { months } = sheetList.find(sheet => sheet.year == selectedYear) || {
      months: [],
    };
    const hasMonthsLoaded = months.length;

    if (!hasMonthsLoaded) {
      return;
    }
    const id = months.find(month => month.number == selectedMonth)?.id;
    const name = months.find(month => month.number == selectedMonth)?.name;

    if (name) {
      setNameMonth(name);
    }
    if (!id) {
      setLoadTable(false);
      return;
    }
    const data = await new GetSheetDataUseCase().run(id);
    const rowData: RowData[] = data.data.map(row => row);
    setLoadTable(false);
    setDataTable(rowData);
  }, [selectedMonth, selectedYear, sheetList]);

  useEffect(() => {
    getAllYearsAndMonths();
  }, [getAllYearsAndMonths]);

  useEffect(() => {
    if (!!selectedMonth && !!selectedYear) {
      getDataTable();
    }
  }, [getDataTable, selectedMonth, selectedYear]);

  return (
    <>
      <Header title="Área de Transparência" />
      <HeaderSection />
      <section className={styles.container}>
        <div className={styles.head}>
          <Title
            text="Área de Transparência"
            color="var(--dark-gray)"
            as="h1"
          />
          <span>
            Escolha o mês e o ano para visualizar o extrato de doações
          </span>
        </div>
        <div className={styles.filter}>
          <div className={styles.select}>
            <ComboBox
              options={comboBoxYear()}
              selectedState={setYear}
              placeHolder="Ano"
              value={selectedYear}
            />
          </div>
          <div className={styles.select}>
            <ComboBox
              options={comboBoxMonth()}
              selectedState={setMonth}
              placeHolder="Mês"
              value={selectedMonth}
            />
          </div>
        </div>
        {!!loadTable ? (
          <div className={styles.load}>
            <AiOutlineLoading3Quarters size={40} />
          </div>
        ) : (
          <div className={styles.tableSection}>
            {dataTable.length === 0 ? (
              <p>{`Nenhum lançamento no mês de ${nameMonth} do ano de ${selectedYear}`}</p>
            ) : (
              <>
                <TransparencyTable rowData={dataTable} />
              </>
            )}
          </div>
        )}
      </section>
      <FooterSection />
    </>
  );
};

export default TransparencyArea;
