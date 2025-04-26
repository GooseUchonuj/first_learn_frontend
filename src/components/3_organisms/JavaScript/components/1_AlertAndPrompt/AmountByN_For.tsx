
const beforeN_ofFor = () => {
  const n = +prompt("Введите число");
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  alert(sum)
}

const AmountByN_For = () => {
  return <button className={"js-button"} onClick={beforeN_ofFor}>Сумма чисел до n (через for)</button>
}

export default AmountByN_For;