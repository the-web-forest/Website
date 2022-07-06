export default class MemberDto {
  name!: string;
  profilePictureUrl!: string;
  description!: string;
  linkedInUrl!: string;

  constructor(data: Partial<MemberDto>) {
    Object.assign(this, data);
  }
}
