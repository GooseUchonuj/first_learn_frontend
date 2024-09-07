function App() {
  return (
    <div className={"page_wrapper"}>
      <section className={"monitor"}>
        <h2>Запуск приложения</h2>
        <ul>
          <li><b>npm run dev</b> - то, как запустить результат в браузере</li>
        </ul>
      </section>

      <section className={"monitor"}>
        <h2>Единица измерения css</h2>
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
            <p>vw – 1% ширины окна</p>
            <p>vh – 1% высоты окна</p>
            <p>vmin – наименьшее из (vw, vh), в IE9 обозначается vm</p>
            <p>vmax – наибольшее из (vw, vh)</p>
          </ul>
        </ul>
      </section>

      <section className={"monitor"}>
        <h2>Git</h2>
        <h3>Создание нового *репозитория</h3>
        <p>*кодовая база (хранилище) для проекта в облаке.</p>
        <p>Там хранятся все файлы и инфа, которую поместил на страницу.</p>
        <div>
          <h4>new repository on the command line</h4>
          <li>git init  -  пишем в командную строку, чтобы создалось и настроилось место, куда скидываем "вещи"
            <p>((подготавливаем избушку на курьих ножках для хранения вещей))</p></li>
          <li>git add . - добавить все изменённые файлы (как в сдаче исправленного-переисправленного диплома)
            <p>((курьер, принести исправленный электрощиток в избушку на курьих ножках ))</p></li>
          <li>git commit -m "first commit" - что за изменения произошли, комментарии для следующих разработчиков
            <p>((подписываем коробки с вещами Яги))</p></li>
          <li>git branch -M main - <b>(main=master)</b>- главная ветка</li>
          <li>git remote add origin https://github.com/ - где хранятся данные, куда вести вещи для проекта ((вези курьер коробки по адресу РФ, Мухосранский лес, Болото Петра, д 0))</li>
          <li>git push -u origin main ((привези коробки Яге, перечисли, что привезли))</li>
        </div>
        <h3>push-ы - сохранение изменений</h3>
      </section>

      <section className={"monitor"}>
        <h2>html атрибуты</h2>
      </section>

      <section className={"monitor"}>
        <h2>css селекторы</h2>
      </section>

      <section className={"monitor"}></section>

      <section className={"monitor"}></section>

      <section className={"monitor"}></section>

      <section className={"monitor"}></section>

      <section className={"monitor"}></section>

      <section className={"monitor"}></section>
    </div>
  )
}

export default App
