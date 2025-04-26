
const randomNumber = () => {

  let rangeValue = 5;
  const desiredValue = Math.round(Math.random() * rangeValue)

  const startGame = alert(`Приветствую, путник, ты вернулся!  Угадай, какое выпадет число. Наше число от 0 до ${rangeValue} `);
  // было userValue. Теперь эта переменная будет после ввода userRange

  const userRange = +prompt("Однако это может быть слишком просто. До какого числа от нуля ты хочешь угадывать?");
  // userRange = rangeValue;

  const renumber = +(rangeValue = userRange);
  if (userRange === Number) {
  }

  const userOrderRange = alert(`Отлично! Загаданное число будет от 0 до ${rangeValue}. Начинаем?"`);
  if (userOrderRange === true) {
    alert("Начинаем =)");
  }

  while (true) {
    const userValue = prompt(`Угадай число от 0 до ${rangeValue}`)

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

// alert(Math.random()) - если писать так, то будут генерироваться числа с дробями.
// Чтобы чисел после запятой стало меньше - умножаем на 10, 100, 1000 или любое похожее число

// alert(Math.round(Math.random() * 100))
// Math.round округляет числа так, чтобы не высвечивались дроби.=
// Math.random() * 100 - умножение на 100 здесь значит, что будут генерироваться числа от 1 до 100

const Randomizer = () => {
  return <button className={"js-button"} onClick={randomNumber}>Случайное число</button>
}

export default Randomizer;