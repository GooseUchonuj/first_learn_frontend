
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

const MinusNumber = () => {
  return <button className={"js-button"} onClick={minusNumber}>Съешь число</button>
}

export default MinusNumber;