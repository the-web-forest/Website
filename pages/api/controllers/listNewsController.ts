import NewsDto from '../services/news/dtos/news.dto';
import ListNewsUseCase from '../use-cases/listNewsUseCase/listNewsUseCase';

export default class ListNewsController {
  private readonly useCase = new ListNewsUseCase();

  async run(): Promise<NewsDto[]> {
    return await this.useCase.run();
  }
}
