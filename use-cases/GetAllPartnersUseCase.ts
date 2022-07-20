import Partners from '../core/domain/Partners';
import PartnersService from '../services/PartnersMembersService';

export default class GetAllPartnersUseCase {
  private partnerService: PartnersService;

  constructor() {
    this.partnerService = new PartnersService();
  }

  async run(): Promise<Partners[]> {
    const allPartners = await this.partnerService.getAllPartners();
    return allPartners;
  }
}
