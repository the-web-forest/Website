import styles from './style.module.css';

interface TopicProps {
	Icon: JSX.Element;
	Title: String | JSX.Element;
	description: String | JSX.Element;
}

const Topic = ({ Icon, Title, description }: TopicProps) => {
	return (
		<li className={styles.topic}>
			<div className={styles.topicHeader}>
				<div className={styles.topicIcon}>{Icon}</div>
				<h3 className={styles.topicTitle}>{Title}</h3>
			</div>
			<p className={styles.topicDescription}>{description}</p>
		</li>
	);
};

export default Topic;
