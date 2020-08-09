import *as types from '../ActionTypes';
import initialState from '../initialState';

export default function (state = initialState.Auth , action){

    switch (action.type) {
        case types.USER_TOKEN:
            return{
                ...state,
                token: action.data,
            }
        case types.GET_USER:
            return{
                ...state,
                data: action.data,
            }
            case types.ACTIVATE_USER:
            return{
                ...state,
                data: action.data,
            }
        default:
          return {...state};
    }

}