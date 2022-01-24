import React from 'react';

import cx from 'classnames';

type SelectProps = {
  itemsList: string[];
  value?: string;
  selectHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({ itemsList, value, selectHandler }) => {
  return (
    <select
      name="color"
      id="color"
      value={value}
      className={cx(
        'block max-w-xs rounded text-tw-secondary',
        'focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-400'
      )}
      onChange={(event) => selectHandler(event)}
    >
      {itemsList.map((item) => (
        <option key={item} value={item}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default Select;
