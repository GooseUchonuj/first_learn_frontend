const pow = (x: number, n: number) => {
  let counter = 1
  for (let i = 0; i < n; i++) {
    console.log(i)
    counter = counter * x;
  }
  return counter;
}
const showPow = () => {
  const x: number = +prompt("x?");
  const n: number = +prompt("n?");

  const answer = pow(x, n)
  alert(answer)
}

const RaisingPower = () => {
  return <button className={"js-button"} onClick={showPow}>Возведение в степень</button>
}

export default RaisingPower;