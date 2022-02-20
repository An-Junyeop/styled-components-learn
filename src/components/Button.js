import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	/* 공통 스타일*/
	display: inline-flex;
	align-items: center;
	outline: none;
	border: none;
	border-radius: 4px;
	color: white;
	font-weight: bold;
	cursor: pointer;
	padding: 0 1rem;

	/* 크기 */
	height: 2.5rem;
	font-size: 1rem;

	/* 색상 */
	background: #228be6;
	&:hover {
		background: #339af0;
	}
	&:active {
		background: #1c73d6;
	}

	/* 기타 */
	& + & {
		margin-left: 1rem;
	}
`;

const Button = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;