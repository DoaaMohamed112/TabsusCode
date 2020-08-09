import *as types from '../ActionTypes';
import initialState from '../initialState';

export default function (state = initialState.Nationality, action){
    switch (action.type) {
        case types.GET_CURRENCIES:
            console.log("Data", action.data)
            return{
                ...state,
                Currencies: action.data,
            }
        case types.GET_COUNTRIES:
            return{
                ...state,
                Countries: action.data,
            }
        default:
          return {...state};
    }

}