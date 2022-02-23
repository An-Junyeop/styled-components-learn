import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

/* 페이지 전체에 적용 될 스타일을 선언 */
const GlobalStyle = createGlobalStyle`
    ${reset};      // 브라우저의 기본 css 초기화
    
    html {
        font-size: 62.5% // 1rem => 10px
    }

    ${({ theme }) =>
		css`
			body {
				font-family: ${theme.fonts.family.base};
				font-weight: ${theme.fonts.weight.normal};
				font-size: ${theme.fonts.size.base};
			}
		`}
`;

export default GlobalStyle;
