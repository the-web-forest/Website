import styles from './style.module.css';

interface TitleProps {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	text: string;
	color?: string;
}

const Title = ({ as = 'h1', text, color = '#000' }: TitleProps) => {
	const AsComponent = as;
	return (
		<AsComponent className={styles.title} style={{ color: color }}>
			{text}
		</AsComponent>
	);
};

export default Title;
