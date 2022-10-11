import { NextPage } from "next";
import Header from "../../components/header";
import FooterSection from "../../sections/Footer";
import HeaderSection from "../../sections/Header";
import styles from './styles.module.scss';

const ValidacaoCertificado: NextPage = () => {
  
  return (
    <>
      <Header />
      <HeaderSection />
      <div id="container" className={styles.container}>
        
      </div>
      <FooterSection />
    </>
  );
}

export default ValidacaoCertificado;