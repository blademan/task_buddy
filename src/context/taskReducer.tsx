import { Task } from '../types'

type AddTaskAction = {
	type: 'ADD'
	payload: Task
}

type DeleteTaskAction = {
	type: 'DELETE'
	payload: string
}

type RemoveAllAction = {
	type: 'REMOVE'
}

type TaskAction = AddTaskAction | DeleteTaskAction | RemoveAllAction

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
	switch (action.type) {
		case 'ADD':
			return [...state, action.payload as Task]

		case 'DELETE':
			return state.filter(item => {
				return item.id !== action.payload
			})

		case 'REMOVE':
			return []

		default:
			return state
	}
}
