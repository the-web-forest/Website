import AboutCard from '../../components/AboutCard';
import styles from './style.module.css';

const AboutSection = () => {
  const fakeTitle = `Uma voz para o meio ambiente`;

  const TITLE = {
    ONE: 'Somos uma voz para o meio ambiente.',
    TWO: 'Web Forest e as instituições parceiras.',
    THREE: 'Transparência em cada centavo.',
  };

  const TEXT = {
    ONE: `Fazemos do nosso trabalho uma voz para o meio ambiente, o mundo no qual vivemos. Proteger a fauna, reflorestar campos e incentivar comunidades são pautas de interesse da Web Forest.`,
    TWO: `A Web Forest se concentra hoje em criar tecnologias e conectar pessoas e instituições parceiras para realizar serviços ambientais. Nossa missão é ajudar as pessoas a ajudarem o planeta com o plantio de arvores.`,
    THREE: `Todo o valor arrecadado é acessivelmente divulgado, assim como os gastos operacionais da Web Forest e doações e financiamentos realizados para instituições terceiras. Nossas decisões são amplamente questionadas e fazemos questão de ter um trabalho 100% transparente. `,
  };

  return (
    <section id="about">
      <div id={styles.container}>
        <div id={styles.title}>
          Quem somos nós e <br /> como atuamos
        </div>
        <div id={styles.cards}>
          <AboutCard icon={0} title={TITLE.ONE} text={TEXT.ONE} />
          <AboutCard icon={1} title={TITLE.TWO} text={TEXT.TWO} />
          <AboutCard icon={2} title={TITLE.THREE} text={TEXT.THREE} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
