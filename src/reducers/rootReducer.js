import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import mentions from './mentions'
const rootReducer = combineReducers({
  mentions,
  routing: routerReducer
})

export default rootReducer
