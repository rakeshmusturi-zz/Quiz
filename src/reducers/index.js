import { combineReducers } from 'redux';
import listReducer from './listReducer';

const counterApp = combineReducers({
  listReducer
})

export default counterApp
