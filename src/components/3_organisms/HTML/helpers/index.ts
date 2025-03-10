


const age_permission = () => {
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('А родители разрешили?');
    }
  }

  function showMovie(age) {
    if (!checkAge(age)) {
      return;
    }
    alert("Вам показывается кино"); // (*)
    // ...
  }

  const age = prompt('Сколько вам лет?', 18);
  if (checkAge(age)) {
    alert('Доступ получен');
    showMovie(age)
    // Спросить, как эту функцию присоединить, чтобы выполнялось действие после открытого доступа
  } else {
    alert('Доступ закрыт');
  }
}

const message = () => {
  function showMessage(from, text) { // параметры: from, text
    alert(from + ': ' + text);
  }

  showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
  showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)
}

const pow = (x: number, n: number) => {
  let counter = 1
  for (let i = 0; i < n; i++) {
    console.log(i)
    counter = counter * x;
  }
  return counter;
}
const showPow = () => {
  const x: number = +prompt("x?");
  const n: number = +prompt("n?");

  const answer = pow(x, n)
  alert(answer)
}

const beforeN_ofWhile = () => {
  const n = +prompt("Введите число");
  let i = 0;
  let sum = 0;
  while (i <= n) {
    sum = sum + i;
    i++;
  }
  alert(sum)
}

const beforeN_ofFor = () => {
  const n = +prompt("Введите число");
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  alert(sum)
}

const factorialWhile = () => {
  const n = +prompt("Введите число");
  let i = 1;
  let factor = 1;
  while (i <= n) {
    // factor = n*(i+1);
    factor *= i;
    // factor += (i**n)**(n-1);

    // factor = n * i;
    // pow = i - 1;
    // result = factor**pow;

    i++;
  }
  alert(factor)
}

const factorialFor = () => {
  const n = +prompt("Введите число");
  let factor = 1;
  for (let i = 1; i <= n; i++) {
    factor *= i;
  }
  alert(factor)
}

const switchRepeat = () => {
  const week = prompt("Введите день недели")
  switch (week) {
    case "1":
    case "Понедельник":
    case "Monday":
    case "月曜日":

    case "2":
    case "Вторник":
    case "Tuesday":
    case "火曜日":

    case "3":
    case "Среда":
    case "Wednesday":
    case "水曜日":

    case "5":
    case "Пятница":
    case "Friday":
    case "金曜日":
      alert("Работаем c 10:00 до 20:00");
      break;

    case "4":
    case "Четверг":
    case "Thursday":
    case "木曜日":

    case "6":
    case "Суббота":
    case "Saturday":
    case "土曜日":
      alert("Работаем c 12:00 до 20:00");
      break;

    case "7":
    case "Воскресенье":
    case "Sunday":
    case "日曜日":
      alert("Выходной");
      break;

    default:
      alert("Простите, не поняли. Нажмите снова и введите более корректное название дня")
  }
  //   *На будущее, узнать, как можно сортировать данные
  //   в зависимости от введённого символа или языка
}

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


export {
  age_permission,
  message,
  showPow,
  beforeN_ofWhile,
  beforeN_ofFor,
  factorialWhile,
  factorialFor,
  switchRepeat,
  guessNumber,
  randomNumber,
  improveRandom,
}