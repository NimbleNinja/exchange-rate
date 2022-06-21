import React from 'react';

const ExchangeItem = ({
  selectValue,
  inputValue,
  changeHandler,
  inputName,
  selectName,
}) => {
  return (
    <div className="exchange__item">
      <select
        className="exchange__select"
        value={selectValue}
        name={selectName}
        onChange={changeHandler}
      >
        <option value="USD">USD Доллар США</option>
        <option value="EUR">EUR Євро</option>
        <option value="UAH">UAH Українська гривня</option>
      </select>
      <input
        className="exchange__input"
        type="number"
        value={inputValue}
        name={inputName}
        onChange={changeHandler}
      />
    </div>
  );
};

export default ExchangeItem;
