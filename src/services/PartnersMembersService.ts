import axios from 'axios';
import Partners from 'core/domain/Partners';

export default class PartnerService {
	async getAllPartners(): Promise<Partners[]> {
		const response = await axios.get(`/api/handlers/partners/list`);
		const partners = response.data;
		return partners.map(
			(partner: Partners) =>
				new Partners({
					name: partner.name,
					photoUrl: partner.photoUrl,
					url: partner.url
				})
		);
	}
}
