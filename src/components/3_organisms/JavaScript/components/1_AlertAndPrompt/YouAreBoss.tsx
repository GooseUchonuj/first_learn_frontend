const youBoss = () => {
  const Boss = confirm("Ты здесь главный?");
  alert(Boss); // true, если нажата OK
}
/*confirm подтверждение true or false*/

const YouAreBoss = () => {
  return <button className={"js-button"} onClick={youBoss}>Are you boss?</button>
}

export default YouAreBoss;