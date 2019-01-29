// 从发公共的action,然后将其导出

import * as constants from './constants'

export const focusSearchAction = () => ({
  type: constants.FOCUS_SEARCH
})

export const blurSearchAction = () => ({
  type: constants.FOCUS_BLUR
})