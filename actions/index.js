/**
 * Created by adjohnso on 2/17/2016.
 */
  import * as types from '../constants/actionTypes'
export const switchUser = (id) => {
  console.log('Whats up?')
  return {type: 'SWITCH_USER', id }
}