import React, { useEffect } from 'react';
import { View , Image,ImageBackground} from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
// import *as AuthAction from '../../store/Actions/Auth'


const Splash = props => {
  useEffect(()=>{
    //  AuthAction.autoLogin()
    console.disableYellowBox = true;
    setTimeout(() => {
      props.navigation.navigate("Welcome");
    }, 1000);
  });
  // console.log("hey splash")
    return (
        <ImageBackground source={ImagesPaths.Logo} imageStyle={Style.ImageStyle} style={Style.Container}/>
    );
}


export default Splash;


  
