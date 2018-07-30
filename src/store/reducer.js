import { combineReducers } from 'redux'

import { reducer as home } from '../pages/home/'
import { reducer as food } from '../pages/food/'

export default combineReducers({
    home,
    food
})