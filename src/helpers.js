// Convert time to hours and minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'eur',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};
