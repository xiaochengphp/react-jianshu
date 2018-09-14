import { Types } from './action';

const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case Types.SEARCH_FOCUS:
            return {
                ...state,
                focused: action.value
            }
        case Types.SEARCH_BLUR:
            return {
                ...state,
                focused: action.value
            }
        default:
            return state;
    }
}

