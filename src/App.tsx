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
        <ul> <a href={"#css"}>CSS</a>
          <li></li>
        </ul>
        <ul></ul>
        <ul></ul>
        <ul></ul>
        <ul></ul>
        <ul></ul>
      </div>
      <div className={"page_wrapper"}>
        <div className={"sections"}>
          <section className={"monitor"}>
            <h2 id={"launching_app"}>Запуск приложения</h2>
            <ul>
              <li><b>npm run dev</b> - то, как запустить результат в браузере</li>
            </ul>
          </section>

          <section className={"monitor"}>
            <h2 id={"git"}>Git</h2>
            <h3 id={"repository"}>Создание нового *репозитория</h3>
            <p>*кодовая база (хранилище) для проекта в облаке.</p>
            <p>Там хранятся все файлы и инфа, которую поместил на страницу.</p>
            <ul>
              <h4>new repository on the command line</h4>
              <li>git init - пишем в командную строку, чтобы создалось и настроилось место, куда скидываем "вещи"
                <p>((подготавливаем избушку на курьих ножках для хранения вещей))</p></li>
              <li>git add . - добавить все изменённые файлы (как в сдаче исправленного-переисправленного диплома)
                <p>((курьер, принести исправленный электрощиток в избушку на курьих ножках ))</p></li>
              <li>git commit -m "first commit" - что за изменения произошли, комментарии для следующих разработчиков
                <p>((подписываем коробки с вещами Яги))</p></li>
              <li>git remote add origin git@github.com:GooseUchonuj/first_learn_frontend.git - где хранятся данные, куда
                вести вещи для проекта ((вези курьер коробки по адресу РФ, Мухосранский лес, Болото Петра, д 0))
              </li>
              <li>git push -u origin master ((привези коробки Яге, перечисли, что привезли))</li>
            </ul>
            <h3 id={"push"}>Push - сохранение изменений</h3>
            <ul>
              <h4>push changes</h4>
              <li>git add . - добавить все изменённые файлы (как в сдаче исправленного-переисправленного диплома)
                <p>((курьер, принести исправленный электрощиток в избушку на курьих ножках ))</p></li>
              <li>git commit -m "upd..." - что за изменения произошли, комментарии для следующих разработчиков
                <p>((подписываем коробки с вещами Яги))</p></li>
              <li>git push ((привези коробки Яге, перечисли, что привезли))</li>
              <li>а всё вместе - <b>запушить проект</b> (вбивается по очереди)</li>
            </ul>
          </section>

          <section className={"monitor"}>
            <h2 id={"html"}>html</h2>
            <h3>Теги</h3>
            <ul>
              <li>div</li>
              <li>a</li>
              <li>p</li>
              <li>span</li>
              <li>img</li>
              <li>br</li>
              <li>section</li>
              <li>nav</li>
              <li>main</li>
              <li>footer</li>
            </ul>
            <h3>Атрибуты</h3>
            <h3>Java script</h3>
            <ul>
              <li>Компоненты</li>
              <li>React</li>
            </ul>
          </section>

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
          </section>

          <section className={"monitor"}></section>

          <section className={"monitor"}></section>

          <section className={"monitor"}></section>

          <section className={"monitor"}></section>

          <section className={"monitor"}></section>

          <section className={"monitor"}></section>
        </div>
      </div>
    </div>)
}


export default App
