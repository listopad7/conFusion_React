import { LEADERS } from '../shared/leaders';
import * as ActionTypes from "./ActionTypes";

export const Leaders = (state = {errMess: null, isLoading: true,  leaders:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: false, leaders: action.payload};

        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []}

        default:
            return state;
    }


};