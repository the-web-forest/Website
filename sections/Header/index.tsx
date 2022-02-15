import DonateButton from "../../components/FilledButton";
import HeaderButton from "../../components/HeaderButton";
import Settings from "../../core/settings";
import styles from "./styles.module.css";
import { HiMenu } from "react-icons/hi";



const HeaderSection = () => {

    const toggleMenu = () => {
        const menu = document.getElementById(styles.menuMobileContainer);
        menu?.classList.toggle(styles.active);
    }

  return (
    <div className={styles.container}>
      <div id={styles.headerDesktop}>
        <div id={styles.divLeft}>
          <div id={styles.logoContainer}>
            <a href={Settings.APP_URL}>
              <div id={styles.logo} title={Settings.APP_NAME} />
            </a>
          </div>

          <div id={styles.menuOptions}>
            <HeaderButton
              text="Inicio"
              selected
              url={`${Settings.APP_URL}#start`}
            />

            <HeaderButton text="Apoie" url={`${Settings.APP_URL}#support`} />

            <HeaderButton text="Quem Somos" url={`${Settings.APP_URL}#us`} />

            <HeaderButton text="Contato" url={`${Settings.APP_URL}#contact`} />
          </div>
        </div>

        <div id={styles.divRight}>
          <DonateButton
            text="Faça uma Doação"
            url="https://www.webforest.eco"
            target="_blank"
          />
        </div>
      </div>

      <div id={styles.headerMobile}>
        <div id={styles.headerMenu}>
          <div />
          <div id={styles.logoContainer}>
            <a href={Settings.APP_URL}>
              <div id={styles.logo} title={Settings.APP_NAME} />
            </a>
          </div>
          <div id={styles.menuMobile} onClick={toggleMenu}>
            <HiMenu size={24} />
          </div>
        </div>
        <div id={styles.menuMobileContainer}>
          <div id={styles.menuMobileOptions}>
            <HeaderButton
              text="Inicio"
              selected
              url={`${Settings.APP_URL}#start`}
            />

            <HeaderButton text="Apoie" url={`${Settings.APP_URL}#support`} />

            <HeaderButton text="Quem Somos" url={`${Settings.APP_URL}#us`} />

            <HeaderButton text="Contato" url={`${Settings.APP_URL}#contact`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
