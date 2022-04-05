import MonthDataDto from '../pages/api/services/transparency/dtos/monthData.dto';
import YearDto from '../pages/api/services/transparency/dtos/year.dto';
import TransparencyService from '../services/TransparencyService';

export default class GetSheetDataUseCase {
  constructor(
    private readonly transparencyService = new TransparencyService(),
  ) {}

  async run(id: string): Promise<MonthDataDto> {
    console.log('ZZZZ');
    return this.transparencyService.getSheetData(id);
  }
}
