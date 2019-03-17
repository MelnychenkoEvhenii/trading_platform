import React from 'react'
import PropTypes from 'prop-types'
import NewsList from './components/NewsList'
import NewsModal from './components/NewsModal'

export default class News extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape()),
    loading: PropTypes.bool,
    hasError: PropTypes.string,
    setPostId: PropTypes.func.isRequired,
  }

  static defaultProps = {
    posts: [],
    loading: false,
    hasError: false,
  }

  render() {
    const { posts, loading, hasError, setPostId } = this.props

    if (loading) {
      return 'Loading...'
    }

    if (hasError) {
      return 'Sorry dude, something went wrong!'
    }

    return (
      <>
        <div className="news">
          <NewsList posts={posts} handlePostId={setPostId} />
        </div>
        <div className="news-modal">
          <NewsModal />
        </div>
      </>
    )
  }
}
