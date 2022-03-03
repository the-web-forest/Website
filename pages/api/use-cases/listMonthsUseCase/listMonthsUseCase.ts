import MonthDto from "../../services/spreadsheetService/dtos/months.dto";
import GoogleSpreadSheetService from "../../services/spreadsheetService/googleSpreadsheetService";

export default class ListMonthsUseCase {

    private readonly googleSheetService = new GoogleSpreadSheetService()

    async run(): Promise<MonthDto[]> {
        return this.googleSheetService.getAllMonths()
    }
    
}