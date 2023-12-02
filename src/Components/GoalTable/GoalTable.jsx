import React from 'react'
import Goal from '../Goal/Goal';
import { colors } from "../../colors"

import "./_goalTable.scss"

function GoalTable() {

  return (
		<div className='GoalTable'>
			<Goal>{colors.$red}</Goal>
			<Goal>{colors.$green}</Goal>
			<Goal>{colors.$slateBlue}</Goal>
			<Goal>{colors.$goldenYellow}</Goal>
		</div>
	)
}

export default GoalTable;