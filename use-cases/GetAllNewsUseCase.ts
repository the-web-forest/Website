import News from '../core/domain/News';
import NewsService from '../services/NewsService';

export default class GetAllNewsUseCase {
  private newsService: NewsService;

  constructor() {
    this.newsService = new NewsService();
  }

  async run(): Promise<News[]> {
    return await this.newsService.getAllNews();
  }
}
