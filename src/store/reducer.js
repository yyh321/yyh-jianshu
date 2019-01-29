// 管理整个应用的reducer，通过combineReducers，将所有的reducer生成一个新的reducer，然后将其导出。
import {
  combineReducers
} from "redux";
import {
  homeReducer
} from "../common/header/store";

const reducer = combineReducers({
  header: homeReducer
});

export default reducer;