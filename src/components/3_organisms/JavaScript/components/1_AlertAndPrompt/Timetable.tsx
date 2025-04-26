
const switchRepeat = () => {
  const week = prompt("Введите день недели")
  switch (week) {
  case "1":
  case "Понедельник":
  case "пн":
  case "Monday":
  case "月曜日":

  case "2":
  case "Вторник":
  case "вт":
  case "Tuesday":
  case "火曜日":

  case "3":
  case "Среда":
  case "ср":
  case "Wednesday":
  case "水曜日":

  case "5":
  case "Пятница":
  case "пт":
  case "Friday":
  case "金曜日":
    alert("Работаем c 10:00 до 20:00");
    break;

  case "4":
  case "Четверг":
  case "чт":
  case "Thursday":
  case "木曜日":

  case "6":
  case "Суббота":
  case "сб":
  case "Saturday":
  case "土曜日":
    alert("Работаем c 12:00 до 20:00");
    break;

  case "7":
  case "Воскресенье":
  case "вс":
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

const Timetable = () => {
  return <button className={"js-button"} onClick={switchRepeat}>Расписание</button>
}

export default Timetable;