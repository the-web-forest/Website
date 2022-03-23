import News from '../core/domain/News';

export default class NewsService {
  getAllNews(): News[] {
    return [
      new News({
        title:
          'Amazônia pode ter 15 mil km² de área desmatada até julho, aponta plataforma',
        photoUrl: 'https://i.ibb.co/FwVzvbx/000-9pr2j2.jpg',
        date: '16/12/2020',
        link: 'https://g1.globo.com/meio-ambiente/amazonia/noticia/2022/02/17/amazonia-pode-ter-15-mil-km-de-area-desmatada-ate-julho-aponta-plataforma.ghtml',
      }),
      new News({
        title:
          'Plantar árvores já é insuficiente para sanar gás carbônico da atmosfera',
        photoUrl:
          'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/21204_DBDEF0EC8D945527.jpg?w=876&h=484&crop=1',
        date: '16/12/2020',
        link: 'https://www.cnnbrasil.com.br/tecnologia/estudo-plantar-arvores-ja-e-insuficiente-para-sanar-gas-carbonicos-da-atmosfera/',
      }),
      new News({
        title:
          'Mundo precisa de 1,2 trilhão de novas árvores para conter o aquecimento global, diz estudo',
        photoUrl:
          'https://veja.abril.com.br/wp-content/uploads/2021/06/AAA7711.JPG.jpg',
        date: '04/07/2019',
        link: 'https://g1.globo.com/natureza/noticia/2019/07/04/mundo-precisa-de-12-trilhao-de-novas-arvores-para-conter-o-aquecimento-global-diz-estudo.ghtml',
      }),
      new News({
        title: 'Tudo o que tem de saber sobre a COP26',
        photoUrl:
          'https://images.unric.org/pt/wp-content/uploads/sites/9/2021/10/IV4fRr3Q_400x400.jpg.webp',
        date: '09/10/2021',
        link: 'https://unric.org/pt/tudo-o-que-tem-de-saber-sobre-a-cop26/',
      }),
      new News({
        title: 'AMAZÔNIA, DESMATAMENTO E QUEIMADAS: UM NOVO DESASTRE EM 2020',
        photoUrl:
          'https://wwfbr.awsassets.panda.org/img/wwf_canon___mark_edwards___acre_108941.jpg',
        date: '01/08/2020',
        link: 'https://www.wwf.org.br/natureza_brasileira/areas_prioritarias/amazonia1/amazonia__desmatamento_e_queimadas__uma_nova_tragedia_em_2020/',
      }),
    ];
  }
}
