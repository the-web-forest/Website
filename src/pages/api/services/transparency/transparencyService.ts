import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import RowData from 'api/domain/rowData';
import MonthDataDto from './dtos/monthData.dto';
import MonthSheetDto from './dtos/monthSheet.dto';
export default class TransparencyService {
	private doc: GoogleSpreadsheet;
	private baseGoogleImageUrl: string =
		'https://drive.google.com/uc?export=view&id=';

	constructor() {
		this.doc = new GoogleSpreadsheet(process.env.NEXT_FIREBASE_SHEET_ID);
	}

	async initDocs() {
		await this.doc.useServiceAccountAuth({
			client_email: process.env.NEXT_FIREBASE_CLIENT_EMAIL!,
			private_key: process.env.NEXT_FIREBASE_PRIVATE_KEY!
		});
		await this.doc.loadInfo();
	}

	async getDataByMonthId(id: string): Promise<MonthDataDto> {
		await this.initDocs();
		const sheet = this.doc.sheetsById[id];
		const sheetRows = await sheet.getRows();
		return {
			title: sheet.title,
			data: sheetRows
				.map((row) => this.googleRowToRowData(row))
				.filter((row) => row.description != null)
		};
	}

	async getAllMonths(): Promise<MonthSheetDto[]> {
		await this.initDocs();
		const sheetsIds = Object.values(this.doc.sheetsById);
		const sheets: MonthSheetDto[] = [];
		sheetsIds.forEach((sheet) => {
			if (this.isPrivateSheetByName(sheet.title)) return;
			sheets.push(
				new MonthSheetDto({
					id: sheet.sheetId.toString(),
					title: sheet.title
				})
			);
		});
		return sheets;
	}

	private isPrivateSheetByName(sheetName: string): boolean {
		return sheetName.includes('Private_');
	}

	private googleRowToRowData(row: GoogleSpreadsheetRow): RowData {
		return new RowData({
			date: row.DATE,
			description: row.DESCRIPTION,
			category: row.CATEGORY,
			type: row.TYPE,
			value: row.VALUE,
			obs: row.OBS,
			receipt: row.RECEIPT ? `${this.baseGoogleImageUrl}${row.RECEIPT}` : null
		});
	}
}
