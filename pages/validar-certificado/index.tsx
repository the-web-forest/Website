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
        <div className={styles.box}>
          <h2>Autenticidade de Certificado</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="numero-certificado">Número do Certificado</label>
            <br />
            <input id="numero-certificado" placeholder="Insira o número de autenticação" type="text" className={styles.input} />
          </div>
          <button type="button" className={styles.button}>Autenticar Certificado</button>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default ValidacaoCertificado;