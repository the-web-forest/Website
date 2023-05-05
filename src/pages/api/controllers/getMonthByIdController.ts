import MonthDataDto from 'api/services/transparency/dtos/monthData.dto';
import GetMonthDataByIdUseCase from 'api/use-cases/getMonthDataByIdUseCase/getMonthDataByIdUseCase';

export default class GetMonthByIdController {
	private readonly getMonthDataByIdUseCase = new GetMonthDataByIdUseCase();

	async run(monthId: string): Promise<MonthDataDto> {
		return await this.getMonthDataByIdUseCase.run(monthId);
	}
}
