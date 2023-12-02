import React from 'react'

import "./_goal.scss"

function Goal(props) {
	return (
		<div className='Goal'>
			<div className='top-content'>
				<p className='percents'>50%</p>
				<i className='settings'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							d='M4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13C5.26522 13 5.51957 12.8946 5.70711 12.7071C5.89464 12.5196 6 12.2652 6 12C6 11.7348 5.89464 11.4804 5.70711 11.2929C5.51957 11.1054 5.26522 11 5 11C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12ZM11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12ZM18 12C18 12.2652 18.1054 12.5196 18.2929 12.7071C18.4804 12.8946 18.7348 13 19 13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12Z'
							stroke='#111114'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</i>
			</div>
			<div className='bottom-content'>
				<div className='bottom-left'>
					<p className='description'>Read 100 books</p>
					<p className='progress'>50/100</p>
				</div>
				<button className='button-plus'style={{stroke: props.children}}>
					{/* <i class='uil uil-plus'></i> */}
					<svg 
						xmlns='http://www.w3.org/2000/svg'
						width='28'
						height='28'
						viewBox='0 0 28 28'
						fill='none'
					>
						<path
							d='M14.05 2.33334L14.02 25.6667M2.33334 14H25.6667'
							// stroke="#000"
							stroke-width='4'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</button>
			</div>
			<div className='progress-bar' style={{backgroundColor: props.children}}></div>
		</div>
	)
}

export default Goal;
