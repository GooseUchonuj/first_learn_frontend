
const message = () => {
  function showMessage(from, text) { // параметры: from, text
    alert(from + ': ' + text);
  }

  showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
  showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)
}

const MessageFromAnya = () => {
  return <button className={"js-button"} onClick={message}>Сообщение от Ани</button>
}

export default MessageFromAnya;