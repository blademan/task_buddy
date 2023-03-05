import { useState } from 'react'
import { useTaskContext } from '../context/TaskContext'
import { Task } from '../types'

export const TaskItem = ({ task, time, id }: Task) => {
	const { delTask, setIsDeletePopupOpen, setActiveTaskId, activeTaskId } = useTaskContext()
	const [isConfirming, setIsConfirming] = useState(false)

	const handleDeleteClick = () => {
		setIsConfirming(true)
		setIsDeletePopupOpen(true)
		setActiveTaskId(id)
	}

	const handleConfirmDelete = () => {
		delTask(id)
		setIsConfirming(false)
	}

	const handleCancelDelete = () => {
		setIsConfirming(false)
	}

	return (
		<li>
			{isConfirming && activeTaskId === id ? (
				<div className='confirm-dialog'>
					<p>Are you sure you want to delete this task?</p>
					<button onClick={handleConfirmDelete} aria-label='Delete task'>
						Delete
					</button>
					<button onClick={handleCancelDelete}>Cancel</button>
				</div>
			) : (
				<>
					<p>
						<span className='name'>{task}</span>
						<span className='time'>{time}</span>
					</p>
					<i className='bi bi-pencil-square'></i>
					<i onClick={handleDeleteClick} className='bi bi-trash' aria-label='Delete task'></i>
				</>
			)}
		</li>
	)
}
