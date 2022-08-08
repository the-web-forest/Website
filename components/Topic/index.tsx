import styles from './style.module.css';

interface TopicProps {
  Icon: JSX.Element;
  Title: String | JSX.Element;
  description: String | JSX.Element;
}

const Topic = ({ Icon, Title, description }: TopicProps) => {
  return (
    <div className={styles.topic}>
      <div className={styles.topicHeader}>
        <div className={styles.topicIcon}>{Icon}</div>
        <div className={styles.topicTitle}>{Title}</div>
      </div>
      <div className={styles.topicDescription}>{description}</div>
    </div>
  );
};

export default Topic;
