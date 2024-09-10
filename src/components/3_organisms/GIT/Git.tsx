function Git() {
  return (
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
          </section> )}


export default Git
