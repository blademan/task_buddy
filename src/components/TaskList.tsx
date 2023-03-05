import { useState } from 'react'
import { useTaskContext } from '../context/TaskContext'
import { TaskItem } from './TaskItem'

export const TaskList = () => {
	const { state, removeAllTasks, isClearAllOpen, setIsClearAllOpen } = useTaskContext()

	// const [isConfirming, setIsConfirming] = useState(false)

	const handleConfirmClick = () => {
		setIsClearAllOpen(true)
	}

	const handleConfirmAccept = () => {
		removeAllTasks()
		setIsClearAllOpen(false)
	}

	const handleConfirmCancel = () => {
		setIsClearAllOpen(false)
	}

	const taskCount = state.length

	return (
		<section className='showTask'>
			<p className='head'>
				<span>
					<span className='title'></span>
					<span className='count'>{taskCount}</span>
				</span>
				{isClearAllOpen && taskCount ? (
					<>
						<span onClick={handleConfirmAccept} className='clearAll' aria-label='Yes, delete all tasks'>
							Sure
						</span>
						<span onClick={handleConfirmCancel} className='clearAll' aria-label='No, cancel deletion'>
							Nop
						</span>
					</>
				) : (
					<span onClick={handleConfirmClick} className='clearAll' aria-label='Clear all tasks' title='Delete all tasks'>
						Clear All
					</span>
				)}
			</p>
			{taskCount > 0 ? (
				<ul>
					{state.map(task => (
						<TaskItem key={task.id} {...task} />
					))}
				</ul>
			) : (
				<p>No tasks found.</p>
			)}
		</section>
	)
}
