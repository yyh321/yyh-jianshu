
import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  list: []
})

const homeReducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_INIT_LIST:
      return state.set('list',action.list);
    default:
      return state;
  }

}

export default homeReducer;