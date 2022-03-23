import { AnchorHTMLAttributes } from 'react';
import styles from './style.module.css';

interface HeaderButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  selected?: boolean;
  url: string;
}

const HeaderButton = ({
  text,
  url,
  target = '_self',
  selected = false,
  ...rest
}: HeaderButtonProps) => {
  const getClassName = (): string => {
    return selected ? styles.selected : String.call(null);
  };

  return (
    <a {...rest} href={url} target={target}>
      <div id={styles.container} className={getClassName()}>
        <div id={styles.text}>{text}</div>
      </div>
    </a>
  );
};

export default HeaderButton;
