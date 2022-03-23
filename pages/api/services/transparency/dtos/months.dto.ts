export default class MonthDto {
  id!: string;
  title!: string;

  constructor(data: Partial<MonthDto>) {
    Object.assign(this, data);
  }
}
