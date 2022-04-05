import axios from 'axios';
import MonthDataDto from '../pages/api/services/transparency/dtos/monthData.dto';
import YearDto from '../pages/api/services/transparency/dtos/year.dto';

export default class TransparencyService {
  async getAllSheets(): Promise<YearDto[]> {
    return (await axios.get<YearDto[]>(`/api/handlers/transparent/months/list`))
      .data;
  }

  async getSheetData(id: string): Promise<MonthDataDto> {
    return (
      await axios.get<MonthDataDto>(`/api/handlers/transparent/months/${id}`)
    ).data;
  }
}
