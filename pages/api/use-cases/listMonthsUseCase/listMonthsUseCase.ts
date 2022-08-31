import MonthHelper from '../../helpers/monthHelper';
import MonthDto from '../../services/transparency/dtos/month.dto';
import MonthSheetDto from '../../services/transparency/dtos/monthSheet.dto';
import YearDto from '../../services/transparency/dtos/year.dto';
import TransparencyService from '../../services/transparency/transparencyService';

export default class ListMonthsUseCase {
  private readonly transparencyService = new TransparencyService();

  async run(): Promise<YearDto[]> {
    const allMonths = await this.transparencyService.getAllMonths();
    const allYears = this.getAllAvaiableYears(allMonths);
    const data = this.populateYears(allMonths, allYears);
    return data;
  }

  private getAllAvaiableYears(dataList: MonthSheetDto[]): YearDto[] {
    const yearList: YearDto[] = [];
    dataList.forEach(value => {
      const yearValue = this.getYearFromString(value.title);
      const alreadyExists = yearList.find(
        year => year.year === parseInt(yearValue),
      );
      !alreadyExists &&
        yearList.push(new YearDto({ year: parseInt(yearValue) }));
    });
    return yearList;
  }

  private populateYears(
    dataList: MonthSheetDto[],
    years: YearDto[],
  ): YearDto[] {
    dataList.forEach(data => {
      const year = this.getYearFromString(data.title);
      const month = this.getMonthFromString(data.title);
      const monthNumber = MonthHelper.getMonthNumberByMonthName(month);

      const monthToInclude = new MonthDto({
        number: monthNumber,
        id: data.id,
        name: month,
      });

      const yearToPush = years.find(y => y.year === parseInt(year));
      yearToPush!.months.push(monthToInclude);
    });
    return this.orderYearAndMonthData(years);
  }

  private orderYearAndMonthData(dataList: YearDto[]): YearDto[] {
    dataList = dataList.sort((a, b) => a.year - b.year);
    dataList.forEach(year => {
      year.months = year.months.sort((a, b) => a.number - b.number);
    });
    return dataList;
  }

  private getYearFromString(input: string): string {
    const splitterString = ' de ';
    return input.split(splitterString)[1];
  }
  private getMonthFromString(input: string): string {
    const splitterString = ' de ';
    return input.split(splitterString)[0];
  }
}
