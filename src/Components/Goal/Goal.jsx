import React, { useState, useEffect, useRef, useContext} from 'react'
import { Context } from '../../context';
import { ReactComponent as PlusBtn } from '../../assets/icons/plus.svg'
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Undo } from '../../assets/icons/undo.svg';
import { ReactComponent as Reset } from '../../assets/icons/reset.svg'
import {ReactComponent as Delete} from '../../assets/icons/delete.svg';

import "./_goal.scss"

function Goal({ id, goal, amount, color, count }) {
	const [active, setActive] = useState(false);
	const { incrementCount, undoCount, resetCount, removeGoal } = useContext(Context);

	const showMenu = () => setActive(prev => !prev)
  let menuRef = useRef();

  useEffect(()=> {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setActive(false)
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });

	let percents = Math.floor((count / amount) * 100);

	return (
		<div className='Goal'>
			<div className='content'>
				<div className='top-content'>
					<p className='percents'>{percents}%</p>
					<div className={active ? 'settings active' : 'settings'} ref={menuRef}>
						<i className='settings-btn' onClick={showMenu}>
							<Settings />
						</i>

						<ul className='settings-menu'>
							<li onClick={() => undoCount(id)}>
								<Undo />
								Undo
							</li>
							<li onClick={() => resetCount(id)} >
								<Reset />
								Reset
							</li>
							<li onClick={() => removeGoal(id)}> 
								<Delete />
								Delete
							</li>
						</ul>
					</div>
				</div>
				<div className='bottom-content'>
					<div className='bottom-left'>
						<p className='description'>{goal}</p>
						<p className='progress'>
							{count} / {amount}
						</p>
					</div>
					<button
						className='button-plus'
						onClick={() => incrementCount(id)}
						style={{ stroke: color }}
					>
						<PlusBtn />
					</button>
				</div>
			</div>
			<div
				className='progress-fill'
				style={{ backgroundColor: color, height: `${percents}%` }}
			></div>
		</div>
	)
}

export default Goal;
