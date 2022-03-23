import styles from './styles.module.css';
import DonateButton from '../../components/FilledButton';
import Title from '../../components/Title';
import Settings from '../../core/settings';

const BannerSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title text="Floresta Digital Impacto Real" color="#fff" />
      </div>
      <div className={styles.subtitle}>
        Faça sua doação agora e ajude a mudar o cenário ambiental no país.{' '}
      </div>
      <DonateButton
        text="Faça uma Doação"
        url={Settings.DONATE_URL}
        target="_blank"
      />
    </div>
  );
};

export default BannerSection;
