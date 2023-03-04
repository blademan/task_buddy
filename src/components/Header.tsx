import logo from '../assets/logo_task.png'

type SetThemeType = (theme: string) => void

interface HeaderProps {
	children: string
	theme: string
	setTheme: SetThemeType
}

export const Header = ({ children, theme, setTheme }: HeaderProps) => {
	return (
		<header>
			<span className='logo'>
				<img src={logo} alt='Logo' />
				<span>{children}</span>
			</span>
			<span className='themeSelector'>
				<span className={theme === 'light' ? 'light activeTheme' : 'light'} onClick={() => setTheme('light')}></span>
				<span
					className={theme === 'medium' ? 'medium activeTheme' : 'medium'}
					onClick={() => setTheme('medium')}
				></span>
				<span className={theme === 'dark' ? 'dark activeTheme' : 'dark'} onClick={() => setTheme('dark')}></span>
				<span
					className={theme === 'gradientOne' ? 'gradientOne activeTheme' : 'gradientOne'}
					onClick={() => setTheme('gradientOne')}
				></span>
				<span
					className={theme === 'gradientTwo' ? 'gradientTwo activeTheme' : 'gradientTwo'}
					onClick={() => setTheme('gradientTwo')}
				></span>
				<span
					className={theme === 'gradientThree' ? 'gradientThree activeTheme' : 'gradientThree'}
					onClick={() => setTheme('gradientThree')}
				></span>
			</span>
		</header>
	)
}
