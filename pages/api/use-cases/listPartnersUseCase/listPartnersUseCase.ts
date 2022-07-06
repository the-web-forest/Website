import PartnerDto from '../../services/partners/dtos/partner.dto';
import PartnerService from '../../services/partners/partnerService';

export default class ListPartnersUseCase {
  private readonly partnersService = new PartnerService();

  async run(): Promise<PartnerDto[]> {
    return this.partnersService.getAllPartners();
  }
}
