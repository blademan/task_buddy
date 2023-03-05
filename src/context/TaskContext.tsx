import { createContext, FC, useContext, useReducer, useState } from 'react'
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

const defaultTasks: Task[] = [
	{
		id: '1',
		task: 'Do Work-out',
		time: '15:45',
	},
	{
		id: '2',
		task: 'Make some food',
		time: '12:00',
	},
]

export const TaskContextProvider: FC<TaskProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(taskReducer, defaultTasks)

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

	const [isClearAllOpen, setIsClearAllOpen] = useState(false)
	const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
	const [activeTaskId, setActiveTaskId] = useState<string | null>(null)

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
