import {Types} from './action';

const defaultState = {
  focused: false,
  name: 'Hello world',
  list: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case Types.SEARCH_FOCUS:
      return {
        ...state,
        focused: action.value,
      };
    case Types.SEARCH_BLUR:
      return {
        ...state,
        focused: action.value,
      };
    case Types.CHANGE_LIST:
      return {
        ...state,
        list: action.value,
      };
    default:
      return state;
  }
};
