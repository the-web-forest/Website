import MemberDto from 'api/services/members/member.dto';
import ListMembersUseCase from 'api/use-cases/listMembersUseCase/listMembersUseCase';

export default class ListMembersController {
	private readonly useCase = new ListMembersUseCase();

	async run(): Promise<MemberDto[]> {
		return await this.useCase.run();
	}
}
