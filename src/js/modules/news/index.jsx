import { connect } from 'react-redux'
import News from './News'
import * as selectors from './selectors'

const mapStateToProps = state => ({
  posts: selectors.getPosts(state),
  loading: selectors.isLoading(state),
  hasError: selectors.getError(state),
})

export default connect(mapStateToProps)(News)
