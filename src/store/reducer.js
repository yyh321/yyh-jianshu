// 管理整个应用的reducer，通过combineReducers，将所有的reducer生成一个新的reducer，然后将其导出。
// 如果想让state也变成immutable，则可以使用redux-immutable,它也提供了一个combineReducers，此时的state就
// 是一个immutable对象了
import {
  combineReducers
} from "redux-immutable";
import {
  homeReducer
} from "../common/header/store";

const reducer = combineReducers({
  header: homeReducer
});

export default reducer;