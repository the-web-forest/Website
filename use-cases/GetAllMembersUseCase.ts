import Member from "../core/domain/Member";
import MemberService from "../services/MemberService/MemberService";

export default class GetAllMembersUseCase {

    private memberService: MemberService

    constructor() {
        this.memberService = new MemberService()
    }

    run(): Member[] {
        return this.memberService.getAllMembers()
    }

}