export default class RowData {
  date!: Date;
  description!: string;
  category!: string;
  type!: string;
  obs!: string;
  value!: string;
  receipt!: string | null;

  constructor(data: Partial<RowData>) {
    Object.assign(this, data);
  }
}
