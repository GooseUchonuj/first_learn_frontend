import React from "react";

const unevenNumber = () => {
  const n = +prompt("Введите двузначное целое число");
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) continue;
    alert(i)
  }
}

const OddNumbers = () => {
  return <button className={"js-button"} onClick={unevenNumber}>Нечётные числа</button>
}

export default OddNumbers;