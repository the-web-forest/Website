import Member from '../core/domain/Member';

export default class MemberService {
  getAllMembers(): Member[] {
    return [
      new Member({
        profilePictureUrl: '/images/team/barros.jpeg',
        name: 'Matheus Barros',
        description: 'Fundador / Engenheiro',
        linkedInUrl: 'https://www.linkedin.com/in/barros42/',
      }),
      new Member({
        profilePictureUrl: '/images/team/victor.jpeg',
        name: 'Victor Bacega',
        description: 'Fundador / Analista',
        linkedInUrl: 'https://www.linkedin.com/in/victor-bacega/',
      }),
      new Member({
        profilePictureUrl: '/images/team/gabriel.jpeg',
        name: 'Gabriel Cordeiro',
        description: 'UI/UX',
        linkedInUrl: 'https://www.linkedin.com/in/gabrielcordeirosantos/',
      }),
      new Member({
        profilePictureUrl: '/images/team/carol.jpeg',
        name: 'Caroline Alves',
        description: 'Gestão de Produto & Parcerias',
        linkedInUrl: 'https://www.linkedin.com/in/carolineaalves/',
      }),
      new Member({
        profilePictureUrl: '/images/team/herbert.jpeg',
        name: 'Herbert Reis',
        description: 'UI/UX',
        linkedInUrl: 'https://www.linkedin.com/in/herbertreis/',
      }),
      new Member({
        profilePictureUrl: '/images/team/daniel.jpeg',
        name: 'Daniel Trindade',
        description: 'Desenvolvedor',
        linkedInUrl: 'https://www.linkedin.com/in/daniel-trindade-a44955163/',
      }),
      new Member({
        profilePictureUrl: '/images/team/murillo.jpeg',
        name: 'Murillo Torres',
        description: 'Marketing',
        linkedInUrl: 'https://www.linkedin.com/in/murillottorres/',
      }),
    ];
  }
}
