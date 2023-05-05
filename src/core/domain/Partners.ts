export default class Partners {
	name!: string;
	photoUrl!: string;
	url!: string;

	constructor(data: Partial<Partners>) {
		Object.assign(this, data);
	}
}
