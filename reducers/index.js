/**
 * Created by adjohnso on 2/17/2016.
 */
import { combineReducers } from 'redux'
import users from './usersReducer'

const rootReducer = combineReducers({
  users
});

export default rootReducer