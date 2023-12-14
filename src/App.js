import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar/NavBar';

import './App.scss';
import GoalTable from './Components/GoalTable/GoalTable';
import Popup from './Components/Popup/Popup';

function App() {
  const [popupActive, setPopupActive] = useState(false);
  const [goals, setGoals] = useState([
    {id: 0, goal: 'Reed 100 books', amount: 100, step: 10, count: 30, color: '#FF4E78' },
    {id: 2, goal: 'Reed 100 books', amount: 24, step: 6, count: 4, color: "#5D5CE6" }
  ]);

  

  return (
		<div className='App'>
			<NavBar addNew={popupActive} setAddNew={setPopupActive} />
			<GoalTable allGoals={goals} />
			<Popup
				active={popupActive}
				setActive={setPopupActive}
				goals={goals}
				setGoals={setGoals}
			/>
		</div>
	)
}

export default App;
