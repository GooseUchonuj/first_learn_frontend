
const factorialWhile = () => {
  const n = +prompt("Введите число");
  let i = 1;
  let factor = 1;
  while (i <= n) {
    // factor = n*(i+1);
    factor *= i;
    // factor += (i**n)**(n-1);

    // factor = n * i;
    // pow = i - 1;
    // result = factor**pow;

    i++;
  }
  alert(factor)
}

const FactorialNumber_While = () => {
  return <button className={"js-button"} onClick={factorialWhile}>Факториал числа (while)</button>
}

export default FactorialNumber_While;