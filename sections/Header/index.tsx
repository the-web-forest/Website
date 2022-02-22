import DonateButton from "../../components/FilledButton";
import HeaderButton from "../../components/HeaderButton";
import Settings from "../../core/settings";
import styles from "./styles.module.css";
import { HiMenu } from "react-icons/hi";

const HeaderSection = () => {
  const toggleMenu = () => {
    const menu = document.getElementById(styles.menuMobileContainer);
    menu?.classList.toggle(styles.active);
  };

  const scrollDown = (id: string) => {
    const element = document.getElementById(id);
    element && element.scrollIntoView();
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const MenuOptions = () => {
    return (
      <>
        <HeaderButton
          text="Inicio"
          selected
          url={`${Settings.APP_URL}#start`}
          onClick={scrollUp}
        />

        <HeaderButton
          text="Apoie"
          url={`${Settings.APP_URL}#support`}
          onClick={() => scrollDown("#support")}
        />

        <HeaderButton
          text="Quem Somos"
          url={`${Settings.APP_URL}#team`}
          onClick={() => scrollDown("#team")}
        />

        <HeaderButton
          text="Contato"
          url={`${Settings.APP_URL}#contact`}
          onClick={() => scrollDown("#contact")}
        />
      </>
    );
  };

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
            <MenuOptions />
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
            <MenuOptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
