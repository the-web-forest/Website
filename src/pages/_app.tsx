import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import Script from 'next/script';
import Settings from 'core/settings';

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		hotjar.initialize(3218769, 6);
	}, []);

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${Settings.getGoogleTagKey()}`}
			/>
			<Script
				id="datalayer-script"
				dangerouslySetInnerHTML={{
					__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', '${Settings.getGoogleTagKey()}', {
								page_path: window.location.pathname,
							});
						`
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
