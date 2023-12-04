import React from 'react'
import Goal from '../Goal/Goal';
import { colors } from "../../colors"

import "./_goalTable.scss"

function GoalTable() {

  return (
		<div className='GoalTable'>
			<Goal color={colors.$red} amount={10} step={1}>
				{'Read 100 books'}
			</Goal>
			<Goal color={colors.$green} amount={44} step={3}>
				{'Read 44 books'}
			</Goal>
			<Goal color={colors.$blue} amount={20} step={5}>
				{'Read 20 books'}
			</Goal>
			<Goal color={colors.$goldenYellow} amount={100} step={10}>
				{'Read 1000 books'}
			</Goal>
		</div>
	)
}

export default GoalTable;