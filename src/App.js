import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar/NavBar';

import './App.scss';
import GoalTable from './Components/GoalTable/GoalTable';
import Popup from './Components/Popup/Popup';

function App() {
  const [popupActive, setPopupActive] = useState(false);
  const [goals, setGoals] = useState([]);

  const sample = [
    {id: 0, goal: 'Reed 10 books', amount: 10, step: 1, count: 4, color: '#0A84FF' },
    {id: 1, goal: '100 Push-ups', amount: 100, step: 20, count: 20, color: '#FE9F07' }
  ]

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem('goals')) || sample
		setGoals(raw);
  },[]);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals))
  },[goals]);

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
