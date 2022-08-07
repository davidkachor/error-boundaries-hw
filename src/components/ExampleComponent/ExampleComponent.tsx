import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

const ExampleComponent: React.FC<{ url: string }> = props => {
	const { data, error } = useSWR(props.url, fetcher)

	if (error) {
		throw new Error('Something went wrong')
	}

	return (
		<div>
			<h1>Data list</h1>
			<ul>
				{data?.results.map((e: any) => (
					<li key={e?.url}>{e?.name}</li>
				))}
			</ul>
		</div>
	)
}

export default ExampleComponent
