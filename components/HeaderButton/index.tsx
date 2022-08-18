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
    <li className={styles.menuItem}>
      <a {...rest} href={url} target={target} className={styles.menuLink}>
        {text}
      </a>
    </li>
  );
};

export default HeaderButton;
