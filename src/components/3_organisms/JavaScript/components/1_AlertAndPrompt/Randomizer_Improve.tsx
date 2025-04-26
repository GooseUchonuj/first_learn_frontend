
const improveRandom = () => {

  let rangeValueX = 0;
  let rangeValueY = 10;
  let desiredValue;

  const startGame = prompt(`Приветствую, путник! Это игра про угадывание чисел.   
Хочешь ли ты установить границы с какого по какое число загадать? 
(Да/Нет) `);

  if (startGame === true || startGame === "да") {
    const userRangeX = +prompt("Отлично! С какого числа начнём?");
    // x;
    if (isNaN(userRangeX)) {
      alert("Ошибка: введите число!");
      return;
    }
    rangeValueX = userRangeX;

    const userRangeY = +prompt("А на каком закончим?");
    // y
    if (isNaN(userRangeY) || userRangeY <= rangeValueX) {
      alert("Ошибка: некорректный диапазон!");
      return;
    }
    rangeValueY = userRangeY;
  }

  // если пользователь ответит нет, то rangeValue по умолчанию и вопросы пропускаются
  else {
    alert(`Понял-принял. Тогда устанавливаем границы от ${rangeValueX} до ${rangeValueY}`);
  }
  desiredValue = Math.round(Math.random() * (rangeValueY - rangeValueX) + rangeValueX);

  while (true) {
    const userValue = prompt(`Угадай число от ${rangeValueX} до ${rangeValueY}`)

    // Проверка на отмену ввода или не число при начале игры (после ввода кол-ва чисел)
    if (userValue === "" || userValue === null || isNaN(+userValue)) {
      alert("Хорошо! Возвращайся позже =)");
      break; // Выход из цикла
    }

    const userNumValue = +userValue
    if (userNumValue === desiredValue) {
      alert('Поздравляю! Вы угадали');
      break; // Выход из цикла при угадывании
    } else if (userNumValue < desiredValue) {
      alert('Номер слишком маленький. Попробуйте ещё раз');
    } else if (userNumValue > desiredValue) {
      alert('Номер слишком большой. Попробуйте ещё раз');
    }
  }
}

const Randomizer_Improve = () => {
  <button className={"js-button"} onClick={improveRandom}>Случайное число (исправленное)</button>
}
export default Randomizer_Improve;