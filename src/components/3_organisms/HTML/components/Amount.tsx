import React from "react";

const calculate = () => {
  let sum = 0;
  while (true) {
    const value = +prompt("Введите число", '');
    if (!value) break; // (*)
    sum += value;
  }
  alert('Сумма: ' + sum);
}

const Amount = () => {
  return <button className={"js-button"} onClick={calculate}>Cумма, сколько введёшь</button>
}
export default Amount;