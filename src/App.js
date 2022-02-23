import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Container from './components/Container';

function App() {
	const [theme, setTheme] = useState(lightTheme);
	const [currentThemeText, setCurrentThemeText] = useState('Light Theme');

	const switchTheme = () => {
		setTheme(theme === lightTheme ? darkTheme : lightTheme);
		setCurrentThemeText(
			theme === lightTheme ? 'Dark Theme' : 'Light Theme',
		);
	};
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header switchTheme={switchTheme} />
			<Container currentThemeText={currentThemeText} />
		</ThemeProvider>
	);
}
export default App;
