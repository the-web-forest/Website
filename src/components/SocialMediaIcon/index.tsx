import styles from './style.module.css';

interface SocialMediaIconProps {
	type: 'facebook' | 'linkedin' | 'instagram';
	url: string;
	title: string;
}

const SocialMediaIcon = ({ type, title, url }: SocialMediaIconProps) => {
	const getClassName = (): string => {
		return styles[type];
	};

	const goToLink = (): void => {
		window.open(url, '_blank');
	};

	return (
		<div
			onClick={() => goToLink()}
			title={title}
			id={styles.container}
			className={getClassName()}
		/>
	);
};

export default SocialMediaIcon;
