import { Dispatch, SetStateAction, useCallback } from 'react';
import ISelectOptionsEntity from '../../core/entities/SelectOptionsEntity';
import style from './style.module.scss';

interface ComboBoxProps extends React.HTMLProps<HTMLSelectElement> {
  placeHolder: string;
  selectedState: Dispatch<SetStateAction<any>>;
  options: ISelectOptionsEntity[];
}

const ComboBox = ({
  placeHolder,
  options,
  selectedState,
  onChange,
  value,
  ...rest
}: ComboBoxProps) => {
  const selectChange = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      selectedState(value);
      if (onChange) {
        onChange(event);
      }
    },
    [onChange, selectedState],
  );

  return (
    <label className={style.label}>
      <select onChange={selectChange} value={value} {...rest}>
        <option value="" disabled>
          {placeHolder}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ComboBox;
