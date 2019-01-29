// header模块的reducer统一放在这里管理
import {
  constants
} from './index';
import {
  fromJS
} from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.FOCUS_SEARCH:
      return state.set('focused', true);
    case constants.FOCUS_BLUR:
      return state.set('focused', false);
    case constants.GET_LIST_ITEMS:
      return state.merge({
        list: action.value,
        totalPage: action.totalPage
      });
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }

}