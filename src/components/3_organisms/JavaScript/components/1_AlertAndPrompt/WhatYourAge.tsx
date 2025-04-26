const whatAge = () => {
  const age = prompt('Сколько тебе лет?', 0);
  alert(`Тебе ${age} лет!`); // Тебе 100 лет!
}

/*promt выводит поле для текста*/

const WhatYourAge = () => {
  return <button className={"js-button"} onClick={whatAge}> How old are you? </button>
}

export default WhatYourAge;