import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { fetchAllUsersReducer } from './fetchAllUsersReducer';
import {fetchAllNotificationReducer} from './fetchAllNotificationReducer'
const appReducer = combineReducers({
  loginReducer,
  fetchAllUsersReducer,
  fetchAllNotificationReducer,
  
})

const rootReducer = (state, action) => {
//   console.log(action);
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;
