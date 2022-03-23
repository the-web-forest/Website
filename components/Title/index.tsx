import styles from './style.module.css';

interface TitleProps {
  text: string;
  color?: string;
}

const Title = ({ text, color = '#000' }: TitleProps) => {
  return (
    <div className={styles.title} style={{ color: color }}>
      {text}
    </div>
  );
};

export default Title;
