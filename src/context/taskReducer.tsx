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

type EditAction = {
	type: 'EDIT'
	payload: { id: string; task: string }
}

type TaskAction = AddTaskAction | DeleteTaskAction | RemoveAllAction | EditAction

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
	switch (action.type) {
		case 'ADD':
			return [...state, action.payload]

		case 'DELETE':
			return state.filter(item => {
				return item.id !== action.payload
			})

		case 'EDIT':
			return state.map(e => {
				if (e.id === action.payload.id) {
					console.log(1)

					return { ...e, task: action.payload.task }
				} else {
					return e
				}
			})

		case 'REMOVE':
			return []

		default:
			return state
	}
}
