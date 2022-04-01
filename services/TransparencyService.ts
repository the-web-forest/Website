import axios from 'axios';
import MonthDto from '../pages/api/services/transparency/dtos/months.dto';

export default class TransparencyService {
  async getAllMonts(): Promise<MonthDto[]> {
    return (
      await axios.get<MonthDto[]>(`/api/handlers/transparent/months/list`)
    ).data;
  }
}
