import { useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTaskContext } from '../context/TaskContext'

export const Form = () => {
	const { addTask, setIsClearAllOpen, setIsDeletePopupOpen, isDeletePopupOpen, setActiveTaskId } = useTaskContext()
	const inputRef = useRef<HTMLInputElement>(null)

	const date = new Date()
	const day = date.getDate().toString().padStart(2, '0')
	const month = (date.getMonth() + 1).toString().padStart(2, '0')
	const year = date.getFullYear().toString()
	const formattedDate = `${day}.${month}.${year}`

	const inputHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (inputRef.current) {
			addTask({
				id: uuidv4(),
				task: inputRef.current.value,
				time: formattedDate,
			})
		}
		inputRef.current!.value = ''
	}

	const onFocusHandler = () => {
		setIsDeletePopupOpen(false)
		setIsClearAllOpen(false)
		setActiveTaskId(null)
	}
	useEffect(() => {
		setIsDeletePopupOpen(false)
	}, [inputRef])

	return (
		<section className='addTask'>
			<form onSubmit={inputHandler}>
				<input
					onFocus={onFocusHandler}
					ref={inputRef}
					type='text'
					name='task'
					autoComplete='off'
					placeholder='add task'
					maxLength={25}
				/>
				<button type='submit'>Add</button>
			</form>
		</section>
	)
}
