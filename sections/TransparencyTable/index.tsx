import { useCallback, useEffect, useState } from 'react';
import RowData from '../../pages/api/domain/rowData';
import MonthDto from '../../pages/api/services/transparency/dtos/months.dto';
import ListMonthsUseCase from '../../pages/api/use-cases/listMonthsUseCase/listMonthsUseCase';
import GetAllMonthUseCase from '../../use-cases/GetAllMonthsUseCase';
import style from './style.module.scss';

interface Props {
  rowData: RowData[];
}

const TransparencyTable = ({ rowData }: Props) => {
  return (
    <div>
      {rowData.map(row => (
        <section id={style.container}>
          <div className={style.column}>
            <span className={style.head}>Data</span>
            <span className={style.value}>{row.date}</span>
          </div>
          <div className={style.column}>
            <span className={style.head}>Descrição</span>
            <span className={style.value}>{row.description}</span>
          </div>
          <div className={style.column}>
            <span className={style.head}>Categoria</span>
            <span className={style.value}>{row.category}</span>
          </div>
          <div className={style.column}>
            <span className={style.head}>Tipo</span>
            <span className={style.value}>{row.type}</span>
          </div>
          <div className={style.column}>
            <span className={style.head}>Valor</span>
            <span className={style.value}>{row.value}</span>
          </div>
          <div className={style.column}>
            <span className={style.head}>Observação</span>
            <span className={style.value}>{row.obs}</span>
          </div>
        </section>
      ))}
    </div>
  );
};

export default TransparencyTable;
