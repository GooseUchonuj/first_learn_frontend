import React from "react";

const someNumber = () => {
  let i = 0;
  while (i < 3) {
    alert(`number ${i}!`);
    i++;
  }
}

const NumberName = () => {
  return <button className={"js-button"} onClick={someNumber}>Нумеровка</button>
}

export default NumberName;