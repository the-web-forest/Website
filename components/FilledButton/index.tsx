import styles from './style.module.css';

export enum FilledColor {
  orange = 'orange',
  darkGreen = 'darkGreen',
}
interface FilledButtonProps {
  text: string;
  target?: string;
  url?: string;
  color?: FilledColor;
  type?: 'function' | 'link';
  onClickFunction?: () => void;
  width?: string;
}

const FilledButton = ({
  text,
  target = '_blank',
  url,
  type = 'link',
  onClickFunction,
  color = FilledColor.orange,
  width = 'auto',
}: FilledButtonProps) => {
  const getWrapper = (elem: JSX.Element) => {
    if (type == 'link') {
      return (
        <a href={url} target={target}>
          {elem}
        </a>
      );
    }

    return (
      <a onClick={() => (onClickFunction ? onClickFunction() : null)}>{elem}</a>
    );
  };

  const getMiddle = (): JSX.Element => {
    return (
      <button
        className={`${styles.container} ${styles[color]}`}
        style={{ width }}
      >
        {text}
      </button>
    );
  };

  const renderButton = () => {
    const middle = getMiddle();
    return getWrapper(middle);
  };

  return renderButton();
};

export default FilledButton;
