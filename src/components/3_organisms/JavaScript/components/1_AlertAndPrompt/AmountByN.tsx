
const beforeN_ofWhile = () => {
  const n = +prompt("Введите число");
  let i = 0;
  let sum = 0;
  while (i <= n) {
    sum = sum + i;
    i++;
  }
  alert(sum)
}

const AmountByN = () => {
  return <button className={"js-button"} onClick={beforeN_ofWhile}>Сумма чисел до n (через while)</button>
}

export default AmountByN;