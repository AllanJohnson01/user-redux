/**
 * Created by adjohnso on 2/17/2016.
 */
import {SWITCH_USER} from '../constants/actionTypes'


const initialState = [
  {
    id: 0,
    userName: 'TeisMan',
    active: true
  },
  {
    id: 1,
    userName: 'SuperJ',
    active: false
  }
];

const users = (state = initialState, action) => {
  console.log('users reducer was called with state', state, 'and action', action);
  switch (action.type) {
    case 'SWITCH_USER':
      return state.map(user =>
        user.id === action.id ?
          Object.assign({}, user, {active: true}) :
      Object.assign({}, user, {active : false})
      );
    default:
      return state;
  }
};

export default users;