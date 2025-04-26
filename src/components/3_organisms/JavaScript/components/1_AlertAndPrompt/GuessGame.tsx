
const guessNumber = () => {
  let guess; // Выносим переменную наружу, чтобы обновлять её в циклах


  while (true) { // Бесконечный цикл, который прервётся при угадывании
    guess = +prompt("Приветствую, путник! Угадай число");

    // Проверка на отмену ввода или не число
    if (isNaN(guess)) {
      alert("Игра окончена!");
      break; // Выход из цикла
    }

    if (guess === 36) {
      alert('Поздравляю! Вы угадали');
      break; // Выход из цикла при угадывании
    } else if (guess < 36) {
      alert('Номер слишком маленький. Попробуйте ещё раз');
    } else {
      alert('Номер слишком большой. Попробуйте ещё раз');
    }
  }
};

// guessNumber(); // Запуск игры

const GuessGame = () => {
  return
  <button className={"js-button"} onClick={guessNumber}>Игра угадай число (while)</button>
}

export default GuessGame;