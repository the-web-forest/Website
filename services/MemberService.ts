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
        profilePictureUrl: '/images/team/bianca.jpeg',
        name: 'Bianca Valverde',
        description: 'Marketing / Produto',
        linkedInUrl: 'https://www.linkedin.com/in/bianca-valverde-856b21111/',
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
        profilePictureUrl: '/images/team/guilherme.jpeg',
        name: 'Guilherme Vieira',
        description: 'Dev Frontend',
        linkedInUrl: 'https://www.linkedin.com/in/guilherme-vieira-78428317a/',
      }),
      new Member({
        profilePictureUrl: 'images/team/larissa.jpeg',
        name: 'Larissa Isabela',
        description: 'Mídias sociais / Redação',
        linkedInUrl:
          'https://www.linkedin.com/in/larissa-isabela-alves-da-silva',
      }),
    ];
  }
}
