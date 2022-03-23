import styles from './styles.module.css';

interface AboutCardProps {
  icon: number;
  title: string;
  text: string;
}

const avaliableIcons = [styles.firstIcon, styles.secondIcon, styles.thirdIcon];

const AboutCard = ({ icon, title, text }: AboutCardProps) => {
  return (
    <div id={styles.container}>
      <div id={styles.iconTab}>
        <div id={styles.icon} className={avaliableIcons[icon]} />
      </div>
      <div id={styles.title}>{title}</div>
      <div id={styles.text}>{text}</div>
    </div>
  );
};

export default AboutCard;
