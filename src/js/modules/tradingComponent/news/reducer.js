import constants from '../../../constants/constants'

const initialState = {
  posts: [],
  loading: false,
  error: '',
  hasMore: false,
  selectedPostId: '',
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case constants.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
        hasMore: constants.DEFAULT_COUNT_POSTS <= action.payload.length,
      }
    case constants.GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case constants.SET_SELECTED_POST_ID:
      return {
        ...state,
        selectedPostId: action.payload,
      }
    default:
      return state
  }
}

export default newsReducer
