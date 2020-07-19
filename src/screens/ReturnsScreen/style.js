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
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'center'
  },
  itemImgStyle:{
    width: '100%',
    height: '100%',
    alignSelf: 'center'
  },
  bodyContent: {
    // flexWrap: 'wrap',
    width: width - 40,
    marginVertical:20,
    paddingBottom: 150,
    alignContent: 'flex-end',
    marginHorizontal: 20,
    marginTop: 40
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
  },
  footerStyle: {
    position: 'absolute',
    backgroundColor: Colors.light,
    width: '100%',
    bottom: 0,
    // height: 100,
    borderTopWidth:2,
    borderColor:Colors.lightgray,
    paddingHorizontal: 20,
    shadowColor: Colors.lightgray,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 5.78,
    
    elevation: 1,
    justifyContent: 'center',
  },
  priceStyle: {
    // textAlignVertical:'center',
    color: Colors.lightblue,
    fontWeight: 'bold',
    //  marginStart: 5,
  }
});

export default Style;
