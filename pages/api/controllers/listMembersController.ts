import MemberDto from '../services/members/member.dto';
import ListMembersUseCase from '../use-cases/listMembersUseCase/listMembersUseCase';

export default class ListMembersController {
  private readonly useCase = new ListMembersUseCase();

  async run(): Promise<MemberDto[]> {
    return await this.useCase.run();
  }
}
