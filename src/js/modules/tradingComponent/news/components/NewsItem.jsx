import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NewsItemConrainer = styled.div`
  background-color: yellow;
  padding: 5px;
  margin-top: 5px;
  cursor: pointer;
`

const NewsItem = ({ post, setPostId }) => {
  const handleClick = e => {
    e.preventDefault()
    setPostId(e.target.dataset.postId)
    // open modal
  }

  const { Title } = post

  return (
    <NewsItemConrainer
      role="presentation"
      className="news-item"
      onClick={handleClick}
      data-postId={post.ID}
    >
      {Title}
    </NewsItemConrainer>
  )
}

NewsItem.propTypes = {
  post: PropTypes.shape().isRequired,
  setPostId: PropTypes.string.isRequired,
}

export default NewsItem
