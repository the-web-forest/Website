import styles from './style.module.css';

interface NewsCardProps {
	photoUrl: string;
	title: string;
	date: string;
	newsUrl: string;
}

const NewsCard = ({ photoUrl, title, date, newsUrl }: NewsCardProps) => {
	{
		/* TODO: 
    - Adicionar um novo campo "altTitle", com a descrição da imagem da notícia
    - Rever link acessível
  */
	}
	return (
		<a href={newsUrl} target="_blank" rel="nofollow" className={styles.news}>
			<div className={styles.newsImage}>
				<img src={photoUrl} alt={title} title={title} />
			</div>
			<div className={styles.newsContent}>
				<div>
					<p className={styles.newsTitle}>{title}</p>
					<span className={styles.newsDate}>{date}</span>
				</div>
				<div className={styles.newsButton}>Saiba mais</div>
			</div>
		</a>
	);
};

export default NewsCard;
