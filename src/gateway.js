const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export const getCurrencyRate = () => {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      return {
        USD: (+data.find(curr => curr.ccy === 'USD').buy).toFixed(2),
        EUR: (+data.find(curr => curr.ccy === 'EUR').buy).toFixed(2),
      };
    });
};

export const data = [
  { ccy: 'USD', base_ccy: 'UAH', buy: '35', sale: '35.60000' },
  { ccy: 'EUR', base_ccy: 'UAH', buy: '36', sale: '37.50000' },
  { ccy: 'BTC', base_ccy: 'USD', buy: '20255.8809', sale: '22388.0789' },
];
