export default class Certificate {
	id!: string;
	name!: string;
	certificateUrl!: string;
	createtAt!: Date;
	updatedAt!: Date;

	constructor(data: Partial<Certificate>) {
		Object.assign(this, data);
	}
}
