// 该文件集中管理所有的action，外部使用action，只需要引用这个文件即可。
import headerReducer from './reducer';
import * as constants from './constants';
import * as createActions from './createActions';

export {
  headerReducer,
  constants,
  createActions
}