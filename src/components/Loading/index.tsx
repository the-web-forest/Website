import styles from './styles.module.scss';

export default function Loading(): JSX.Element {
	return (
		<>
			<div className={styles.spin}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<span>Carregando</span>
		</>
	);
}
