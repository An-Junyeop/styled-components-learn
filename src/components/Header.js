import styledComponents from '../styles/HeaderStyle';

const { CustomHeader, ThemeSwitchButton } = styledComponents;

function Header({ switchTheme }) {
	return (
		<CustomHeader>
			<ThemeSwitchButton onClick={() => switchTheme()}>
				Change Theme
			</ThemeSwitchButton>
		</CustomHeader>
	);
}

export default Header;
