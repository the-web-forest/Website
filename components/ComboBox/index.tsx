import {
  Dispatch,
  SelectHTMLAttributes,
  SetStateAction,
  useCallback,
} from 'react';
import style from './style.module.scss';

interface ComboBoxProps extends React.HTMLAttributes<HTMLSelectElement> {
  placeHolder: string;
  selectedState: Dispatch<SetStateAction<any>>;
  options: {
    label: string;
    value: any;
  }[];
}

const ComboBox = ({
  placeHolder,
  options,
  selectedState,
  ...rest
}: ComboBoxProps) => {
  const selectChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      selectedState(value);
    },
    [selectedState],
  );

  return (
    <select
      onChange={selectChange}
      defaultValue=""
      id={style.comboBox}
      {...rest}
    >
      <option value="" disabled>
        {placeHolder}
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default ComboBox;
