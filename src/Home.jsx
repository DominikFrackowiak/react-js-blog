import React from 'react'
import Feed from './Feed'

const Home = ({posts, error, isLoading}) => {
	console.log(error);
	return (
		<main className='Home'>
			{isLoading && <p className='statusMsg'>Loading posts...</p>}
			{!isLoading && error && <p className='statusMsg'>{error}</p>}
			{posts.length ? (
				<Feed posts={posts} />
			) : (
				<p style={{ marginTop: '2rem' }}>No posts to display</p>
			)}
		</main>
	)
}

export default Home
