import React from 'react'
import ReactDOM from 'react-dom'
import { FallbackProps } from '../ErrorBoundary/ErrorBoundary'
import styled from 'styled-components'

const Container = styled.div`
	background-color: #cb3939;
	color: white;
	animation: ease-in-out appear 0.3s;
	position: fixed;
	right: 10px;
	display: flex;
	gap: 5px;
	flex-direction: column;
	padding: 15px;
	border-radius: 10px;
	font-family: 'Arial', sans-serif;
	width: 300px;
	text-align: center;

	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`
const Button = styled.button`
	border: none;
	cursor: pointer;
	width: 65px;
	height: 35px;
	border-radius: 5px;
	font-weight: bolder;
	margin: 0 auto;
`

const ErrorFallback: React.FC<FallbackProps> = props => {
	return ReactDOM.createPortal(
		<Container>
			{props.errorMessage}
			<Button onClick={props.onErrorReset}>Close</Button>
		</Container>,
		document.getElementById('error-root') as HTMLDivElement
	)
}

export default ErrorFallback
