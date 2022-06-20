export default class Member {
  profilePictureUrl!: string;
  name!: string;
  description!: string;
  linkedInUrl!: string;

  constructor(data: Partial<Member>) {
    Object.assign(this, data);
  }
}
