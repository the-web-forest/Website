import { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import ComboBox from '../components/ComboBox';
import Header from '../components/header';
import Title from '../components/Title';
import { IMonth } from '../core/const/Month';
import DaysOfTheMonth from '../helpers/DaysOfTheMonth';
import OrderedMonths from '../helpers/OrderedMonths';
import FooterSection from '../sections/Footer';
import HeaderSection from '../sections/Header';
import TransparencyTable from '../sections/TransparencyTable';
import styles from '../styles/TransparencyArea.module.scss';
import GetAllMonthUseCase from '../use-cases/GetAllMonthsUseCase';
import MonthDto from './api/services/transparency/dtos/months.dto';

const TransparencyArea: NextPage = () => {
  const [selectedMonth, setMonth] = useState<number>(0);
  const [selectedYear, setYear] = useState(2022);
  const [sheetList, setSheetList] = useState<MonthDto[]>([]);

  const getAllMonth = useCallback(async () => {
    const listMonthUseCase = new GetAllMonthUseCase();
    const data = await listMonthUseCase.run();
    setSheetList(data);
    console.log(data);
  }, []);

  const comboBoxMonth = useCallback(() => {
    const orderMonths = OrderedMonths();
    const monthOptions = orderMonths.map(month => ({
      label: month.name,
      value: month.value,
    }));
    return monthOptions;
  }, []);

  const comboBoxYear = useCallback(() => {
    const years = sheetList.map(sheet => sheet.title.match(/([\d])+/g));
    const newYear = console.log(years);
    const yearOptions = years.map(year => ({
      label: year,
      value: year,
    }));
    return yearOptions;
  }, [sheetList]);

  useEffect(() => {
    getAllMonth();
  }, [getAllMonth]);

  return (
    <>
      <Header title="Área de Transparência" />
      <HeaderSection />
      <section className={styles.container}>
        <div className={styles.head}>
          <Title text="Área de Transparência" color="var(--dark-gray)" />
          <span>
            Escolha o mês e o ano para visualizar o extrato de doações
          </span>
        </div>
        <div className={styles.filter}>
          <ComboBox
            options={comboBoxMonth()}
            selectedState={setMonth}
            placeHolder="Mês"
          />
          <ComboBox
            options={comboBoxYear()}
            selectedState={setYear}
            placeHolder="Ano"
          />
        </div>
        <div className={styles.tableSection}>{/* <TransparencyTable /> */}</div>
      </section>
      <FooterSection />
    </>
  );
};

export default TransparencyArea;
