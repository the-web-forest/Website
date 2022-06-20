import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import NewsDto from './dtos/news.dto';

export default class NewsService {
  private doc: GoogleSpreadsheet;
  private baseGoogleImageUrl: string =
    'https://drive.google.com/uc?export=view&id=';

  constructor() {
    this.doc = new GoogleSpreadsheet(process.env.NEXT_FIREBASE_NEWS_SHEET_ID);
  }

  async initDocs() {
    await this.doc.useServiceAccountAuth({
      client_email: process.env.NEXT_FIREBASE_CLIENT_EMAIL!,
      private_key: process.env.NEXT_FIREBASE_PRIVATE_KEY!,
    });
    await this.doc.loadInfo();
  }

  async getAllNews(): Promise<NewsDto[]> {
    await this.initDocs();
    const newsSheet = this.doc.sheetsByTitle['NEWS'];
    const rows = await newsSheet.getRows();
    return rows.map(row => this.googleRowToRowData(row)).filter(n => !!n.title);
  }

  private googleRowToRowData(row: GoogleSpreadsheetRow): NewsDto {
    return new NewsDto({
      date: row.DATE,
      title: row.TITLE,
      link: row.LINK,
      imageUrl: row.IMAGE_URL,
    });
  }
}
