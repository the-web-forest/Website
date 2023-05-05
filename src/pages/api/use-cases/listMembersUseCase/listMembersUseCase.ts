import MemberDto from 'api/services/members/member.dto';
import MemberService from 'api/services/members/memberService';

export default class ListMembersUseCase {
	private readonly memberService = new MemberService();

	async run(): Promise<MemberDto[]> {
		return this.memberService.getAllMembers();
	}
}
