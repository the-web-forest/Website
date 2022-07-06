import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import PartnerDto from './dtos/partner.dto';

export default class PartnerService {
  private doc: GoogleSpreadsheet;

  constructor() {
    this.doc = new GoogleSpreadsheet(process.env.NEXT_FIREBASE_DATA_SHEET_ID);
  }

  async initDocs() {
    await this.doc.useServiceAccountAuth({
      client_email: process.env.NEXT_FIREBASE_CLIENT_EMAIL!,
      private_key: process.env.NEXT_FIREBASE_PRIVATE_KEY!,
    });
    await this.doc.loadInfo();
  }

  async getAllPartners(): Promise<PartnerDto[]> {
    await this.initDocs();
    const newsSheet = this.doc.sheetsByTitle['PARTNERS'];
    const rows = await newsSheet.getRows();
    return rows.map(row => this.googleRowToRowData(row)).filter(n => !!n.name);
  }

  private googleRowToRowData(row: GoogleSpreadsheetRow): PartnerDto {
    return new PartnerDto({
      name: row.NAME,
      photoUrl: row.PHOTO_URL,
      url: row.URL,
    });
  }
}
