import React from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = () => {
	return (
		<section className='showTask'>
			<p className='head'>
				<span>
					<span className='title'>Todo</span>
					<span className='count'>17</span>
				</span>
				<span className='clearAll'>Clear All</span>
			</p>
			<ul>
				<TaskItem />
			</ul>
		</section>
	)
}
