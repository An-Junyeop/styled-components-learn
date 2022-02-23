import styled, { css } from 'styled-components';

/* Container 스타일 */
const CustomContainer = styled.div`
	${({ theme }) => {
		const { colors, device, fonts, paddings } = theme;
		return css`
			width: 100%;
			height: 100%;
			background: ${colors.tertiary};
			${device.tablet} {
				background: ${colors.red};
			}

			h1 {
				font-size: ${fonts.size.xl};
				padding: ${paddings.xl};
				text-align: center;
			}
		`;
	}}
`;

const styledComponents = { CustomContainer };

export default styledComponents;
