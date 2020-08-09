import * as types from '../ActionTypes';
import { Post, setData, Get } from "./API_Requests";
import AsyncStorage from "@react-native-community/async-storage";

export const GetCurrencies = (callback) => {
    return async (dispatch) => {
        try {
             Get('/V1/directory/currency').then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log("Response", res);
                    if (response.ok) {
                        dispatch(setData(types.GET_CURRENCIES, res))
                        callback({ ok: true, data: res })
                    }
                    else {
                        callback({ ok: false, data: res.error.message })
                    }
                }
                else {
                    callback({ ok: false, data: "Something went wrong, please try again!" })
                }
            })

        } catch (err) {
            console.log(err.message);
            callback({ ok: false, data: "Something went wrong, please try again!" })
        }
    };
};
export const GetCountries = (callback) => {
    return async (dispatch) => {
        try {
             Get('/V1/directory/countries').then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log("Response", res);
                    if (response.ok) {
                        dispatch(setData(types.GET_COUNTRIES, res))
                        callback({ ok: true, data: res })
                    }
                    else {
                        callback({ ok: false, data: res.error.message })
                    }
                }
                else {
                    callback({ ok: false, data: "Something went wrong, please try again!" })
                }
            })

        } catch (err) {
            console.log(err.message);
            callback({ ok: false, data: "Something went wrong, please try again!" })
        }
    };
};