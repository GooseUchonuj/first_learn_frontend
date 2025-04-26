import React from "react";

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

const WhoThere = () => {
  return <button className={"js-button"} onClick={knockKnock}>Тук-тук</button>
}

export default WhoThere;