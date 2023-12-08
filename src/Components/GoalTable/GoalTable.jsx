import React from 'react'
import Goal from '../Goal/Goal';
import { colors } from "../../colors"

import "./_goalTable.scss"

function GoalTable({ allGoals }) {

  return (
		<div className='GoalTable'>
			{allGoals.map(({id, text, amount, step, color, count}) => (
				<Goal
					text={text}
					color={colors[color]}
					amount={amount}
					step={step}
          key={id}
          count={count}
				/>
			))}
		</div>
	)
}

export default GoalTable;