import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';

import './App.scss';
import GoalTable from './Components/GoalTable/GoalTable';
import Popup from './Components/Popup/Popup';

const goalsEx = [
	{
		id: 0,
		text: 'First 10',
		amount: 10,
		step: 1,
		color: '$red',
    count: 0
	},
	{
		id: 1,
		text: 'Second 44',
		amount: 44,
		step: 3,
		color: '$green',
    count: 0
	},
	{
		id: 2,
		text: 'Third 20',
		amount: 20,
		step: 5,
		color: '$blue',
    count: 0
	},
	{
		id: 3,
		text: 'Fourth 100',
		amount: 100,
		step: 10,
		color: '$goldenYellow',
    count: 0
	}
]

function App() {
  const [popupActive, setPopupActive] = useState(false);
  const [goals, setGoals] = useState(goalsEx)

  return (
    <div className="App">
      <NavBar addNew={popupActive} setAddNew={setPopupActive}/>
      <GoalTable allGoals={goals}/>
      <Popup active={popupActive} setActive={setPopupActive} setGoals={setGoals}/>
    </div>
  );
}

export default App;
