const NewPost = ({
	handleSubmit,
	postTitle,
	setPostTitle,
	postBody,
	setPostBody,
}) => {
	return (
		<main className='NewPost'>
			<h1>New Post</h1>
			<form className='newPostForm' onSubmit={handleSubmit}>
				<label htmlFor='postTitle'>Title:</label>
				<input
					type='text'
					id='postTitle'
					value={postTitle}
					onChange={e => setPostTitle(e.target.value)}
					required
				/>
				<label htmlFor='postBody'>Post:</label>
				<textarea
					id='postBody'
					value={postBody}
					onChange={e => setPostBody(e.target.value)}
					required
				/>
				<button type='submit'>Submit</button>
			</form>
		</main>
	)
}

export default NewPost
