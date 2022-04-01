import ISelectOptionsEntity from '../core/entities/SelectOptionsEntity';
import MonthDto from '../pages/api/services/transparency/dtos/months.dto';

export default class GetAllYearsFromSheetListUseCase {
  constructor() {}

  run(sheetList: MonthDto[]): string[] {
    const years = sheetList.map(sheet => sheet.title.split(/([\d])+/));
  }
}
