
const agePermission = () => {
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

const OnlyForAdults = () => {
  return <button className={"js-button"} onClick={agePermission}>Не слишком ли мал?</button>
}

export default OnlyForAdults;