import React, { useEffect } from 'react';
import { View , Image,ImageBackground, AsyncStorage} from 'react-native';
import Style from './style';
import I18n from '../../i18n';
import ImagesPaths from '../../constants/ImagesPaths';
import *as AuthAction from '../../store/Actions/Auth';
import { useDispatch } from 'react-redux';

const Splash = props => {
const dispatch = useDispatch();

  useEffect(()=>{
    //  AuthAction.autoLogin()
    AsyncStorage.getItem("Lang")
    .then((item) => {
      if(item != undefined)
      {
      item = JSON.parse(item);
      console.log("Language",item.lang)
      
      I18n.locale = item.lang
      return true;
      }
    })
    .done();

    AuthAction.autoLogin(dispatch)
  });
  // console.log("hey splash")
    return (
        <ImageBackground source={ImagesPaths.Logo} imageStyle={Style.ImageStyle} style={Style.Container}/>
    );
}


export default Splash;


  
