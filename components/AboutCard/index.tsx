import styles from './styles.module.css';

interface AboutCardProps {
  icon: number;
  title: string;
  text: string;
}

const avaliableIcons = [styles.firstIcon, styles.secondIcon, styles.thirdIcon];

const AboutCard = ({ icon, title, text }: AboutCardProps) => {
  return (
    <li id={styles.container}>
      <div id={styles.iconTab}>
        <div id={styles.icon} className={avaliableIcons[icon]} />
      </div>
      <h3 id={styles.title}>{title}</h3>
      <p id={styles.text}>{text}</p>
    </li>
  );
};

export default AboutCard;
