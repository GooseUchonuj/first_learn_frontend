
import styles from "./exercise1_style.module.css"
function Ex1() {
  return (

    <section className={"monitor"}>
      <h2 id={"exercises"}>Упражнения</h2>
      <h3 id={"Ex1"}>Exercise1</h3>
      <div className={styles.exercise_container}>
        <div className={styles.avito_mainblock}>
          <div className={"avito_title"}><h2 className={styles.avito_title}>Светильник Дракон</h2></div>
          <div className={"avito_gallery"}>

          </div>

          <div className={styles.avito_img}>
            <div className={"frame_control"} id={"left"}>
              <button></button>
            </div>
            <img src="/img/draco1.jpg" width={"100%"}
              alt="Picture background" aria-hidden="true"/>
            <div className={"frame_control"} id={"right"}>
              <button></button>
            </div>

          </div>

          <div className={"avito_price"}><h2 className={styles.avito_price}>2 760 ₽</h2>
            <div className={"like"}></div>
          </div>
          <div className={styles.avito_buttons}>
            <button className={styles.purpure_buttons}>Купить с доставкой</button>
            <button className={styles.purpure_buttons}>В корзину</button>
          </div>
        </div>

        {/* 1. Название свойства transition-property
        2. Продолжительность перехода transition-duration
        3. Функция перехода transition-timing-function
        4. Задержка перехода transition-delay
        5. Краткая запись перехода transition
        6. Плавный переход нескольких свойств
        7. Примеры переходов для различных свойств */}

        <div className={"mts_form"}>
          <div><h1 className={styles.mts_title}>ЛИЧНЫЙ КАБИНЕТ</h1></div>
          <div><p>Максимум возможностей </p>
            <p>для управления счётом </p>
            <p>и услугами мобильной связи</p></div>
          <button> Войти </button>
        </div>
      </div>
    </section>)
}

export default Ex1