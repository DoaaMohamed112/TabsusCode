import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import StarRating from 'react-native-star-rating';
import {IconButton} from 'react-native-paper';
import ImagesPaths from '../../constants/ImagesPaths';
import CategoryBar from '../../components/CategoryBar';
import MainItem from '../../components/MainItem';
const {height, width} = Dimensions.get('window');

const SizesComponent = props => {
  const [counteries, setContries] = useState([
    {name: 'EG', IsSelected: true},
    {name: 'EU', IsSelected: false},
    {name: 'UK', IsSelected: false},
    {name: 'KSA', IsSelected: false},
    {name: 'US', IsSelected: false},
    {name: 'IT', IsSelected: false},
  ]);

  const [sizes, setSizes] = useState([
    {name: 'S', IsSelected: true},
    {name: 'M', IsSelected: false},
    {name: 'L', IsSelected: false},
    {name: 'XL', IsSelected: false},
    {name: 'XXL', IsSelected: false},
    {name: 'XXXL', IsSelected: false},
  ]);

  const [sizeUnit, setSizeUnit] = useState('cm');

  const [tableData, setTableData] = useState([
    {
      title: 'UK',
      sizes: ['6','8','10','12/14']
    },
    {
      title: 'Size',
      sizes: ['XL','S','M','L']
    },
    {
      title: 'Bust',
      sizes: ['72','72','72','72']
    },
    {
      title: 'Waist Size',
      sizes: ['62','62','62','62']
    },
    {
      title: 'Hip Size',
      sizes: ['75','75','75','75']
    },
    {
      title: 'Length',
      sizes: ['83.5','83.5','83.5','83.5']
    },
  ]);

  const onSelectCountry = item => {
    console.log(item);
    let list = [...counteries];
    let index = counteries.findIndex(i => i == item);
    let index2 = counteries.findIndex(i => i.IsSelected == true);
    list[index2].IsSelected = false;
    list[index].IsSelected = true;
    setContries([...list]);
  };

  const onSelectSize = item => {
    let list = [...sizes];
    let index = sizes.findIndex(i => i == item);
    let index2 = sizes.findIndex(i => i.IsSelected == true);
    list[index2].IsSelected = false;
    list[index].IsSelected = true;
    setSizes([...list]);
  };


  return (
    <View style={Styles.container}>
      {/* title */}
      <Text style={Styles.textStyle}>SELECT SIZES</Text>
      {/* Countries */}
      <View style={Styles.countriesContent}>
        {counteries.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => onSelectCountry(item)}
              style={[
                Styles.itemContainer,
                {
                  backgroundColor: item.IsSelected
                    ? Colors.tabsBackground
                    : Colors.light,
                  color: Colors.dark
                },
              ]}>
              <Text style={Styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* sizes */}
      <View style={Styles.countriesContent}>
        {sizes.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => onSelectSize(item)}
              style={[
                Styles.itemContainer,
                {
                  backgroundColor: item.IsSelected
                    ? Colors.tabsBackground
                    : Colors.light,
                },
              ]}>
              <Text style={Styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* Unit */}
      <View style={Styles.unitContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSizeUnit('cm')} style={[Styles.unitBtn, {backgroundColor: sizeUnit == 'cm' ? Colors.tabsBackground : Colors.light}]} >
          <Text style={Styles.btnText}>CM</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSizeUnit('inch')} style={[Styles.unitBtn, {backgroundColor: sizeUnit == 'inch' ? Colors.tabsBackground : Colors.light}]} >
          <Text style={Styles.btnText}>INCH</Text>
        </TouchableOpacity>
      </View>
      {/* Sizes table */}
      <View style={Styles.table}>
        {tableData.map((item, index) => {
         return (
           <View style={{flexDirection: 'row'}}>
             <Text style={[Styles.tablehead, {borderTopWidth : index != 0 ? 1 : 0}]}>{item.title}</Text>
             <View style={[Styles.row, {borderTopWidth: index != 0  ? 1 : 0}]}>
               {item.sizes.map((data,index) => {
                return (<Text style={Styles.tablecol}>{data}</Text>);
               })}
            </View>
           </View>
         ); 
        })}
      </View>
    </View>
  );
};

export default SizesComponent;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 5,
  },
  countriesContent: {
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    borderColor: Colors.lightgray,
    borderWidth: 1,
    paddingVertical: 9,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 15,
  },
  unitContainer: {
    flexDirection: 'row',
    borderColor: Colors.tabsBackground,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 10
  },
  unitBtn: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  table: {
    borderColor: Colors.tabsBackground,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 10
  },
  row: {
    flexDirection: 'row',
    width: '70%',
    borderColor: Colors.tabsBackground,
  },
  tablehead: {
    borderColor: Colors.tabsBackground,
    borderRightWidth: 1,
    width: '30%',
    textAlign: 'center',
    paddingVertical: 10,
  },
  tablecol: {
    paddingVertical: 10,
    width: '25%',
    textAlign: 'center',
  }
});
