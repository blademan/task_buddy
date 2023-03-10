import { createContext, FC, useContext, useEffect, useReducer, useState } from 'react'
import { Task } from '../types'
import { taskReducer } from './taskReducer'

interface TaskContextValue {
	state: Task[]
	addTask: (task: Task) => void
	delTask: (id: string) => void
	removeAllTasks: () => void
	setIsClearAllOpen: (status: boolean) => void
	isClearAllOpen: boolean
	setIsDeletePopupOpen: (status: boolean) => void
	isDeletePopupOpen: boolean
	setActiveTaskId: (id: string | null) => void
	activeTaskId: string | null
	editTask: (id: string, task: string) => void
}

export const TaskContext = createContext<TaskContextValue>({
	state: [],
	addTask: () => {},
	delTask: () => {},
	removeAllTasks: () => {},
	setIsClearAllOpen: () => {},
	isClearAllOpen: false,
	setIsDeletePopupOpen: () => {},
	isDeletePopupOpen: false,
	setActiveTaskId: () => {},
	activeTaskId: null,
	editTask: () => {},
})

interface TaskProviderProps {
	children: React.ReactNode
}

export const TaskContextProvider: FC<TaskProviderProps> = ({ children }) => {
	const [isClearAllOpen, setIsClearAllOpen] = useState(false)
	const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
	const [activeTaskId, setActiveTaskId] = useState<string | null>(null)

	const storedTasks = localStorage.getItem('tasklist')
	const initTask = storedTasks ? JSON.parse(storedTasks) : []
	const [state, dispatch] = useReducer(taskReducer, initTask)

	useEffect(() => {
		localStorage.setItem('tasklist', JSON.stringify(state))
	}, [state])

	const addTask = (task: Task) => {
		dispatch({ type: 'ADD', payload: task })
	}
	const delTask = (id: string) => {
		if (activeTaskId === id) {
			setIsDeletePopupOpen(true)
			setActiveTaskId(null)
		}
		dispatch({ type: 'DELETE', payload: id })
	}

	const removeAllTasks = () => {
		dispatch({ type: 'REMOVE' })
	}

	const editTask = (task: string, id: string) => {
		dispatch({ type: 'EDIT', payload: { task: task, id: id } })
	}

	return (
		<TaskContext.Provider
			value={{
				isDeletePopupOpen,
				setIsDeletePopupOpen,
				state,
				addTask,
				delTask,
				removeAllTasks,
				isClearAllOpen,
				setIsClearAllOpen,
				setActiveTaskId,
				activeTaskId,
				editTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	)
}

export const useTaskContext = () => useContext(TaskContext)
