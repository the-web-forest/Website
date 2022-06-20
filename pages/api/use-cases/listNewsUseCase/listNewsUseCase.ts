import NewsDto from '../../services/news/dtos/news.dto';
import NewsService from '../../services/news/newsService';

export default class ListNewsUseCase {
  private readonly newsService = new NewsService();

  async run(): Promise<NewsDto[]> {
    return this.newsService.getAllNews();
  }
}
