// import {
//   FOCUS_SEARCH,
//   FOCUS_BLUR
// } from './constants';

import * as constants from './constants'

export const focusSearchAction = () => ({
  type: constants.FOCUS_SEARCH
})

export const blurSearchAction = () => ({
  type: constants.FOCUS_BLUR
})