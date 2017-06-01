import {combineReducers} from 'redux'
import fridgeData from '../data/fridge-items'

import fridge from './fridge'

export default combineReducers({
  fridge:fridgeData
})
