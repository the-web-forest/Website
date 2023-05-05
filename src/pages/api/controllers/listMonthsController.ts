import YearDto from 'api/services/transparency/dtos/year.dto';
import ListMonthsUseCase from 'api/use-cases/listMonthsUseCase/listMonthsUseCase';

export default class ListMonthsController {
	private readonly listMonthsUseCase = new ListMonthsUseCase();

	async run(): Promise<YearDto[]> {
		return await this.listMonthsUseCase.run();
	}
}
