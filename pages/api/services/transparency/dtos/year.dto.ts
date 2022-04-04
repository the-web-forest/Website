import MonthDto from './month.dto';

export default class YearDto {
  year!: number;
  months: MonthDto[] = [];

  constructor(data: Partial<YearDto>) {
    Object.assign(this, data);
  }
}
