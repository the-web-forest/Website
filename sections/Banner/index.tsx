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
            <Title text="Floresta Digital Impacto Real" color="#fff" />
          </div>
          <div className={styles.bannerSubtitle}>
            Plante uma árvore agora e ajuda e mudar o cenário ambiental no país.{' '}
          </div>
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
