// header模块的reducer统一放在这里管理
import {
  constants
} from './index';
import {
  fromJS
} from 'immutable';

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.FOCUS_SEARCH:
      return state.set('focused', true);
    case constants.FOCUS_BLUR:
      return state.set('focused', false);
    default:
      return state;
  }

}