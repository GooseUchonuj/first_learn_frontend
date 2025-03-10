
const notMore100 = () => {
  let number = +prompt("Введите число");
  if (number > 100) {
    alert(`Готово! Ваш номер ${number}!`);
    return;
  }
  while (number <= 100) {
    number = prompt("Введите больше 100 пожалуйста");
    if (+number > 100) {
      alert(`Готово! Ваш номер ${number}!`);
      return;
    }
    if (!number) {
      break;
    }

  }
}

const MoreOnehunger = () => {
  return <button className={"js-button"} onClick={notMore100}>Больше 100</button>
}

export default MoreOnehunger