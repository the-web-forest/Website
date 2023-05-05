import NewsDto from 'api/services/news/dtos/news.dto';
import ListNewsUseCase from 'api/use-cases/listNewsUseCase/listNewsUseCase';

export default class ListNewsController {
	private readonly useCase = new ListNewsUseCase();

	async run(): Promise<NewsDto[]> {
		return await this.useCase.run();
	}
}
