export default class PartnerDto {
	name!: string;
	photoUrl!: string;
	url!: string;

	constructor(data: Partial<PartnerDto>) {
		Object.assign(this, data);
	}
}
