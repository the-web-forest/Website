import React, { useState } from 'react';
import DonateButton from '../../components/FilledButton';
import HeaderButton from '../../components/HeaderButton';
import Settings from '../../core/settings';
import styles from './styles.module.css';
import { HiMenu, HiX } from 'react-icons/hi';
import { gaButtonClick } from '../../libs/GoogleAnalytics';

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header}>
      <header>
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
              className={[
                styles.headerMenu,
                isMenuOpen ? styles.isMenuOpen : '',
              ].join(' ')}
            >
              <button
                className={styles.headerMenuMobile}
                onClick={toggleMenu}
                tabIndex={-1}
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
              <nav className={styles.menuOptionsNav}>
                <ul className={styles.menuOptions}>
                  <HeaderButton
                    text="Início"
                    onClick={() => {
                      gaButtonClick('inicio');
                      setIsMenuOpen(false);
                    }}
                    selected
                    url={`#`}
                  />
                  <HeaderButton
                    text="Apoie"
                    onClick={() => {
                      gaButtonClick('apoie');
                      setIsMenuOpen(false);
                    }}
                    url={`#support`}
                  />
                  <HeaderButton
                    text="Quem Somos"
                    onClick={() => {
                      gaButtonClick('quem-somos');
                      setIsMenuOpen(false);
                    }}
                    url={`#team`}
                  />
                  <HeaderButton
                    text="Contato"
                    onClick={() => {
                      gaButtonClick('contato');
                      setIsMenuOpen(false);
                    }}
                    url={`#contact`}
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
      </header>
    </div>
  );
};

export default HeaderSection;
