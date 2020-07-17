import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes'
const { height, width } = Dimensions.get('window');

const Style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.light
    },
    PointsContainer: {
        borderBottomWidth: 1,
        height: '30%',
        borderBottomColor: Colors.tabsBackground
    },
    PointBackground: {
        width: '80%',
        alignSelf: 'center',
        height: '100%'
    },
    PointImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'center'
    },
    PointTextContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    PointTextStyle: {
        fontSize: FontSizes.subtitle,
        fontWeight: 'bold'
    },
    VoucherContainer: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 30
    },
    VoucherImage:{
        resizeMode:'stretch',
        alignSelf:'center',
        width:'100%'
    },
});

export default Style;

