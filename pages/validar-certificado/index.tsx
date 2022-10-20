import { NextPage } from "next";
import { useRef, useState } from "react";

import Header from "../../components/header";
import FooterSection from "../../sections/Footer";
import HeaderSection from "../../sections/Header";

import CertificatesService from "../../services/CertificatesService";

import styles from './styles.module.scss';

const ValidacaoCertificado: NextPage = () => {
  const codeInputRef = useRef<HTMLInputElement>(null);
  const certificatesService = new CertificatesService();
  const [infoClasses, setInfoClasses] = useState<string[]>([]);
  const [infoMessage, setInfoMessage] = useState<JSX.Element>(<></>);

  function showInfoSuccess(nome: string, dataEmissao: Date) {
    let classes = [];;
    classes?.push(styles.open, styles.success);
    const message: JSX.Element = 
      <>
        <span>Certificado Válido</span><br />
        <span>Nome: {nome}</span><br />
        <span>Data de Emissão: {dataEmissao}</span>
      </>;

    setInfoMessage(message)
    setInfoClasses(classes);
  }

  function showInfoError(mensagem: string) {
    let classes = [];
    classes?.push(styles.open, styles.fail);
    const message: JSX.Element = 
      <>
        <span>Certificado Inválido</span><br />
        <span>{mensagem}</span><br />
        <span>Revise as informações inseridas e tente novamente</span>
      </>;

    setInfoMessage(message)
    setInfoClasses(classes);
  }

  function closeInfo() {
    setInfoClasses([]);
  }
  
  async function handleVerifyCode() {
    if (codeInputRef?.current?.value !== undefined && codeInputRef?.current?.value !== '') {
      let resultadoBusca = await certificatesService.getByCode(codeInputRef?.current?.value);

      if (typeof(resultadoBusca) === 'string')
        showInfoError(resultadoBusca);
      else
        showInfoSuccess(resultadoBusca.name, resultadoBusca.createtAt);
    }
    else
      console.log('Digite algo');
  }
  
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
            <input 
              id="numero-certificado" 
              placeholder="Insira o número de autenticação" 
              type="text" 
              className={styles.input} 
              ref={codeInputRef}/>
          </div>
          <button 
            type="button" 
            className={styles.button} 
            onClick={handleVerifyCode}>
            Autenticar Certificado
          </button>
        </div>
        <div className={infoClasses.join(' ').trim() + ' ' + styles.information}>
          {infoMessage}
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default ValidacaoCertificado;