import { useCallback } from 'react';
import RowData from '../../pages/api/domain/rowData';
import style from './style.module.scss';

interface Props {
  rowData: RowData[];
}

const TransparencyTable = ({ rowData }: Props) => {
  return (
    <div>
      {rowData.map((row, key) => (
        <>
          <section className={style.table} key={key}>
            <div>
              <div className={style.columnDate}>
                <span className={style.head}>Data</span>
                <span className={style.value}>{row.date}</span>
              </div>
              <div className={style.columnDescription}>
                <span className={style.head}>Descrição</span>
                <span className={style.value}>{row.description}</span>
              </div>
              <div className={style.columnCategory}>
                <span className={style.head}>Categoria</span>
                <span className={style.value}>{row.category}</span>
              </div>
              <div className={style.columnType}>
                <span className={style.head}>Tipo</span>
                <span className={style.value}>{row.type}</span>
              </div>
              <div className={style.columnValue}>
                <span className={style.head}>Valor</span>
                <span className={style.value}>{row.value}</span>
              </div>
              <div className={style.columnObs}>
                <span className={style.head}>Observação</span>
                <span className={style.value}>
                  {row.obs ? row.obs : <>&nbsp;</>}
                </span>
              </div>
            </div>
            <div className={style.columnMobileValue}>
              <span className={style.head}>Valor</span>
              <span className={style.value}>{row.value}</span>
            </div>
          </section>
        </>
      ))}
    </div>
  );
};

export default TransparencyTable;
