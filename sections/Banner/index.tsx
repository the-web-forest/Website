import styles from './styles.module.css';
import DonateButton from '../../components/FilledButton';
import Title from '../../components/Title';
import Settings from '../../core/settings';

const BannerSection = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.bannerInner}>
          <div className={styles.bannerTitle}>
            <Title text="Floresta Digital Impacto Real" color="#fff" as="h2" />
          </div>
          <p className={styles.bannerSubtitle}>
            Plante uma árvore agora e ajude a mudar o cenário ambiental no país.{' '}
          </p>
          <div>
            <DonateButton
              text="Plantar Agora"
              url={Settings.DONATE_URL}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
