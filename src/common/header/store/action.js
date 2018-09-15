import axios from 'axios';

export const Types = {
  SEARCH_FOCUS: 'search_focus',
  SEARCH_BLUR: 'search_blur',
  CHANGE_LIST: 'change_list',
};

export const searchFocus = value => ({
  type: Types.SEARCH_FOCUS,
  value: value,
});

export const searchBlur = value => ({
  type: Types.SEARCH_BLUR,
  value: value,
});

export const changeList = data => ({
  type: Types.CHANGE_LIST,
  value: data,
});

export const getList = () => {
  return dispatch => {
    axios.get ('/api/headerList.json').then (res => {
      dispatch (changeList (res.data.list));
    });
  };
};
