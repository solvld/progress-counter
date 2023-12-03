import React, { useState } from 'react'
import { colors } from '../../colors'

import "./_popup.scss"

const colorNames = Object.keys(colors);

function Popup() {
  const [color, setColor] = useState(colors.$red);
  
  const divStyle = { backgroundColor: color };

  return (
		<div className='Popup'>
			<div className='test'
        style={divStyle}></div>
			{colorNames.map((colorName, index) => (
				<button
          className='picker'
					onClick={() => setColor(colors[colorName])}
					key={colorName}
          style={{backgroundColor: colors[colorName] }}
				>{colors.colorName}</button>
			))}
		</div>
	)
}

export default Popup;