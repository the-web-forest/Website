import MonthDataDto from '../services/spreadsheetService/dtos/monthData.dto';
import GetMonthDataByIdUseCase from '../use-cases/getMonthDataByIdUseCase/getMonthDataByIdUseCase';

export default class GetMonthByIdController {
  private readonly getMonthDataByIdUseCase = new GetMonthDataByIdUseCase();

  async run(monthId: string): Promise<MonthDataDto> {
    return await this.getMonthDataByIdUseCase.run(monthId);
  }
}
