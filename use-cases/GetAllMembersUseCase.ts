import Member from '../core/domain/Member';
import MemberService from '../services/MemberService';

export default class GetAllMembersUseCase {
  private memberService: MemberService;

  constructor() {
    this.memberService = new MemberService();
  }

  run(): Member[] {
    const allMembers = this.memberService.getAllMembers();
    return allMembers
      .map(member => ({ member, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ member }) => member);
  }
}
