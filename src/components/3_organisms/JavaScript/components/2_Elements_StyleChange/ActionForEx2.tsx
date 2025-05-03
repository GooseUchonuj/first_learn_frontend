const Ex2Game = () => {

  /* ----------- Запуск игры  -------*/
  /* загадывается число от 1 до 20 */
  /* сохраняется и при разгадке выводится в окно desireNumber вместо знака вопроса*/
  /* далее начинается цикл угадывания и замены подписи в CheckAlert "Начните угадывать.. "
  * запускается при нажатии кнопки проверки*/
  /* сначала CheckButton проверяет, что введено число, потом передаёт, в зависимости от условия, нужное сообщение
  * и вычитает попытку */

}

const ActionForEx2 = () => {
  return <div className={"exerciseContainer"}>
    <div className={"gameStartContainer"}>
      <button className={"button"} id={"StartButton"} onClick={Ex2Game}>Новая игра</button>
      <div className={"range"}> Число между 1 и 20 {} </div>
      {/* потренироваться с дополнением подписи */}
    </div>
    <div className={"desireContainer"}>
      <div id={"youAreWin"}> Угадай число</div>
      <div className={"desireNumber"}>?</div>
    </div>
    <div className={"promptContainer"}>
      <div className={"inputLineContain"}>
        <div id={"CheckAlert"}> Начните угадывать...</div>
        <input className={"inputLine"}></input>
        <button className={"button"} id={"CheckButton"}>Проверка</button>
      </div>
      <div className={"attempt"}>
        <p id={"AttemptNumber"}>Кол-во попыток: {}</p>
        <p id={"newRecord"}>Рекорд: {}</p>
      </div>
    </div>
  </div>
}

export default ActionForEx2;