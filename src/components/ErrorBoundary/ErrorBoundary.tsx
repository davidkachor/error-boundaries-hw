import React, { ReactNode } from 'react'

interface PropsType {
	children: ReactNode
	fallback: React.ComponentType<FallbackProps>
	onReset?: () => void
	onError?: () => void
}

interface StateType {
	hasError: boolean
	errorMessage: string | null
}

export interface FallbackProps {
	errorMessage: string | null
	onErrorReset: () => void
}

class ErrorBoundary extends React.Component<PropsType, StateType> {
	constructor(props: PropsType) {
		super(props)
		this.state = {
			hasError: false,
			errorMessage: null,
		}
	}

	static getDerivedStateFromError(error: any) {
		return { hasError: true, errorMessage: error?.message }
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.props.onError?.()
		console.log(error.message)
	}

	resetErrorHandler = () => {
		this.setState({ hasError: false, errorMessage: null })
		this.props.onReset?.()
	}

	render() {
		const props: FallbackProps = {
			errorMessage: this.state.errorMessage,
			onErrorReset: this.resetErrorHandler,
		}
		const { fallback: Fallback } = this.props

		if (this.state.hasError) {
			return <Fallback {...props} />
		}

		return <>{this.props.children}</>
	}
}

export default ErrorBoundary
