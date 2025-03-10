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

/* спрашивает когда др у Славы и знает правильный ответ */

const WhenHisBirthday = () => {
  return <button className={"js-button"} onClick={whenSlavasBirthday}>When his birthday?</button>
}

export default WhenHisBirthday;