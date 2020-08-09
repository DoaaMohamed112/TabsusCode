import * as types from '../ActionTypes';
// import APIConstant, { Post, Get, setData, getetHeaders, getToken } from "./APIConstant";
import AsyncStorage from "@react-native-community/async-storage";
import { navigate, replace, reset } from "../../navigations/NavigationService";
import { Platform } from 'react-native'

const BaseUrl = "https://tabsus.com/tabsus/rest/en";

export const getHeaders = async (isToken) => {
    let user = await AsyncStorage.getItem("User");
    let headers = {};
    if (user == null) {
      headers = {
        "Content-Type": "application/json",
      };
    } else {
      let token = await getToken();
      let deviceToken = JSON.parse(user).user.deviceToken;
      headers = {
        "Content-Type": "application/json",
      };
    //   if (isToken) {
    //     headers.Authorization = `Bearer ${token}`;
    //     headers.userdevicetoken = deviceToken;
    //   }
    }
    return headers;
  };

  export const getToken = async () => {
    try {
      let token = await AsyncStorage.getItem("token");
      return token;
    } catch (err) {
      console.log(err);
    }
  };

export const Get = async(url,isTokenRequired) => {
    console.log("entered get method")
        try {
            const response = await fetch(`${BaseUrl}${url}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("This is response from api", response)
            return response;

        } catch (err) {
            console.log(err.message);
            return undefined;
        }
};

export const Post = async(url,Data,isTokenRequired) => {
    console.log("entered")
    try {
        const response = await fetch(`${BaseUrl}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Data)
        });

        console.log("This is response from api", response)
        return response;

    } catch (err) {
        console.log(err.message);
        return undefined;
    }
};

export const GetBy = async(url,Data, isTokenRequired) => {
    console.log("entered get method")
        try {
            const response = await fetch(`${BaseUrl}${url}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Data)
            });

            console.log("This is response from api", response)
            return response;

        } catch (err) {
            console.log(err.message);
            return undefined;
        }
};

export const Put = async(url,Data, isTokenRequired) => {
    console.log("entered get method")
        try {
            const response = await fetch(`${BaseUrl}${url}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Data)
            });

            console.log("This is response from api", response)
            return response;

        } catch (err) {
            console.log(err.message);
            return undefined;
        }
};

export const Delete = async(url,Data, isTokenRequired) => {
    console.log("entered get method")
        try {
            const response = await fetch(`${BaseUrl}${url}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Data)
            });

            console.log("This is response from api", response)
            return response;

        } catch (err) {
            console.log(err.message);
            return undefined;
        }
};


export const setData = (actionType, data) => {
    return {type: actionType, data: data};
}