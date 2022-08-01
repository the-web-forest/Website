import React, { useState } from 'react';
import DonateButton from '../../components/FilledButton';
import HeaderButton from '../../components/HeaderButton';
import Settings from '../../core/settings';
import styles from './styles.module.css';
import { HiMenu } from 'react-icons/hi';
import { gaButtonClick } from '../../libs/GoogleAnalytics';

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="inicio">
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <div className={styles.headerLogo}>
              <a href={Settings.APP_URL} className={styles.headerLogoLink}>
                <img
                  src="images/logo.svg"
                  title={`Logo ${Settings.APP_NAME}`}
                  className={styles.headerLogoImage}
                />
              </a>
            </div>

            <div
              className={`${styles.headerMenu} ${
                isMenuOpen ? styles.isMenuOpen : ''
              }`}
            >
              <div className={styles.headerMenuMobile} onClick={toggleMenu}>
                <HiMenu size={24} />
              </div>
              <nav className={styles.menuOptionsNav}>
                <ul className={styles.menuOptions}>
                  <HeaderButton
                    text="Início"
                    onClick={() => gaButtonClick('inicio')}
                    selected
                    url={`${Settings.APP_URL}#inicio`}
                  />
                  <HeaderButton
                    text="Apoie"
                    onClick={() => gaButtonClick('apoie')}
                    url={`${Settings.APP_URL}#support`}
                  />
                  <HeaderButton
                    text="Quem Somos"
                    onClick={() => gaButtonClick('quem-somos')}
                    url={`${Settings.APP_URL}#team`}
                  />
                  <HeaderButton
                    text="Contato"
                    onClick={() => gaButtonClick('contato')}
                    url={`${Settings.APP_URL}#contact`}
                  />
                </ul>
              </nav>
            </div>

            <div className={styles.headerTrailing}>
              <DonateButton
                text="Faça uma Doação"
                url={Settings.DONATE_URL}
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
