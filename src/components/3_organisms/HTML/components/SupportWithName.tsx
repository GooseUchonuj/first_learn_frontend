const someName = () => {
  const myName = "Ты";
  alert(`${myName} молодец! Старайся дальше`);
}

/* высвечивает слова поддержки с выбранным именем или словом */

const SupportWithName = () => {
  return <button className={"js-button"} onClick={someName}>Support with name</button>
}

export default SupportWithName;