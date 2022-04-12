import MonthDataDto from '../pages/api/services/transparency/dtos/monthData.dto';
import TransparencyService from '../services/TransparencyService';

export default class GetSheetDataUseCase {
  constructor(
    private readonly transparencyService = new TransparencyService(),
  ) {}

  async run(id: string): Promise<MonthDataDto> {
    return this.transparencyService.getSheetData(id);
  }
}
