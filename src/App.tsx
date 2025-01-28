import Git from "./components/3_organisms/GIT/Git.tsx"
import LaunchingApp from "./components/3_organisms/LaunchingApp/LaunchingApp.tsx"
import HTML from "./components/3_organisms/HTML/HTML.tsx"
import CSS from "./components/3_organisms/CSS/CSS.tsx"
import BEM from "./components/3_organisms/BEM/BEM.tsx"
import UiKit from "./components/3_organisms/UiKit/UiKit.tsx"
import Ex1 from "./components/3_organisms/Exercises/Ex1.tsx"


function App(
) {
  const callAlert = () => {
    alert("я обязательно выучу")
  };

  const calcSum = (num1: number, num2: number) => {
    console.log(num1 + num2)
  }

  // спросить у Славы, почему не работает с обратными кавычками

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

  return (
    <div className={"main-container"}>
      <div className={"menu"}>
        <button onClick={callAlert}>Click</button>
        {/*простой alert при нажатии*/}
        <button onClick={() => calcSum(10, 2)}>Sum</button>
        {/*для консоли разработчика*/}
        <button onClick={someName}>Support</button>
        <button onClick={whatAge}>How old are you?</button>
        {/*promt выводит поле для текста*/}
        <button onClick={youBoss}>Are you boss?</button>
        {/*confirm подтверждение true or false*/}

        <ul><a href={"#launching_app"}>Запуск приложения</a></ul>
        <ul><a href={"#git"}>Git</a>
          <li><a href={"#repository"}>Создание нового *репозитория</a></li>
          <li><a href={"#push"}>Push - сохранение изменений </a></li>
        </ul>
        <ul><a href={"#html"}>HTML</a>
          <li></li>
        </ul>
        <ul><a href={"#css"}>CSS</a>
          <li></li>
        </ul>
        <ul><a href={"#bem"}>BEM</a>
          <li></li>
        </ul>
        <ul><a href={"#components"}>UiKit</a>
          <li></li>
        </ul>
        <ul><a href={"#exercises"}>Упражнения</a>
          <li><a href={"#Ex1"}>ex1</a></li>
        </ul>
      </div>
      <div className={"page_wrapper"}>
        <div className={"sections"}>

          <LaunchingApp/>

          <Git/>

          <HTML/>

          <CSS/>

          <BEM/>

          <UiKit/>

          <Ex1/>

          <section className={"monitor"}></section>

        </div>
      </div>
    </div>)
}


export default App
