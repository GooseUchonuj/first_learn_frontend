const calcSum = (num1: number, num2: number) => {
  console.log(num1 + num2)
}

/* для консоли разработчика */
const SumInConsole = () => {
  return <button className={"js-button"} onClick={() => calcSum(10, 2)}>Sum in console</button>
}

export default SumInConsole;
