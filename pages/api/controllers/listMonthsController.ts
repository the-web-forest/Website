import MonthDto from "../services/spreadsheetService/dtos/months.dto";
import ListMonthsUseCase from "../use-cases/listMonthsUseCase/listMonthsUseCase";

export default class ListMonthsController {

    private readonly listMonthsUseCase = new ListMonthsUseCase()

    async run(): Promise<MonthDto[]> {
        return await this.listMonthsUseCase.run()
    }
}