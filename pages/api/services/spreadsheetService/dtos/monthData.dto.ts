import RowData from '../../../domain/rowData';

export default class MonthDataDto {
  title!: string;
  data!: RowData[];

  constructor(data: Partial<MonthDataDto>) {
    Object.assign(this, data);
  }
}
