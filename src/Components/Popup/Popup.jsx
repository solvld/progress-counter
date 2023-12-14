import React, { useState } from 'react'
import { colors } from '../../colors'

import "./_popup.scss"

const colorNames = Object.keys(colors);

function Popup({active, setActive, goals, setGoals}) {
  const [color, setColor] = useState(colors.$grey);
  const [goal, setGoal] = useState(null);
  const [amount, setAmount] = useState(null);
  const [step, setStep] = useState(null);

  
  const goalStyle = { backgroundColor: color };
  const clickHandler = () => {
    setActive(false);
    setColor(colors.$grey);
    setGoal('');
    setAmount('');
    setStep('');
  }
  const submitForm = (e) => {
    e.preventDefault();

    const formData = {
			id: Date.now(),
			goal,
			amount: Number(amount),
			step: Number(step),
			count: 0,
			color,
		};

    setGoals([formData, ...goals]);
    clickHandler();
  }

  return (
		<div className={active ? 'Popup active' : 'Popup'}>
			<form onSubmit={submitForm} className='PopupBox'>
				<input onChange={(e) => {setGoal(e.target.value)}} value={goal} type='text' name='goal' placeholder='Goal' autoComplete="off" />

				<ul>
					<li>
						<label htmlFor='amount'>Amount</label>
						<input onChange={(e) => {setAmount(e.target.value)}} value={amount} type='number' name='amount' min='1' placeholder='0' />
					</li>
					<li>
						<label htmlFor='step'>Step</label>
						<input onChange={(e) => {setStep(e.target.value)}} value={step} type='number' name='step' min='1' placeholder='0' />
					</li>
				</ul>

				<div className='PickerTable'>
					{colorNames.map((colorName, index) => (
						<button
              type='button'
							className='Picker'
							onClick={() => setColor(colors[colorName])}
							key={colorName}
							style={{ backgroundColor: colors[colorName] }}
						>
							{colors.colorName}
						</button>
					))}
				</div>

				<div className='bottom'>
					<button type="button" onClick={clickHandler}>Cancel</button>
					<button type="submit"
          onClick={submitForm} style={goalStyle}>Add</button>
				</div>
			</form>
		</div>
	)
}

export default Popup;