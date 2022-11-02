import { NextPage } from 'next';
import { useRef, useState } from 'react';

import Header from '../../components/header';
import FooterSection from '../../sections/Footer';
import HeaderSection from '../../sections/Header';
import Loading from '../../components/Loading';

import CertificatesService from '../../services/CertificatesService';

import moment from 'moment';

import styles from './styles.module.scss';

const ValidacaoCertificado: NextPage = () => {
  const codeInputRef = useRef<HTMLInputElement>(null);
  const certificatesService = new CertificatesService();

  const [infoClasses, setInfoClasses] = useState<string[]>([]);
  const [infoMessage, setInfoMessage] = useState<JSX.Element>(<></>);
  const [inputErrorMessage, setInputErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const success = (
    nome: string,
    dataEmissao: Date,
    url: string,
  ): JSX.Element => (
    <div className={styles.infotext}>
      <div>
        <span className={styles.infotitle}>Certificado Válido</span>
        <br />
        <span>Nome: {nome}</span>
        <br />
        <span>Data de Emissão: {moment(dataEmissao).format('DD/MM/YYYY')}</span>
      </div>
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.downloadbutton}>
          Baixar uma cópia
        </a>
      </div>
    </div>
  );

  const fail = (status: number): JSX.Element => (
    <>
      {status === 404 ? (
        <div>
          <div>
            <span className={styles.infotitle}>Certificado Inválido</span>
            <br />
            <span>O ID do certificado é inválido.</span>
            <br />
            <span>Revise as informações inseridas e tente novamente.</span>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <span>Erro</span>
            <br />
            <span>
              Ocorreu um erro ao tentar encontrar o certificado, contacte o
              suporte.
            </span>
          </div>
        </div>
      )}
    </>
  );

  function inputError(error: string) {
    let classes = [];
    classes?.push(styles.fail);
    setInfoClasses(classes);
    setInputErrorMessage(error);
  }

  function showInfoSuccess(nome: string, dataEmissao: Date, url: string) {
    let classes = [];
    classes?.push(styles.open, styles.success);
    setInfoClasses(classes);

    setInfoMessage(success(nome, dataEmissao, url));
  }

  function showInfoError(status: number) {
    let classes = [];
    classes?.push(styles.open, styles.fail);
    setInfoClasses(classes);

    setInfoMessage(fail(status));
  }

  async function handleVerifyCode() {
    setIsLoading(true);
    const value = codeInputRef?.current?.value;

    if (value !== undefined && value !== '') {
      if (inputErrorMessage !== '') setInputErrorMessage('');

      let resultadoBusca = await certificatesService.getByCode(value);

      if (typeof resultadoBusca === 'number') showInfoError(resultadoBusca);
      else
        showInfoSuccess(
          resultadoBusca.name,
          resultadoBusca.createtAt,
          resultadoBusca.certificateUrl,
        );
    } else inputError('Insira o ID do certificado');
    setIsLoading(false);

    if (codeInputRef.current !== null) codeInputRef.current.value = value ?? '';
  }

  return (
    <>
      <Header />
      <HeaderSection />
      <div id="container" className={styles.container}>
        <div className={styles.box}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <span className={styles.title}>Autenticidade de Certificado</span>
              <div className={styles.inputGroup}>
                <label htmlFor="numero-certificado">
                  ID do Certificado
                </label>
                <br />
                <input
                  id="numero-certificado"
                  placeholder="O ID está disponível no certificado"
                  type="text"
                  className={infoClasses.join(' ').trim() + ' ' + styles.input}
                  ref={codeInputRef}
                />
                <br />
                <span className={styles.inputError}>{inputErrorMessage}</span>
              </div>
              <button
                type="button"
                className={styles.button}
                onClick={handleVerifyCode}
              >
                Autenticar Certificado
              </button>
            </>
          )}
        </div>
        <div
          className={infoClasses.join(' ').trim() + ' ' + styles.information}
        >
          {infoMessage}
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ValidacaoCertificado;
