import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes'
const { height, width } = Dimensions.get('window');

const Style = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:Colors.light,
    },
    footerStyle: {
        width: '100%',
        // bottom: 0,
        // position:'absolute',
        // justifyContent:'flex-end',
        // height: 220,
        
        paddingVertical: 20,
        paddingHorizontal:20,
   
      },
      rateTitle:{
          flex:0.35,
        // width:'30%',
        
          fontWeight:'bold'
        },
    CommentContainer:{
        paddingTop:40,
        height:'100%'
    },
    InputContainer:{
        width:'100%',
        height:120
    },
});

export default Style;

