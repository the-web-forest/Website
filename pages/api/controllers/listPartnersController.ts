import PartnerDto from '../services/partners/dtos/partner.dto';
import ListPartnersUseCase from '../use-cases/listPartnersUseCase/listPartnersUseCase';

export default class ListPartnersController {
  private readonly useCase = new ListPartnersUseCase();

  async run(): Promise<PartnerDto[]> {
    return await this.useCase.run();
  }
}
