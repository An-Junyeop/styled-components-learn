import styled, { css } from 'styled-components';

/* Theme을 변경하는 Button 스타일 */
const ThemeSwitchButton = styled.button`
	${({ theme }) =>
		css`
			background: ${theme.colors.primary};
			color: ${theme.colors.secondary};
			font-size: ${theme.fonts.size.base};
			border-radius: 2px;
		`}
`;

/* Header 스타일*/
const CustomHeader = styled.div`
	${({ theme }) =>
		css`
			padding: 1rem;
			display: flex;
			justify-content: center;
			background: ${theme.colors.secondary};
		`}
`;

const styledComponents = { ThemeSwitchButton, CustomHeader };

export default styledComponents;
