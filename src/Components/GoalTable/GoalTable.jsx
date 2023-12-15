import React from 'react'
import Goal from '../Goal/Goal';

import "./_goalTable.scss"

function GoalTable({ allGoals }) {

  return (
		<div className='GoalTable'>
			{allGoals.map(({id, goal, amount, step, color, count}) => (
				<Goal
          key={id}
					goal={goal}
					amount={amount}
					step={step}
          count={count}
					color={color}
          id={id}
				/>
			))}
		</div>
	)
}

export default GoalTable;