const result = () => {

  const num1 = 10,
    num2 = 20,
    result = num1 ?? num2
  alert(result)
}

const Test = () => {
  return <button className={"js-button"} onClick={result}>Проверка</button>
}

export default Test;