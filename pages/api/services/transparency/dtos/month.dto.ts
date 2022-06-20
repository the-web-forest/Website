export default class MonthDto {
  number!: number;
  name!: string;
  id!: string;

  constructor(data: Partial<MonthDto>) {
    Object.assign(this, data);
  }
}
