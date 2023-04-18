import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import MemberDto from './member.dto';

export default class MemberService {
	private doc: GoogleSpreadsheet;

	constructor() {
		this.doc = new GoogleSpreadsheet(process.env.NEXT_FIREBASE_DATA_SHEET_ID);
	}

	async initDocs() {
		await this.doc.useServiceAccountAuth({
			client_email: process.env.NEXT_FIREBASE_CLIENT_EMAIL!,
			private_key: process.env.NEXT_FIREBASE_PRIVATE_KEY!
		});
		await this.doc.loadInfo();
	}

	async getAllMembers(): Promise<MemberDto[]> {
		await this.initDocs();
		const membersSheet = this.doc.sheetsByTitle['MEMBERS'];
		const rows = await membersSheet.getRows();
		return rows
			.map((row) => this.googleRowToRowData(row))
			.filter((n) => !!n.name);
	}

	private googleRowToRowData(row: GoogleSpreadsheetRow): MemberDto {
		return new MemberDto({
			name: row.NAME,
			description: row.DESCRIPTION,
			profilePictureUrl: row.PHOTO_URL,
			linkedInUrl: row.LINKEDIN_URL
		});
	}
}
