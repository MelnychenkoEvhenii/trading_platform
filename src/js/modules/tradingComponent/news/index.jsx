import { connect } from 'react-redux'
import News from './News'
import * as selectors from './selectors'
import * as actions from './actions'

const mapStateToProps = state => ({
  posts: selectors.getPosts(state),
  loading: selectors.isLoading(state),
  hasError: selectors.getError(state),
})

const mapDispatchToProps = dispatch => ({
  setPostId: id => dispatch(actions.setSelectedPostId(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
