import FilledButton, { FilledColor } from "../../components/FilledButton";
import Title from "../../components/Title";
import Settings from "../../core/settings";
import { gaButtonClick } from "../../libs/GoogleAnalytics";
import styles from "./styles.module.css";

const text = "Apoie nosso projeto e invista no meio ambiente";

const donateButtonFunction = () => {
  gaButtonClick('saiba-mais');
  window.open(Settings.DONATE_URL, '_blank')
}

const DonateSection = () => {
  return (
    <section id="support">
      <div id={styles.container}>
        <div id={styles.photo} />
        <div id={styles.description}>
          <div id={styles.catarseLogo} />
          <Title text={text} color="#4c4c4c" />
          <FilledButton
            onClickFunction={donateButtonFunction}
            color={FilledColor.darkGreen}
            width="154px"
            type="function"
            text="Saiba Mais"
          />
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
