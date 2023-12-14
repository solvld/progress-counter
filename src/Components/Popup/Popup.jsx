import React, { useState } from 'react'
import { colors } from '../../colors'

import "./_popup.scss"

const colorNames = Object.keys(colors);

function Popup({active, setActive}) {
  const [color, setColor] = useState(colors.$grey);
  
  const goalStyle = { backgroundColor: color };

  const clickHandler = () => setActive(false)

  return (
		<div className={active ? 'Popup active' : 'Popup'}>
			<div className='PopupBox'>
				<input type='text' placeholder='Goal' />

				<ul>
					<li>
						<label htmlFor='amount'>Amount</label>
						<input type='number' name='amount' min='1' placeholder='0' />
					</li>
					<li>
						<label htmlFor='step'>Step</label>
						<input type='number' name='step' min='1' placeholder='0' />
					</li>
				</ul>

				<div className='PickerTable'>
					{colorNames.map((colorName, index) => (
						<button
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
					<button onClick={clickHandler}>Cancel</button>
					<button type="submit"
          onClick={clickHandler} style={goalStyle}>Add</button>
				</div>
			</div>
		</div>
	)
}

export default Popup;