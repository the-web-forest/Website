import MonthDto from '../pages/api/services/transparency/dtos/months.dto';
import TransparencyService from '../services/TransparencyService';

export default class GetAllMonthUseCase {
  constructor(
    private readonly transparencyService = new TransparencyService(),
  ) {}

  async run(): Promise<MonthDto[]> {
    return this.transparencyService.getAllMonts();
  }
}
