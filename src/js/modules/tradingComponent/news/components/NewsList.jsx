import React from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

const NewsList = ({ posts, handlePostId }) => {
  return (
    <div>
      {posts &&
        posts.map(post => (
          <NewsItem key={post.ID} post={post} setPostId={handlePostId} />
        ))}
    </div>
  )
}

NewsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handlePostId: PropTypes.func.isRequired,
}

export default NewsList
