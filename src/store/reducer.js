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