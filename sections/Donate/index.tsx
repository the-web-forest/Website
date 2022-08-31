import FilledButton, { FilledColor } from '../../components/FilledButton';
import Title from '../../components/Title';
import Settings from '../../core/settings';
import { gaButtonClick } from '../../libs/GoogleAnalytics';
import { CatarseLogo } from './logo-catarse';
import styles from './styles.module.css';

const text = 'Apoie nosso projeto e invista no meio ambiente';

const donateButtonFunction = () => {
  gaButtonClick('saiba-mais');
  window.open(Settings.DONATE_URL, '_blank');
};

const DonateSection = () => {
  return (
    <div className={styles.donate} id="support">
      <div className={styles.container}>
        <div className={styles.donateInner}>
          <img
            className={styles.donateLogo}
            src="images/logo-catarse-branco.png"
            alt="Logo Catarse"
            title="Logo Catarse"
          />
          <Title text={text} color="#FEFEFE" />
          <FilledButton
            onClickFunction={donateButtonFunction}
            color={FilledColor.orange}
            type="function"
            text="Saiba Mais"
          />
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
