import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import RowData from '../../domain/rowData';
import MonthDataDto from './dtos/monthData.dto';
import MonthDto from './dtos/months.dto';
export default class GoogleSpreadSheetService {

    private doc: GoogleSpreadsheet
    private baseGoogleImageUrl: string = 'https://drive.google.com/uc?export=view&id='

    constructor() {
        this.doc = new GoogleSpreadsheet(process.env.NEXT_FIREBASE_SHEET_ID);
    }

    async initDocs() {
        await this.doc.useServiceAccountAuth({
            client_email: process.env.NEXT_FIREBASE_CLIENT_EMAIL!,
            private_key: process.env.NEXT_FIREBASE_PRIVATE_KEY!,
        });
        await this.doc.loadInfo()
    }

    async getSheetDataById(id: string): Promise<MonthDataDto> {    
        await this.initDocs()
        const sheet = this.doc.sheetsById[id]
        const sheetRows = await sheet.getRows()
        return {
            title: sheet.title,
            data: sheetRows.map(row => this.googleRowToRowData(row)).filter(row => row.description != null)
        }
    }

    async getAllMonths(): Promise<MonthDto[]> {
        await this.initDocs()
        const sheetsIds = Object.values(this.doc.sheetsById)
        const sheets: MonthDto[] = []
        sheetsIds.forEach(sheet => {
            if(this.isPrivateSheetByName(sheet.title)) 
                return
            sheets.push(
                new MonthDto({ 
                    id: sheet.sheetId.toString(),
                    title: sheet.title 
                })
            )
        });
        return sheets
    }

    private isPrivateSheetByName(sheetName: string): boolean {
        return sheetName.includes('Private_')
    }

    private googleRowToRowData(row: GoogleSpreadsheetRow): RowData {
        console.log(row.DATE)
        return new RowData({
            date: row.DATE,
            description: row.DESCRIPTION,
            category: row.CATEGORY,
            type: row.TYPE,
            value: row.VALUE,
            obs: row.OBS,
            receipt: (row.RECEIPT) ? `${this.baseGoogleImageUrl}${row.RECEIPT}` : null,
        })
    }

}