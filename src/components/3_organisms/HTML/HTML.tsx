// && git add. && git commit -m && git push

function HTML() {
  const callAlert = () => {
    alert("я обязательно выучу")
  };

  const calcSum = (num1: number, num2: number) => {
    console.log(num1 + num2)
  }

  const someName = () => {
    const myName = "Ты";
    alert(`${myName} молодец! Старайся дальше`);
  }

  const whatAge = () => {
    const age = prompt('Сколько тебе лет?', 0);
    alert(`Тебе ${age} лет!`); // Тебе 100 лет!
  }

  const youBoss = () => {
    const Boss = confirm("Ты здесь главный?");
    alert(Boss); // true, если нажата OK
  }


  const whenSlavasBirthday = () => {
    const monthAndDay = prompt('Когда у Славы день рождения?');

    if (monthAndDay == 22.01) {
      alert('Вы правы!');
      return;
    }
    if (monthAndDay == "22/01") {
      alert('Вы правы!');
      return;
    }
    if (monthAndDay == "22 january") {
      alert('Вы правы!');
      return;
    }
    if (monthAndDay == "22 января") {
      alert('Вы правы!');
      return;
    }

    if (monthAndDay != 22.01) {
      alert('Неа!');
    } else if (monthAndDay != "22/01") {
      alert('Неа!');
    } else if (monthAndDay != "22 january") {
      alert('Неа!');
    } else if (monthAndDay != "22 января") {
      alert('Неа!');
    }
  }

  const todayYear = () => {
    const year = prompt("В каком году ты вернулась к изучению js?");

    if (year == 2025) {
      alert('Да, именно так');
    } else if (year < 2025) {
      alert('Это слишком рано...');
    } else if (year > 2025) {
      alert('Поздновато (да и надеюсь, что продолжаю совершенствоваться)');
    } else if (year == "Хрен его знает") {
      alert('Понимаемо');
    }

  }

  const knockKnock = () => {
    const hwoAreYou = prompt("Кто там?")
    // if (hwoAreYou == "Админ") {
    //   prompt ("Пароль?");
    // }
    // else if (hwoAreYou!== "Админ") {
    //   alert ("Я вас не знаю")
    //     }
    // else if (hwoAreYou!== null) {
    //   alert ("Отменено")
    //     }
    if (hwoAreYou == "Админ") {
      const password = prompt("Пароль?");
      if (password == "Не спрашивай пароль у командира") {
        alert("Добро пожаловать!")
      }
      ;
      if (password !== "Не спрашивай пароль у командира") {
        alert("Неверный пароль!")
      }
    }
    if (hwoAreYou !== "Админ") {
      alert("Я вас не знаю")
    }
  }

  const result = () => {

    const num1 = 10,
      num2 = 20,
      result = num1 ?? num2
    alert(result)
  }

  const evenNumber = () => {
    for (let i = 2; i <= 10; i++) {
      if (i % 2 !== 0) continue;
      alert(i)
    }
  }

  const unevenNumber = () => {
    const n = +prompt("Введите двузначное целое число");
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) continue;
      alert(i)
    }
  }

  const someNumber = () => {
    let i = 0;
    while (i < 3) {
      alert(`number ${i}!`);
      i++;
    }
  }

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

  const calculate = () => {
    let sum = 0;
    while (true) {
      const value = +prompt("Введите число", '');
      if (!value) break; // (*)
      sum += value;
    }
    alert('Сумма: ' + sum);
  }

  // switch (browser)  {
  //   case 'Edge':
  //     alert( "You've got the Edge!" );
  //     break;
  //
  //   case 'Chrome':
  //   case 'Firefox':
  //   case 'Safari':
  //   case 'Opera':
  //     alert( 'Okay we support these browsers too' );
  //     break;
  //
  //   default:
  //     alert( 'We hope that this page looks ok!' );
  // }

  const switching = () => {
    const browser = prompt("What is your browser?");

    if (browser === 'Edge') {
      alert("You've got the Edge!");
    }

    if (browser === 'Chrome'
      || browser === 'Firefox'
      || browser === 'Safari'
      || browser === 'Opera') {
      alert('Okay we support these browsers too');
    } else {
      alert('We hope that this page looks ok!');
    }

    if (browser === null) {
      alert('Oops');
    }
  }

  // const number = +prompt('Введите число между 0 и 3', '');
  //
  // if (number === 0) {
  //   alert('Вы ввели число 0');
  // }
  //
  // if (number === 1) {
  //   alert('Вы ввели число 1');
  // }
  //
  // if (number === 2 || number === 3) {
  //   alert('Вы ввели число 2, а может и 3');
  // }

  const reverse = () => {
    const number = prompt('Введите число между 0 и 3', '');

    switch (number) {
    case "0":
      alert('Вы ввели число 0');
      break;

    case "1":
      alert('Вы ввели число 1');
      break;

    case "2":
    case "3":
      alert('Вы ввели число 2, а может и 3');
      break;
    default:
      alert('Неизвестное значение');
    }
  }

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
    // const guess;
    // while (true) {
    //   guess = +prompt("Приветствую, путник! Угадай число");
    //
    //   if (guess = false) {
    //     alert("Понял-принял. Приходи в другой раз");
    //     break;
    //   }
    //
    //   if (guess == 36) {
    //     alert('Поздравляю! вы угадали');
    //     break;
    //   }
    //   if (guess < 36) {
    //     +prompt('Номер слишком маленький. Попробуйте ещё раз');
    //     continue;
    //   }
    //
    //   if (guess > 36) {
    //     +prompt('Номер слишком большой. Попробуйте ещё раз');
    //     continue;
    //   }
    // }

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

    guessNumber(); // Запуск игры

  }


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

  const minusNumber = () => {
    const aboutGame = alert(`Приветствую игроков! Эта игра предназначена на двоих.
  
     В чём её суть? Одному из игроков нужно загадать число больше трёх.
     После, игроки поочерёдно вычитают из загаданного числа от 1 до 3х.
     Выигрывает последний игрок, у кого после вычитания получится число 0 или меньше`);

    const playerNumber = prompt("Если готовы начать, загадайте и впишите число больше пяти");
    if (playerNumber > 5) {
      alert(`Отлично! Ваше число ${playerNumber}.`)
    }
    else if (playerNumber < 5) {
      alert("Мой друг, загадайте число больше, иначе будет неинтересно играть")
    }
    else if (playerNumber === undefined || isNaN(+playerNumber)) {
      alert("Хорошо ) приходите позже!")
      return;
    }

    const playerAction = +prompt(`Вычтите из ${playerNumber} число от 1 до 3х`)

    if (playerAction > 4) // от сюда действие должно вернуться к const playerAction
      {
      alert("Айяй. Вычитаем только от 1 до 3х")
    }
    else if (playerAction === undefined || null || false || isNaN(+playerAction)) {
      alert("Хорошо ) приходите позже!")
      return;
    }

    for (playerNumber > 0; playerAction > 0; playerAction < 4) {
      const minus = playerNumber - playerAction;
      const nextAction = prompt(`Осталось ${minus}. Игрок , ваша очередь`)
      if (nextAction === null || false || isNaN (+nextAction) ) {
        alert("Хорошо! Сыграем позже")
        break;
      }
      if (playerNumber === 0) {
        alert ("Поздравляю, игрок! Победа ваша!")
      }
    }
    // const restart = prompt("Хотите сыграть ещё раз? Да/Нет")
    // if (restart === null || false || isNaN (+restart) ) {
    // alert("Хорошо ) приходите позже!")
    // }

  }

  return (

    <section className={"monitor"}>
      <h2 id={"html"}>HTML</h2>
      <h3>Теги</h3>
      <ul>
        <li>div</li>
        <li>a</li>
        <li>p</li>
        <li>span</li>
        <li>img</li>
        <li>br</li>
        <li>section</li>
        <li>nav</li>
        <li>main</li>
        <li>footer</li>
      </ul>
      <h3>Атрибуты</h3>
      <h3 id={"java"}>Java script</h3>
      <div className={"group_of_js-button"}>
        <div className={"column_of_js-button"}>
          <button className={"js-button"} onClick={callAlert}>Click</button>
          {/*простой alert при нажатии*/}
          <button className={"js-button"} onClick={() => calcSum(10, 2)}>Sum in console</button>
          {/*для консоли разработчика*/}
          <button className={"js-button"} onClick={someName}>Support</button>
          <button className={"js-button"} onClick={whatAge}>How old are you?</button>
          {/*promt выводит поле для текста*/}
          <button className={"js-button"} onClick={youBoss}>Are you boss?</button>
          {/*confirm подтверждение true or false*/}
        </div>
        <div className={"column_of_js-button"}>
          <button className={"js-button"} onClick={whenSlavasBirthday}>When his birthday?</button>
          <button className={"js-button"} onClick={todayYear}>Restart to js</button>
          <button className={"js-button"} onClick={knockKnock}>Тук-тук</button>
          <button className={"js-button"} onClick={result}>Проверка</button>
        </div>
        <div className={"column_of_js-button"}>
          <button className={"js-button"} onClick={evenNumber}>Чётные числа</button>
          <button className={"js-button"} onClick={unevenNumber}>Нечётные числа</button>
          <button className={"js-button"} onClick={someNumber}>Нумеровка</button>
          <button className={"js-button"} onClick={notMore100}>Больше 100</button>
          <button className={"js-button"} onClick={calculate}>Cумма, сколько введёшь</button>
          <button className={"js-button"} onClick={switching}>Переделка в if</button>
          <button className={"js-button"} onClick={reverse}>Переделка в switch</button>
        </div>
        <div className={"column_of_js-button"}>
          <button className={"js-button"} onClick={age_permission}>Не слишком ли мал?</button>
          <button className={"js-button"} onClick={message}>Сообщение от Ани</button>
          <button className={"js-button"} onClick={showPow}>Возведение в степень</button>
          <button className={"js-button"} onClick={beforeN_ofWhile}>Сумма чисел до n (через while)</button>
          <button className={"js-button"} onClick={beforeN_ofFor}>Сумма чисел до n (через for)</button>
          <button className={"js-button"} onClick={factorialWhile}>Факториал числа (while)</button>
          <button className={"js-button"} onClick={factorialFor}>Факториал числа(for)</button>
        </div>
        <div className={"column_of_js-button"}>
          <button className={"js-button"} onClick={switchRepeat}>Расписание</button>
          <button className={"js-button"} onClick={guessNumber}>Игра угадай число (while)</button>
          <button className={"js-button"} onClick={randomNumber}>Случайное число</button>
          <button className={"js-button"} onClick={improveRandom}>Случайное число (исправленное)</button>
          <button className={"js-button"} onClick={minusNumber}>Съешь число</button>
        </div>
      </div>
      <ul>
        <li>Компоненты</li>
        <li>React</li>
      </ul>
    </section>
  )
}

export default HTML