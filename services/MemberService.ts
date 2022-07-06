import axios from 'axios';
import Member from '../core/domain/Member';

export default class MemberService {
  async getAllMembers(): Promise<Member[]> {
    const response = await axios.get(`/api/handlers/members/list`);
    const members = response.data;
    return members.map(
      (x: Member) =>
        new Member({
          name: x.name,
          description: x.description,
          linkedInUrl: x.linkedInUrl,
          profilePictureUrl: x.profilePictureUrl,
        }),
    );
  }
}
