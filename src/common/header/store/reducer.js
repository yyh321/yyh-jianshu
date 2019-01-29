// header模块的reducer统一放在这里管理
import {
  constants
} from './index';

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.FOCUS_SEARCH:
      {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        return newState;
      }
    case constants.FOCUS_BLUR:
      {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        return newState;
      }
    default:
      return state;
  }

}