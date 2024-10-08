function CSS() {
  return (

<section className={"monitor"}>
  <h2 id={"css"}>CSS</h2>
  <h3>Cелекторы</h3>
  <div className={"monitor"}>
    <h3>Единица измерения css</h3>
    <ul className={"point"}>
      <li><b>Пиксель px</b>- самая базовая, абсолютная и окончательная единица измерения.
        <p>Количество пикселей задаётся в настройках разрешения экрана</p>
        <p>один px – это как раз один такой пиксель на
          экране</p>
        <p>могут быть дробными</p>
        <ul>
          <p><b>Рудименты</b></p>
          <p>1mm (мм) = 3.8px</p>
          <p>1cm (см) = 38px</p>
          <p>1pt (типографский пункт) = 4/3 px</p>
          <p>1pc (типографская пика) = 16px</p>
          <p>Так как браузер пересчитывает эти значения в пиксели, то смысла в их употреблении нет.</p>
        </ul>
      </li>
      <li><b>Em</b> – текущий размер шрифта.

        <p>Можно брать любые пропорции от текущего шрифта: 2em, 0.5em и т.п.</p>
        <p>Размеры в em – <b> относительные </b>, они определяются по текущему контексту.</p>
        <p>Например, первый вариант - в px</p>

        <li className={"example_pix"}>
          <p>Страусы</p>
          <li className={"example_pix"}>Живут также в Африке</li>
        </li>

        <p>Второй div - в em</p>

        <li className={"example_em"}>
          <p>Страусы</p>
          <li className={"example_em"}>Живут также в Африке</li>
        </li>

      </li>

      <li>
        <p><b>Проценты % </b>, как и em – относительные единицы.</p>
        <p>возникает вопрос – «Процент от чего?»</p>
        <p> Обычно от родительского элемента </p>
        <p>(в котором как в коробке лежит текст, див, картинка, у которой меняем размер)</p>
      </li>

      <li><p><b>Единица rem</b>: смесь px и em</p>
        <p>работает как em, только с обратным эффектом, если поставить значение меньше 1</p>

        <ul>
          <li className={"about_rem"}>Собака
            <ul>
              <li className={"about_rem"}>бывает
                <ul>
                  <li className={"about_rem"}>кусачей
                    <ul>
                      <li className={"about_rem"}>только
                        <ul>
                          <li className={"about_rem"}>от жизни
                            <ul>
                              <li className={"about_rem"}>собачей</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

      </li>
      <li>Относительно экрана: <b>vw, vh, vmin, vmax</b></li>
      <ul>
        <li>vw – 1% ширины окна</li>
        <li>vh – 1% высоты окна</li>
        <li>vmin – наименьшее из (vw, vh), в IE9 обозначается vm</li>
        <li>vmax – наибольшее из (vw, vh)</li>
      </ul>
    </ul>
  </div>
</section>)}

export default CSS