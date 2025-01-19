
import styles from "./exercise1_style.module.css"
import { useState } from "react";



function Ex1() {
  const [name, setName] = useState('Nilson')
  let firstName = "Hasan";

  const onChangeFirst = () => {
    firstName = "Vasa"
  }

  const onChangeLastName = () => {
    setName(Math.random().toString(36).slice(2))
  }

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
          <div className={"helper"}>
            <div className={"mts_forText"}>
              <div className={"mts_title"}><h1>ЛИЧНЫЙ КАБИНЕТ</h1></div>
              <div className={"mts_text"}>
                Максимум возможностей
                для управления счётом
                и услугами мобильной связи
              </div>
            </div>
            <button className={"mts_button"}> Войти</button>
          </div>
          <div><img className={"mts_icon"} src={"/img/mts-01.svg"}/></div>
        </div>
      </div>
      <div className={styles.exercise_container2}>
        <div className={"article_academy"}>
          <img className={"icon_academy"} src={"/img/khan_academy-icon.png"}/>
          <div className={"with_prescription"}><h1 className={"h1_academy"}>Khan Academy</h1>
            <p className={"small_text"}>Education company</p></div>
          <p className={"medium_text"}>Learn for free about math, art, computer programming, economics, physics,
            chemistry, biology, medicine, <br></br>finance, history, and more.</p>
        </div>
        <div className={"about_founder"}>
          <img className={"big_photo"} src={"/img/big_photo.png"}/>
          <div className={"founder_text"}>
            <div className={"with_prescription"}><h1 className={"h1_academy"}>Salman Khan</h1>
              <p className={"small_text"}>Founder and CEO of Khan Academy</p></div>
            <p className={"medium_text"}>Salman Amin Khan (born 11 October 1976), known as Sal Khan, is a
              Bangladeshi-American educator and the founder of Khan Academy</p>
            <button className={"founder_button"}> Learn more</button>
          </div>
        </div>

        <div className={"teacher"}>
          <img className={"profile_photo"} src={"/img/Nadid.jpeg"}/>
          <div className={"with_prescription"}>
            <h1 className={"h1_academy"}>{firstName} {name}</h1>
            <p className={"teacher_prescription"}>UX/UI Designer</p>
          </div>
          <img src={"/img/rating.png"}/>
          <p className={"medium_text align-center"}>UI is the saddle, the stirrups, & the reins. UX is the feeling you
            get being able to ride the horse.</p>
          <button onClick={onChangeFirst} className={"founder_button width-teacherButton"}>Change First Name</button>
          <button onClick={onChangeLastName} className={"founder_button width-teacherButton"}>Change Last Name</button>
          <div className={"posts"}>
            <div className={"data_counter"}>
              <h1 className={"data_counter-text for_number"}>5896</h1>
              <p className={"data_counter-text for_name"}>Post</p>
            </div>
            <div className={"data_counter"}>
              <h1 className={"data_counter-text for_number"}>8952</h1>
              <p className={"data_counter-text for_name"}>Followers</p>
            </div>
            <div className={"data_counter"}>
              <h1 className={"data_counter-text for_number"}>6545</h1>
              <p className={"data_counter-text for_name"}>Likes</p>
            </div>
          </div>
        </div>

        <div className={"teacher_rating"}>
          <img className={"profile_photo"} src={"/img/Nadid.jpeg"}/>
          <div className={"text_rating"}>
            <div className={"with_prescription"}>
              <h1 className={"h1_academy"}>Nadid Hasan</h1>
              <p className={"teacher_prescription prescription_in_right"}>UX/UI Designer</p>
              <div className={"rait_number"}>4.5</div>
              <p className={"medium_text"}> UI is the saddle, the stirrups, & the reins. UX is the feeling you get being
                able to ride the horse.</p>
            </div>
          </div>
        </div>
        <div className={"citation"}>
          <p className={"medium_text mediun_text-weight"}>UI is the saddle, the stirrups, & the reins. UX is the feeling you
            get being able to ride the horse.</p>
          <div className={"teacher_botton_citation"}>
            <img className={"profile_photo photo100x100"} src={"/img/Nadid.jpeg"}/>
            <div className={"with_prescription"}>
              <h1 className={"h1_academy"}>Nadid Hasan</h1>
              <p className={"teacher_prescription prescription_in_right"}>UX/UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ex1