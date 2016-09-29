import Api from '../services/Api'
import makeActionCreator from './makeActionCreator'
import AppConstants from '../constants/AppConstants'

/* Action types */
export const GET_MENTIONS_REQUEST = 'GET_MENTIONS_REQUEST'
export const GET_MENTIONS_SUCCESS = 'GET_MENTIONS_SUCCESS'
export const GET_MENTIONS_FAILED = 'GET_MENTIONS_FAILED'

/* Action creators */
export const getMentionsRequest = makeActionCreator(GET_MENTIONS_REQUEST)
export const getMentionsSuccess = makeActionCreator(GET_MENTIONS_SUCCESS, 'mentions')
export const getMentionsFailed = makeActionCreator(GET_MENTIONS_FAILED, 'error')

/* Thunk action creators */
export function getMentionsByAccount(accountId, alertId) {
  return function (dispatch) {
    dispatch(getMentionsRequest())
    Api
      .getWithAccess(AppConstants.API_ADDRESS + '/accounts/' + accountId + '/alerts/' + alertId + '/mentions')
      .then(function (res) {
        dispatch(getMentionsSuccess(res.body.mentions))
      })
      .catch(function (err) {
        dispatch(getMentionsFailed(err))
      })
  }
}
