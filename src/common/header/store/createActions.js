// 从发公共的action,然后将其导出

import * as constants from "./constants";
import {
  fromJS
} from "immutable";
import axios from "axios";

// 当搜索框获得焦点时，获取异步数据,将获取的数据转换为immutable
const getListItemsAction = value => ({
  type: constants.GET_LIST_ITEMS,
  value: fromJS(value),
  totalPage: Math.ceil(value.length / 10)
});

export const focusSearchAction = () => ({
  type: constants.FOCUS_SEARCH
});

export const blurSearchAction = () => ({
  type: constants.FOCUS_BLUR
});

export const getListAction = () => {
  // redux-thunk要求返回一个函数
  return dispatch => {
    axios
      .get("/api/data.json")
      .then(res => {
        const data = res.data.list;
        // 获取到数据后，将数据交给store存储
        dispatch(getListItemsAction(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const mouseEnterAction = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeaveAction = () => ({
  type: constants.MOUSE_LEAVE
})

export const changePageAction = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})