import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes';
const {height, width} = Dimensions.get('window');

const Style = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    flex: 1,
  },
  footerStyle: {
    position: 'absolute',
    backgroundColor: Colors.light,
    width: '100%',
    bottom: 0,
    padding:20,
    flexDirection:'row',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    elevation: 24
  },
  pageContainer: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: Colors.light,
  },
  sidebarContainer: {
      backgroundColor: Colors.backGray,
      height: '100%',
      width: '28%',
      paddingVertical: 20,
      borderEndColor: Colors.light,
      borderEndWidth: 1
  },
  componentContainer: {
      width: '72%',
      paddingVertical: 20,
  },
  sideItemText: {
      fontSize: 14,
      color: Colors.textGray,
      paddingVertical: 15,
      paddingHorizontal: 10,

  }
});

export default Style;
