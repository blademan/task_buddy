import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TaskContextProvider } from './context/TaskContext'
import { ThemeContextProvider } from './context/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<TaskContextProvider>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</TaskContextProvider>
)
