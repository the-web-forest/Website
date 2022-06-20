import YearDto from '../pages/api/services/transparency/dtos/year.dto';
import TransparencyService from '../services/TransparencyService';

export default class GetAllSheetsUseCase {
  constructor(
    private readonly transparencyService = new TransparencyService(),
  ) {}

  async run(): Promise<YearDto[]> {
    return this.transparencyService.getAllSheets();
  }
}
