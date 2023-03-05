import { useState } from 'react'
import { useTaskContext } from '../context/TaskContext'
import { Task } from '../types'

export const TaskItem = ({ task, time, id }: Task) => {
	const { delTask, setIsDeletePopupOpen, setActiveTaskId, activeTaskId, editTask } = useTaskContext()
	const [isConfirming, setIsConfirming] = useState(false)

	const [isEditing, setIsEditing] = useState(false)
	const [editedTask, setEditedTask] = useState(task)

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

	const handleEditClick = () => {
		setIsEditing(true)
		setActiveTaskId(id)
	}

	const handleSaveClick = () => {
		editTask(editedTask, id)
		setIsEditing(false)
	}

	const handleCancelClick = () => {
		setEditedTask(task)
		setIsEditing(false)
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
					{isEditing && activeTaskId === id ? (
						<>
							<input type='text' value={editedTask} onChange={e => setEditedTask(e.target.value)} />
							<button onClick={handleSaveClick}>Save</button>
							<button onClick={handleCancelClick}>Cancel</button>
						</>
					) : (
						<>
							{' '}
							<p>
								<span className='name'>{task}</span>
								<span className='time'>{time}</span>
							</p>
							<i onClick={handleEditClick} className='bi bi-pencil-square'></i>
							<i onClick={handleDeleteClick} className='bi bi-trash' aria-label='Delete task'></i>
						</>
					)}
				</>
			)}
		</li>
	)
}
