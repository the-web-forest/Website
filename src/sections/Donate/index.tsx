import FilledButton, { FilledColor } from 'components/FilledButton';
import Title from 'components/Title';
import Settings from 'core/settings';
import { gaButtonClick } from 'libs/GoogleAnalytics';
import styles from './styles.module.css';

const text = 'Plante uma árvore e invista no meio ambiente';

const donateButtonFunction = () => {
	gaButtonClick('Plante-uma-arvore"');
	window.open(Settings.DONATE_URL, '_blank');
};

const DonateSection = () => {
	return (
		<div className={styles.donate} id="support">
			<div className={styles.container}>
				<div className={styles.donateInner}>
					<Title text={text} color="#FEFEFE" as="h1" />
					<FilledButton
						onClickFunction={donateButtonFunction}
						color={FilledColor.orange}
						type="function"
						text="Plante uma árvore"
					/>
				</div>
			</div>
		</div>
	);
};

export default DonateSection;
