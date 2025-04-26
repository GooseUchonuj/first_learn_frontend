const evenNumber = () => {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    alert(i)
  }
}
const EvenNumbers = () => {
  return <button className={"js-button"} onClick={evenNumber}>Чётные числа</button>
}

export default EvenNumbers;