
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
        marginBottom: 40,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationBox: {
        flexDirection: 'row',
        borderTopColor: Colors.lightgray,
        borderTopWidth: 1,
        paddingVertical: 30,
        paddingHorizontal: 40
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default Style;
