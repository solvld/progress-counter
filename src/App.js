import React, { useEffect, useState } from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import GoalTable from './Components/GoalTable/GoalTable';
import Popup from './Components/Popup/Popup';
import {Context} from './context';
import Confetti from 'react-confetti';

function App() {
  const [popupActive, setPopupActive] = useState(false);
  const [goals, setGoals] = useState([]);
  const [isShowConfetti, setIsShowConfetti] = useState(true);

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

  useEffect(() => {
    isShowConfetti && setTimeout(() => {
      setIsShowConfetti(false)
    }, 7000);
  },[isShowConfetti])

  const removeGoal = id => {
    setGoals(goals.filter(goal => goal.id !== id)) 
  };

  const incrementCount = id => {
    setGoals(goals.map(goal =>{
      if (goal.id === id){
        goal.count = goal.count + goal.step
      }
      return goal
    }))
  }

  const undoCount = id => {
		setGoals(
			goals.map(goal => {
				if (goal.id === id && goal.count !== 0) {
					goal.count = goal.count - goal.step
				}
				return goal
			})
		)
	}

  const resetCount = id => {
		setGoals(
			goals.map(goal => {
				if (goal.id === id) {
					goal.count = 0
				}
				return goal
			})
		)
	}

  return (
		<Context.Provider value={{
      removeGoal, incrementCount, undoCount, resetCount
    }}>
			<div className='App'>
				{isShowConfetti && (
					<Confetti recycle={false} numberOfPieces={400} friction={1} />
				)}
				<NavBar addNew={popupActive} setAddNew={setPopupActive} />
				<GoalTable allGoals={goals} />
				<Popup
					active={popupActive}
					setActive={setPopupActive}
					goals={goals}
					setGoals={setGoals}
				/>
			</div>
		</Context.Provider>
	)
}

export default App;
