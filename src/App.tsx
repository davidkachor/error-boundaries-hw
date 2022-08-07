import React, { useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import ExampleComponent from './components/ExampleComponent/ExampleComponent'
import ErrorFallback from './components/ErrorFallback/ErrorFallback'

function App() {
	const [url, setUrl] = useState('https://swapi.dev/api/peopl')

	return (
		<ErrorBoundary
			fallback={ErrorFallback}
			onReset={() => {
				setUrl('https://swapi.dev/api/people')
			}}
		>
			<ExampleComponent url={url} />
		</ErrorBoundary>
	)
}

export default App
