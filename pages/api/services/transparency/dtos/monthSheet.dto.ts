export default class MonthSheetDto {
  id!: string;
  title!: string;

  constructor(data: Partial<MonthSheetDto>) {
    Object.assign(this, data);
  }
}
