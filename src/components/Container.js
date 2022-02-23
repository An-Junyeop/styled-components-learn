import styledComponents from '../styles/ContainerStyle';

const { CustomContainer } = styledComponents;

function Container({ currentThemeText }) {
	return (
		<CustomContainer>
			<h1>{currentThemeText}</h1>
		</CustomContainer>
	);
}

export default Container;
