import NewsDto from 'api/services/news/dtos/news.dto';
import NewsService from 'api/services/news/newsService';

export default class ListNewsUseCase {
	private readonly newsService = new NewsService();

	async run(): Promise<NewsDto[]> {
		return this.newsService.getAllNews();
	}
}
