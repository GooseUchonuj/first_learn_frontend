const callAlert = () => {
  alert("я обязательно выучу")
};

/*простой alert при нажатии*/
const CallAlert = () => {
  return <button className={"js-button"} onClick={callAlert}>Click</button>
}

export default CallAlert;