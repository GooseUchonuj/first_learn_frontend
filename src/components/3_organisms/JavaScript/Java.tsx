import {
} from "./helpers"

import CallAlert from '../JavaScript/components/1_AlertAndPrompt/CallAlert.tsx'
import SumInConsole from "../JavaScript/components/1_AlertAndPrompt/SumInConsole.tsx";
import SupportWithName from "../JavaScript/components/1_AlertAndPrompt/SupportWithName.tsx";
import WhatYourAge from "../JavaScript/components/1_AlertAndPrompt/WhatYourAge.tsx";
import YouAreBoss from "../JavaScript/components/1_AlertAndPrompt/YouAreBoss.tsx";
import WhenHisBirthday from "../JavaScript/components/1_AlertAndPrompt/WhenHisBirthday.tsx";
import RestartLessons from "../JavaScript/components/1_AlertAndPrompt/RestartLessons.tsx";
import WhoThere from "../JavaScript/components/1_AlertAndPrompt/WhoThere.tsx";
import Test from "../JavaScript/components/1_AlertAndPrompt/Test.tsx";
import EvenNumbers from "../JavaScript/components/1_AlertAndPrompt/EvenNumbers.tsx";
import OddNumbers from "../JavaScript/components/1_AlertAndPrompt/OddNumbers.tsx";
import NumberName from "../JavaScript/components/1_AlertAndPrompt/NumberName.tsx";
import MoreOnehunger from "../JavaScript/components/1_AlertAndPrompt/MoreOnehunger.tsx";
import Amount from "../JavaScript/components/1_AlertAndPrompt/Amount.tsx";
import SwitchOnIf from "../JavaScript/components/1_AlertAndPrompt/SwitchOnIf.tsx";
import IfOnSwitch from "../JavaScript/components/1_AlertAndPrompt/IfOnSwitch.tsx";
import OnlyForAdults from "../JavaScript/components/1_AlertAndPrompt/OnlyForAdults.tsx";
import MessageFromAnya from "../JavaScript/components/1_AlertAndPrompt/MessageFromAnya.tsx";
import RaisingPower from "../JavaScript/components/1_AlertAndPrompt/RaisingPower.tsx";
import AmountByN from "../JavaScript/components/1_AlertAndPrompt/AmountByN.tsx";
import AmountByN_For from "../JavaScript/components/1_AlertAndPrompt/AmountByN_For.tsx";
import FactorialNumber_While from "../JavaScript/components/1_AlertAndPrompt/FactorialNumber_While.tsx";
import FactorialNumber_For from "../JavaScript/components/1_AlertAndPrompt/FactorialNumber_For.tsx";
import Timetable from "../JavaScript/components/1_AlertAndPrompt/Timetable.tsx";
import GuessGame from "../JavaScript/components/1_AlertAndPrompt/GuessGame.tsx";
import Randomizer from "../JavaScript/components/1_AlertAndPrompt/Randomize.tsx";
import Randomizer_Improve from "../JavaScript/components/1_AlertAndPrompt/Randomizer_Improve.tsx";
import MinusNumber from "./components/1_AlertAndPrompt/MinusNumber.tsx";
import ActionForEx2 from "./components/2_Elements_StyleChange/ActionForEx2.tsx";

// import GuesThisNumber from "./components/2_Elements_StyleChange/GuesThisNumber.tsx";

function Java() {

  return (
    <section className={"monitor"}>

      <h2 id={"java"}>Java script</h2>
      <h3 id={"AlertPrompt"}>Exercise 1/ alert & prompt</h3>
      <div className={"group_of_js-button"}>
        <div className={"column_of_js-button"}>
          <CallAlert/>
          <SumInConsole/>
          <SupportWithName/>
          <WhatYourAge/>
          <YouAreBoss/>

        </div>
        <div className={"column_of_js-button"}>
          <WhenHisBirthday/>
          <RestartLessons/>
          <WhoThere/>
          <Test/>
        </div>
        <div className={"column_of_js-button"}>
          <EvenNumbers/>
          <OddNumbers/>
          <NumberName/>
          <MoreOnehunger/>
          <Amount/>
          <SwitchOnIf/>
          <IfOnSwitch/>
        </div>
        <div className={"column_of_js-button"}>
          <OnlyForAdults/>
          <MessageFromAnya/>
          <RaisingPower/>
          <AmountByN/>
          <AmountByN_For/>
          <FactorialNumber_While/>
          <FactorialNumber_For/>
        </div>
        <div className={"column_of_js-button"}>
          <Timetable/>
          <GuessGame/>
          <Randomizer/>
          <Randomizer_Improve/>
          <MinusNumber/>
        </div>
      </div>
      <h3 id={"Elements_Style"}>Exercise 2/ elements & style_change</h3>
      <ActionForEx2/>
      <ul>
        <li>Компоненты</li>
        <li>React</li>
      </ul>

    </section>
  )
}

export default Java