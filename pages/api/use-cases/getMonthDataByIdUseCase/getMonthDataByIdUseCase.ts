import MonthDataDto from '../../services/transparency/dtos/monthData.dto';
import TransparencyService from '../../services/transparency/transparencyService';

export default class GetMonthDataByIdUseCase {
  private readonly transparencyService = new TransparencyService();

  async run(monthId: string): Promise<MonthDataDto> {
    return await this.transparencyService.getDataByMonthId(monthId);
  }
}
