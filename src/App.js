import React from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.div`
	width: 10rem;
	height: 10rem;
	background: aquamarine;
	border-radius: 50%;
	text-align: center;
	line-height: 10rem;
	color: ${props => props.color || 'black'};

	${props =>
		props.huge &&
		css`
			width: 20rem;
			height: 20rem;
			line-height: 20rem;
		`}
`;

function App() {
	return (
		<Circle color='red' huge>
			Styled components
		</Circle>
	);
}

export default App;
