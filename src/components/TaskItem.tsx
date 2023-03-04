import React from 'react'

export const TaskItem = () => {
	return (
		<li>
			<p>
				<span className='name'>Task Name</span>
				<span className='time'>Task Time 12:34</span>
			</p>
			<i className='bi bi-pencil-square'></i>
			<i className='bi bi-trash'></i>
		</li>
	)
}
