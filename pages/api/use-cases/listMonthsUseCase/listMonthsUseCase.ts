import MonthDto from '../../services/transparency/dtos/months.dto';
import TransparencyService from '../../services/transparency/transparencyService';

export default class ListMonthsUseCase {
  private readonly transparencyService = new TransparencyService();

  async run(): Promise<MonthDto[]> {
    return this.transparencyService.getAllMonths();
  }
}
