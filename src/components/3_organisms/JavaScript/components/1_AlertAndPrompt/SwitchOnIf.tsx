
// switch (browser)  {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
//
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
//
//   default:
//     alert( 'We hope that this page looks ok!' );
// }


const switching = () => {
  const browser = prompt("What is your browser?");

  if (browser === 'Edge') {
    alert("You've got the Edge!");
  }

  if (browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera') {
    alert('Okay we support these browsers too');
  } else {
    alert('We hope that this page looks ok!');
  }

  if (browser === null) {
    alert('Oops');
  }
}

const SwitchOnIf = () => {
  return <button className={"js-button"} onClick={switching}>Переделка в if</button>
}
export default SwitchOnIf;