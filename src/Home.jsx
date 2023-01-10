import React, { useContext } from 'react'
import DataContext from './context/DataContext';
import Feed from './Feed'

const Home = () => {
	const {searchResults, error, isLoading} = useContext(DataContext)
	
	return (
		<main className='Home'>
			{isLoading && <p className='statusMsg'>Loading posts...</p>}
			{!isLoading && error && <p className='statusMsg'>{error}</p>}
			{searchResults.length ? (
				<Feed posts={searchResults} />
			) : (
				<p style={{ marginTop: '2rem' }}>No posts to display</p>
			)}
		</main>
	)
}

export default Home
