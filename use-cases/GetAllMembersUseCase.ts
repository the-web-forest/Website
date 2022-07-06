import Member from '../core/domain/Member';
import MemberService from '../services/MemberService';

export default class GetAllMembersUseCase {
  private memberService: MemberService;

  constructor() {
    this.memberService = new MemberService();
  }

  async run(): Promise<Member[]> {
    const allMembers = await this.memberService.getAllMembers();
    return allMembers;
  }
}
