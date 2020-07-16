import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes';
const {height, width} = Dimensions.get('window');

const Style = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    flex: 1,
  },

  tabsContainer: {
      width: '100%',
     backgroundColor: Colors.backGray,
     flexDirection: "row",
     alignItems: 'center',
     justifyContent: 'center'
    },
    tabStyle:{
        alignItems:'center',
        paddingVertical:20,
        flexDirection: 'row',
        marginHorizontal: 15,
        justifyContent: 'center'
    },
    tabText: {
        textAlign:'center',
        fontSize: 14,
        textAlignVertical: 'center',
    },
    tabImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginHorizontal: 5,
        alignSelf: 'center',
    },
    
  itemContainer: {
    // width: width - 40,
    height: width * 0.7,
  },
  bodyContent: {
    // flexWrap: 'wrap',
    width: width - 40,
    marginVertical:20,
    paddingBottom:120,
    alignContent: 'flex-end',
    marginHorizontal: 20,
  },
  imgStyle: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  imgContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: Colors.backGray,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '10%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  modaltitle: {
    fontSize: 20,
    color: Colors.textGray,
    fontWeight: 'bold',
    paddingBottom: 20,
  }
});

export default Style;
