import YearDto from '../services/transparency/dtos/year.dto';
import ListMonthsUseCase from '../use-cases/listMonthsUseCase/listMonthsUseCase';

export default class ListMonthsController {
  private readonly listMonthsUseCase = new ListMonthsUseCase();

  async run(): Promise<YearDto[]> {
    return await this.listMonthsUseCase.run();
  }
}
