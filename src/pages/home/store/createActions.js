
import {fromJS} from 'immutable';
import axios  from 'axios';
import * as constants from './constants';

const getInitListAction = (list) => ({
  type: constants.GET_INIT_LIST,
  list:fromJS(list)
})

export const getListAction = () => {
  return (dispatch) => {
    axios.get('/api/list.json').then((res) => {
      const list = res.data.list;
      dispatch(getInitListAction(list));
    }).catch((err) => {
      console.log(err);
    })
  }
}
