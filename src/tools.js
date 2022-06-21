export function getCoeficient(currForExchange, currToExchange, data) {
  if (currForExchange === currToExchange) {
    return 1;
  }

  const firstBuy = currForExchange === 'UAH' ? 1 : data[currForExchange];

  const secondBuy = currToExchange === 'UAH' ? 1 : data[currToExchange];

  const coeficient = firstBuy / secondBuy;

  return coeficient;
}

export const getInputValue = (value, coeficient) => {
  return (value * coeficient).toFixed(2);
};
