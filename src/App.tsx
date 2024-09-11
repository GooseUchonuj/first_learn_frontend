import Git from "./components/3_organisms/GIT/Git.tsx"
import LaunchingApp from "./components/3_organisms/LaunchingApp/LaunchingApp.tsx"
import HTML from "./components/3_organisms/HTML/HTML.tsx"
import CSS from "./components/3_organisms/CSS/CSS.tsx"
import BEM from "./components/3_organisms/BEM/BEM.tsx"
import UiKit from "./components/3_organisms/UiKit/UiKit.tsx"
import Ex1 from "./components/3_organisms/Exercises/Ex1.tsx"

function App() {
  return (
    <div className={"main-container"}>
      <div className={"menu"}>

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
      </div>
      <div className={"page_wrapper"}>
        <div className={"sections"}>

          <LaunchingApp />

          <Git />

          <HTML />

          <CSS />

          <BEM />

          <UiKit />

          <Ex1 />

          <section className={"monitor"}></section>

        </div>
      </div>
    </div>)
}


export default App
