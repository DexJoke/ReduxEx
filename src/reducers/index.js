import {combineReducers} from 'redux'

const totalPoint = (state = 0, action) => {
    switch (action.type) {
        case "SET_POINT":
            return action.totalPoint;
        default:
            return state;
    }
};

export default combineReducers({totalPoint})
