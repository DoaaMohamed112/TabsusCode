
import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes';
const {height, width} = Dimensions.get('window');

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
       
    },
    settingBox: {
        flexDirection: 'row',
        backgroundColor: Colors.tabsBack,
        marginHorizontal: 30,
        marginTop: 30,
        // marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
  
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        letterSpacing: 1
    },
    details:{
        fontSize: 13,
        paddingHorizontal: 10,
        color: Colors.textGray
    },
    boxAvatar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    avatarContainer: {
        width: 60,
        height: 60,
        borderRadius: 35,
        padding: 15,
        backgroundColor: Colors.light,
        overflow: 'hidden',
        marginVertical: 10,
        borderColor: Colors.lightgray,
        borderWidth: 1
    }
});

export default Style;
