import Link from 'next/link';
import { gaButtonClick } from 'libs/GoogleAnalytics';
import SocialMediaIcon from 'components/SocialMediaIcon';
import Settings from 'core/settings';
import styles from './styles.module.css';

const FooterSection = () => {
	return (
		<div id={styles.container}>
			<div id={styles.block}>
				<div id={styles.blockTop}>
					<div id={styles.blockLogo} />
				</div>
				<div id={styles.blockBottom}>
					<div id={styles.blockSocialMediaText}>Siga nossas Redes Sociais</div>
					<div id={styles.socialMediaBlock}>
						<SocialMediaIcon
							type={'facebook'}
							title="Facebook"
							url={Settings.FACEBOOK_URL}
						/>
						<SocialMediaIcon
							type={'instagram'}
							title="Instagram"
							url={Settings.INSTAGRAM_URL}
						/>
						<SocialMediaIcon
							type={'linkedin'}
							title="LinkedIn"
							url={Settings.LINKEDIN_URL}
						/>
					</div>
				</div>
			</div>

			<div id={styles.linksBlock}>
				<Link
					href={Settings.FORUM_URL}
					onClick={() => gaButtonClick('forum')}
					target="_blank"
					rel="noreferrer"
				>
					Fórum
				</Link>
				<Link href="/transparencia" rel="noreferrer">
					Área de Transparência
				</Link>
				<Link href="/certificado">Autenticidade de Certificado</Link>
			</div>
		</div>
	);
};

export default FooterSection;
