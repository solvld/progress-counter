import React, { useState } from 'react'
import { colors } from '../../colors'

import "./_popup.scss"

const colorNames = Object.keys(colors);
const capitalizeFirstChar = str => {
  if (str != ''){
    str = str.split('')
		str[0] = str[0].toUpperCase()
		return str.join('')
  }
}

function Popup({active, setActive, goals, setGoals}) {
  const [color, setColor] = useState(colors.$grey);
  const [goal, setGoal] = useState('');
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState(1);
  const [cleanNumber, setCleanNumber] = useState(false);

  const numberCheck = number => Number(number)>0? setCleanNumber(true) : setCleanNumber(false)
  const goalStyle = { backgroundColor: color };
  const clickHandler = () => {
    setActive(false);
    setColor(colors.$grey);
    setGoal('');
    setAmount('');
    setStep(1);
    setCleanNumber(false)
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
				<input
					onChange={e => {
						setGoal(e.target.value)
					}}
					value={goal && capitalizeFirstChar(goal)}
					type='text'
					className='capitalized'
					name='goal'
					placeholder='Goal'
					autoComplete='off'
				/>

				<ul>
					<li>
						<label htmlFor='amount' style={!cleanNumber? {color : colors.$red}: {color: '#B9B9B9'}}>
							Amount
						</label>
						<input
							onChange={e => {
								setAmount(e.target.value)
								numberCheck(e.target.value)
							}}
							value={amount}
							type='number'
							name='amount'
							min='1'
							placeholder='0'
						/>
					</li>
					<li>
						<label htmlFor='step'>
							Step
						</label>
						<input
							onChange={e => {
								setStep(e.target.value)
								numberCheck(e.target.value)
							}}
							value={step}
							type='number'
							name='step'
							min='1'
							placeholder='0'
						/>
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
					<button type='button' onClick={clickHandler}>
						Cancel
					</button>
					<button
						type='submit'
						onClick={submitForm}
						disabled={!cleanNumber}
						style={goalStyle}
					>
						Add
					</button>
				</div>
			</form>
		</div>
	)
}

export default Popup;