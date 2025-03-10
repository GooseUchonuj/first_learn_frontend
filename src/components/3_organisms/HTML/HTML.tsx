// && git add. && git commit -m && git push
// @ts-ignore

import {
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
} from "./helpers"

import CallAlert from './components/CallAlert.tsx'
import SumInConsole from "./components/SumInConsole.tsx";
import SupportWithName from "./components/SupportWithName.tsx";
import WhatYourAge from "./components/WhatYourAge.tsx";
import YouAreBoss from "./components/YouAreBoss.tsx";
import WhenHisBirthday from "./components/WhenHisBirthday.tsx";
import RestartLessons from "./components/RestartLessons.tsx";
import WhoThere from "./components/WhoThere.tsx";
import Test from "./components/Test.tsx";
import EvenNumbers from "./components/EvenNumbers.tsx";
import OddNumbers from "./components/OddNumbers.tsx";
import NumberName from "./components/NumberName.tsx";
import MoreOnehunger from "./components/MoreOnehunger.tsx";
import Amount from "./components/Amount.tsx";
import SwitchOnIf from "./components/SwitchOnIf.tsx";
import IfOnSwitch from "./components/IfOnSwitch.tsx";

function HTML() {


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
          <CallAlert />
          <SumInConsole />
          <SupportWithName/>
          <WhatYourAge/>
          <YouAreBoss/>

        </div>
        <div className={"column_of_js-button"}>
          <WhenHisBirthday/>
          <RestartLessons/>
          <WhoThere/>
          <Test/>
        </div>
        <div className={"column_of_js-button"}>
          <EvenNumbers/>
          <OddNumbers/>
          <NumberName/>
          <MoreOnehunger/>
          <Amount/>
          <SwitchOnIf/>
          <IfOnSwitch/>
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