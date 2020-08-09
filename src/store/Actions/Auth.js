import * as types from '../ActionTypes';
import { Post, setData,Put } from "./API_Requests";
import AsyncStorage from "@react-native-community/async-storage";
import { navigate, replace, reset } from "../../navigations/NavigationService";
import { Platform } from 'react-native'


const storeData = async data => {
    try {
        console.log("storedata");
        await AsyncStorage.setItem('User', JSON.stringify(data));
        await AsyncStorage.setItem('token', data.token);
    } catch (e) {
        throw Error("Error While storing data in AsyncStorage please Try again");
    }
};
export const autoLogin = async () => {
    let user = {}
    user = await AsyncStorage.getItem('UserToken')
        .then((item) => {
            if (item != undefined) {
                item = JSON.parse(item);
                console.log("UserToken", item)
                setTimeout(() => { replace("HomeStackNavigator") }, 2000)
            }
            else {
                setTimeout(() => { replace("Welcome") }, 2000)
            }
        })
        .done();
  
}



export const login = (userData, callback) => {
    return async (dispatch) => {
        try {
            console.log("user data", {
                username: userData.email,
                password: userData.password
            });
             Post('/V1/integration/customer/token',{
                username: userData.email,
                password: userData.password
            }).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log(res);
                    if (response.ok) {
                        dispatch(setData(types.USER_TOKEN, res))
                        AsyncStorage.setItem("UserToken",JSON.stringify({token:  res}))
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

export const ActivateAccount = (userData, callback) => {
    return async (dispatch) => {
        try {
                    
             Put('/V1/customers/me/activate',{
                confirmationKey: userData.confirmationKey,
            }).then(async response => {
                if (response != undefined) {
                    let res = await response.json();

                    if (response.ok) {
                        dispatch(setData(types.ACTIVATE_USER, res))
                        AsyncStorage.setItem("UserToken",JSON.stringify({account:  res}))
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

export const SignUp = (userData, callback) => {
    return async (dispatch) => {
        console.log("Data of User",userData);
        try {
             Post('/V1/customers',userData).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log(res);
                    if (response.ok) {
                        dispatch(setData(types.GET_USER, res))
                        AsyncStorage.setItem("USER",JSON.stringify({userData:  res}))
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