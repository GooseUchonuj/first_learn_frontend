
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

const RestartLessons = () => {
  return <button className={"js-button"} onClick={todayYear}>Restart to js</button>
}

export default RestartLessons;