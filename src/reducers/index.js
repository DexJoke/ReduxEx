import {combineReducers} from 'redux'
import {setDefaultPoint} from '../actions';

const point = (state = setDefaultPoint(), action) => {
    console.log("reducers point");
    switch (action.type) {
        case "SET_POINT":
            return action.totalPoint;
        default:
            return state.totalPoint;
    }
};

export default combineReducers({point})
