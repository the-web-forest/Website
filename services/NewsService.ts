import axios from 'axios';
import News from '../core/domain/News';

export default class NewsService {
  async getAllNews(): Promise<News[]> {
    const news = await (
      await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/handlers/news/list`,
      )
    ).data;
    return news.map((n: any) => {
      return new News({
        date: n.date,
        title: n.title,
        link: n.link,
        photoUrl: n.imageUrl,
      });
    });
  }
}
