import Head from 'next/head';
import Script from 'next/script';
import Settings from '../core/settings';

interface HeaderData {
  title?: string;
}

const Header = (props: HeaderData) => {
  const getTitle = (): string => {
    let title = Settings.APP_NAME;

    if (props.title) title = `${props.title} - ${title}`;

    if (Settings.isDevelopment()) title = `DEV - ${title}`;

    return title;
  };

  const renderTags = () => {
    const noIndex = (
      <>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      </>
    );

    return Settings.isDevelopment() ? noIndex : null;
  };

  return (
    <Head>
      <title>{getTitle()}</title>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${Settings.getGoogleTagKey()}`}
      ></script>
      <script
        async
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:2844818,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                             window.dataLayer = window.dataLayer || [];
                             function gtag(){dataLayer.push(arguments);}
                             gtag('js', new Date());
             
                             gtag('config', '${Settings.getGoogleTagKey()}', {
                               page_path: window.location.pathname,
                             });
                     `,
        }}
      />
      <meta name="description" content={Settings.APP_NAME} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="Web Forest - Floresta Virtual" />
      <meta property="og:site_name" content={Settings.APP_NAME} />
      <meta property="og:url" content={Settings.APP_URL} />
      <meta
        property="og:description"
        content="Web Forest - Uma floresta virtual que transforma ações digitais em impactos reais"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${Settings.APP_URL}/images/open-graph.png`}
      />
      {renderTags()}
    </Head>
  );
};

export default Header;
