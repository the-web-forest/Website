import MonthDataDto from '../../services/spreadsheetService/dtos/monthData.dto';
import GoogleSpreadSheetService from '../../services/spreadsheetService/googleSpreadsheetService';

export default class GetMonthDataByIdUseCase {
  private readonly googleSheetService = new GoogleSpreadSheetService();

  async run(monthId: string): Promise<MonthDataDto> {
    return await this.googleSheetService.getSheetDataById(monthId);
  }
}
