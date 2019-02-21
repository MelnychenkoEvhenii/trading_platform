import constants from '../../constants/constants'

export const getPostsRequest = () => ({
  type: constants.GET_POSTS_REQUEST,
})

export const getPostsSuccess = payload => ({
  type: constants.GET_POSTS_SUCCESS,
  payload,
})

export const getPostsError = payload => ({
  type: constants.GET_POSTS_ERROR,
  payload,
})
