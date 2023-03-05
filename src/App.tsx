import { Form } from './components/Form'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { useThemeContext } from './context/ThemeContext'

function App() {
	const { theme } = useThemeContext()

	return (
		<div className={`App ${theme}`}>
			<Header>Task Buddy</Header>
			<Form />
			<TaskList />
		</div>
	)
}

export default App
