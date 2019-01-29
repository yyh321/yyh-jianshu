// header模块的reducer统一放在这里管理
import {
  constants
} from './index';
import {
  fromJS
} from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.FOCUS_SEARCH:
      return state.set('focused', true);
    case constants.FOCUS_BLUR:
      return state.set('focused', false);
    case constants.GET_LIST_ITEMS:
      return state.set('list', action.value);
    default:
      return state;
  }

}