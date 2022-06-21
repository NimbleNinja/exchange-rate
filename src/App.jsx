import { useEffect, useState } from 'react';
import ExchangeItem from './components/ExchangeItem';
import { getCoeficient, getInputValue } from './tools';
import './styles/app.scss';
import { getCurrencyRate } from './gateway';

function App() {
  const [currencyRate, setCurrencyRate] = useState({
    USD: null,
    EUR: null,
  });

  useEffect(() => {
    getCurrencyRate().then(data => {
      setCurrencyRate(data);
    });
  }, []);

  const [values, setValues] = useState({
    firstSelect: 'UAH',
    secondSelect: 'USD',
    firstInp: 0,
    secondInp: 0,
  });

  const { firstInp, firstSelect, secondInp, secondSelect } = values;

  const valuesHandler = e => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    switch (name) {
      case 'firstSelect': {
        setValues({
          ...values,
          firstSelect: value,
          secondInp: getInputValue(
            firstInp,
            getCoeficient(value, secondSelect, currencyRate)
          ),
        });
        break;
      }

      case 'secondSelect': {
        setValues({
          ...values,
          secondSelect: value,
          firstInp: getInputValue(
            secondInp,
            getCoeficient(value, firstSelect, currencyRate)
          ),
        });
        break;
      }

      case 'firstInp': {
        setValues({
          ...values,
          firstInp: value,
          secondInp: getInputValue(
            value,
            getCoeficient(firstSelect, secondSelect, currencyRate)
          ),
        });

        break;
      }

      case 'secondInp': {
        setValues({
          ...values,
          secondInp: value,
          firstInp: getInputValue(
            value,
            getCoeficient(secondSelect, firstSelect, currencyRate)
          ),
        });
        break;
      }

      default:
        return null;
    }
  };

  const { EUR, USD } = currencyRate;

  return (
    <div className="app">
      <header className="header">
        <h2 className="header__title">Currency rate</h2>
        <div className="header__currency">
          <div className="header__rate">{`USD: ${USD}`}</div>
          <div className="header__rate">{`EUR: ${EUR}`}</div>
        </div>
      </header>
      <main className="content">
        <h2 className="content__title">Currency exchange</h2>
        <div className="content__exchange exchange">
          <ExchangeItem
            inputValue={firstInp}
            inputName="firstInp"
            selectValue={firstSelect}
            selectName="firstSelect"
            changeHandler={valuesHandler}
          />
          <ExchangeItem
            inputValue={secondInp}
            inputName="secondInp"
            selectValue={secondSelect}
            selectName="secondSelect"
            changeHandler={valuesHandler}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
