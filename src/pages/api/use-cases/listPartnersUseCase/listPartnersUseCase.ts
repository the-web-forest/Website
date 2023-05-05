import PartnerDto from 'api/services/partners/dtos/partner.dto';
import PartnerService from 'api/services/partners/partnerService';

export default class ListPartnersUseCase {
	private readonly partnersService = new PartnerService();

	async run(): Promise<PartnerDto[]> {
		return this.partnersService.getAllPartners();
	}
}
