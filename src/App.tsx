import { useEffect, useState } from 'react'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { useTaskContext } from './context/TaskContext'

function App() {
	const [theme, setTheme] = useState('')

	return (
		<div className='App dark'>
			<Header theme={theme} setTheme={setTheme}>
				Task Buddy
			</Header>
			<Form />
			<TaskList />
		</div>
	)
}

export default App
