import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes';
import { exp } from 'react-native-reanimated';
const {height, width} = Dimensions.get('window');

const Style = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:Colors.light,
    },
    haveText:{
        textAlign:'center',
        marginTop:30,
    },
    amount:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:FontSizes.title,
        paddingHorizontal:20,

    },
    title: {
        color: Colors.dark,
        fontWeight:'bold',
        padding:20,
        
    },
    footerStyle: {
        position: 'absolute',
        backgroundColor: Colors.light,
        width: '100%',
        bottom: 0,
        // height: '17%',
        padding:20
      },
})

export default Style