import React, { useState } from 'react'
import { colors } from '../../colors'

import "./_popup.scss"

const colorNames = Object.keys(colors);

function Popup() {
  const [color, setColor] = useState(colors.$grey);
  
  const goalStyle = { backgroundColor: color };

  

  return (
		<div className={'Popup show'}>
			<div className='PopupBox'>
				<input type='text' placeholder='Goal' />

				<ul>
					<li>
						<label htmlFor='amount'>Amount</label>
						<input type='number' name='amount' min='1' />
					</li>
					<li>
						<label htmlFor='step'>Step</label>
						<input type='number' name='step' min='1' />
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
					<button>Cancel</button>
					<button style={goalStyle}>Add</button>
				</div>
			</div>
		</div>
	)
}

export default Popup;