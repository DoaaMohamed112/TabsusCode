import *as types from '../ActionTypes';
import initialState from '../initialState';

export default function (state = initialState.Auth , action){

    switch (action.type) {
        case types.GET_ALL_PRODUCTS:
            return{
                ...state,
                data: action.data,
            }
        case types.GUEST_CART_TOKEN:
            return{
                ...state,
                token: action.data,
            }
 
        default:
          return {...state};
    }

}