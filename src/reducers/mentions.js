import { GET_MENTIONS_SUCCESS } from '../actionCreators/mentions'

export default function mentions(state = [], action) {
  switch (action.type) {
  case GET_MENTIONS_SUCCESS:
    return [...action.mentions]
  default:
    return state
  }
}
