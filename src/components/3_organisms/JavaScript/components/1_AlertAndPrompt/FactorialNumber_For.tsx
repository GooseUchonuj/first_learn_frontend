
const factorialFor = () => {
  const n = +prompt("Введите число");
  let factor = 1;
  for (let i = 1; i <= n; i++) {
    factor *= i;
  }
  alert(factor)
}

const FactorialNumber_For = () => {
  return <button className={"js-button"} onClick={factorialFor}>Факториал числа(for)</button>
}

export default FactorialNumber_For;