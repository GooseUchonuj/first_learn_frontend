
import styles from "./exercise1_style.module.css"
function Ex1() {
  return (

    <section className={"monitor"}>
      <h2 id={"Ex1"}>Exercise1</h2>
      <h3></h3>
      <div className={styles.avito_mainblock}>
        <div className={"avito_title"}><h2>Светильник Дракон</h2></div>
        <div className={"avito_img"}></div>
        <div className={"avito_price"}><h2>2 760 ₽</h2><div className={"like"}></div></div>
        <div className={"avito_buttons"}>
          <div className={"purpure_buttons"}>Купить с доставкой</div>
          <div className={"purpure_buttons"}>В корзину</div>
        </div>

      </div>

    </section>)
}

export default Ex1