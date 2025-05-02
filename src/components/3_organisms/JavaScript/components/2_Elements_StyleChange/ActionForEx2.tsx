const Ex2Game = () => {

  /* ----------- Запуск игры  -------*/
  /* загадывается число от 1 до 20 */
  /* сохраняется и при разгадке выводится в окно desireNumber заместо вопроса*/
  /*  */

}

const ActionForEx2 = () => {
  return <div className={"exerciseContainer"}>
    <div className={"gameStartContainer"}>
      <button className={"button"} id={"StartButton"} onClick={Ex2Game}>Новая игра</button>
      <div className={"range"}> Число между 1 и {}</div>
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