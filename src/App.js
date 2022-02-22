import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
	width: 512px;
	margin: 4rem auto 0 auto;
	border: 1px solid black;
	padding: 1rem;
`;

const ButtonGroup = styled.div`
	& + & {
		margin-top: 1rem;
	}
`;

function App() {
	const [dialog, setDialog] = useState(false);
	const onClick = () => {
		setDialog(true);
	};
	const onConfirm = () => {
		console.log('확인');
		setDialog(false);
	};
	const onCancel = () => {
		console.log('취소');
		setDialog(false);
	};
	return (
		<ThemeProvider
			theme={{
				palette: {
					blue: '#228be6',
					gray: '#495057',
					pink: '#f06595',
				},
			}}
		>
			<AppBlock>
				<ButtonGroup>
					<Button color='blue' size='large'>
						BUTTON
					</Button>
					<Button color='blue'>BUTTON</Button>
					<Button color='blue' size='small'>
						BUTTON
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button color='gray' size='large'>
						BUTTON
					</Button>
					<Button color='gray'>BUTTON</Button>
					<Button color='gray' size='small'>
						BUTTON
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button color='pink' size='large'>
						BUTTON
					</Button>
					<Button color='pink'>BUTTON</Button>
					<Button color='pink' size='small'>
						BUTTON
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button color='blue' size='large' outline>
						BUTTON
					</Button>
					<Button color='gray' outline>
						BUTTON
					</Button>
					<Button color='pink' size='small' outline>
						BUTTON
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button color='blue' size='large' outline fullWidth>
						BUTTON
					</Button>
					<Button color='gray' outline fullWidth>
						BUTTON
					</Button>
					<Button
						color='pink'
						size='small'
						outline
						fullWidth
						onClick={onClick}
					>
						삭제
					</Button>
				</ButtonGroup>
			</AppBlock>
			<Dialog
				title='정말로 삭제하시겠습니까?'
				confirmText='삭제'
				cancelText='취소'
				onConfirm={onConfirm}
				onCancel={onCancel}
				visible={dialog}
			>
				데이터를 정말로 삭제하시겠습니까?
			</Dialog>
		</ThemeProvider>
	);
}

export default App;
