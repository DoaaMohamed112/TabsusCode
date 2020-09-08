import * as types from '../ActionTypes';
import { Post, setData,Put, Get, GetWith } from "./API_Requests";
import AsyncStorage from "@react-native-community/async-storage";
import { navigate, replace, reset } from "../../navigations/NavigationService";
import { Platform } from 'react-native'



export const GetAllProduct = (data,callback) => {
    return async (dispatch) => {
        try {
        
             GetWith('/V1/products-render-info',data,false).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log(res);
                    if (response.ok) {
                        dispatch(setData(types.GET_ALL_PRODUCTS, res))
                        // AsyncStorage.setItem("UserToken",JSON.stringify({token:  res}))
                        callback({ ok: true, data: "" })
                    }
                    else {
                        callback({ ok: false, data: res.message })
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

export const CreateGuestCard = (callback) => {
    return async (dispatch) => {
        try {
        
             Post('/V1/guest-carts',{},false).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log(res);
                    if (response.ok) {
                        // dispatch(setData(types.GUEST_CART_TOKEN, res))
                        AsyncStorage.setItem("CartToken",JSON.stringify({token:  res}))
                        callback({ ok: true, data: res })
                    }
                    else {
                        callback({ ok: false, data: res.message })
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

