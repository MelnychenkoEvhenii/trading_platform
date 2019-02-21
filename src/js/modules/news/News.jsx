import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class News extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape()),
    loading: PropTypes.bool,
    hasError: PropTypes.string,
  }

  static defaultProps = {
    posts: [],
    loading: false,
    hasError: false,
  }

  render() {
    const { posts, loading, hasError } = this.props

    if (loading) {
      return 'Loading...'
    }

    if (hasError) {
      return 'Sorry dude, something went wrong!'
    }

    return (
      <div>
        {posts && posts.map(post => <div key={post.ID}>{post.ID}</div>)}
      </div>
    )
  }
}
