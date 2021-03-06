import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Style from './style';
import ImagesPaths from '../../constants/ImagesPaths';
import Header from '../../components/Header';
import BlockButton from '../../components/BlockButton';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes';
import {IconButton} from 'react-native-paper';
import InputText from '../../components/InputText';
import I18n from '../../i18n';
import Select from '../../components/Dropdown';

const {height, width} = Dimensions.get('window');

const AccountInfoScreen = props => {

  const [firstName, setFirstName] = useState({value: "", IsValid: true, ErrorMsg: ''});
  const [lastName, setLastName] = useState({value: "", IsValid: true, ErrorMsg: ''});
  const [email, setEmail] = useState({value: "", IsValid: true, ErrorMsg: ''});
  const [mobile, setMobile] = useState({value: "", IsValid: true, ErrorMsg: ''});
  const [passowrd, setPassword] = useState({value: "", IsValid: true, ErrorMsg: 'Use upper and lower case letters'});
  const [confirmPassword, setConfirmPassword] = useState({value: "", IsValid: true, ErrorMsg: ''});

  const [years,setYears] = useState([]);
  const [months,setMonths] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  const [days,setDays] = useState([]);


  const [selectedYear, setSelectedYear] = useState(2020);
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedDay, setSelectedDay] = useState(1);
  // const [chosenDate,setChosenDate] = useState({day:0,month:0,year:0})

  useEffect(() => {
    let arr = getAllYears();
    setYears([...arr])
    let dayList = getDaysInMonth(1,arr[0]);
    setDays([...dayList])
  }, [])

  const getAllYears = () => {
    var currentYear = new Date().getFullYear();
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    // console.log(range(currentYear, currentYear - 50, -1)); 
    return range(currentYear, currentYear - 80, -1);
  }

  // date
  var getDaysInMonth = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   let days= new Date(year, month, 0).getDate();
   const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
   return range(1, days , +1);

  };

  const onChangeText = (label, text) => {
    switch (label) {
      case 'firstName': {
        let reg = /^(([A-Za-z]|[\u0621-\u064A])+[,.]?[ ]?|([A-Za-z]|[\u0621-\u064A])+['-]?)+$/; 
        if(reg.test(text) === false) 
        {
            setFirstName({value: text, IsValid: false, ErrorMsg: 'Invalid First Name'})
        }
        else{
            setFirstName({value: text, IsValid: true, ErrorMsg: ''})
        }
        break;
      }
      case 'lastName': {
        let reg = /^(([A-Za-z]|[\u0621-\u064A])+[,.]?[ ]?|([A-Za-z]|[\u0621-\u064A])+['-]?)+$/; 
        if(reg.test(text) === false) 
        {
            setLastName({value: text, IsValid: false, ErrorMsg: 'Invalid Last Name'})
        }
        else{
          setLastName({value: text, IsValid: true, ErrorMsg: ''})
        }
        break;
      }
      case 'email': {
        let reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(reg.test(text) === false) 
        {
            setEmail({value: text, IsValid: false, ErrorMsg: 'Invalid Email'})
        }
        else{
            setEmail({value: text, IsValid: true, ErrorMsg: ''})
        }
        break;
      }
      case 'mobile': {
        let reg =  /^(01\d{9})$/;
        if(reg.test(text) === false) 
        {
            setMobile({value: text, IsValid: false, ErrorMsg: 'Invalid Mobile Number'})
        }
        else{
          setMobile({value: text, IsValid: true, ErrorMsg: ''})
        }
        break;
      }
      case 'password': {
        let reg =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(reg.test(text) === false) 
        {
            setPassword({value: text, IsValid: false, ErrorMsg: 'Please enter a password with minimum eight characters, at least one uppercase letter, one lowercase letter and one number'})
        }
        else{
          setPassword({value: text, IsValid: true, ErrorMsg: ''})
        }
        break;
      }
      case 'confirmPassword': {
        if(passowrd.value != text) 
        {
            setConfirmPassword({value: text, IsValid: false, ErrorMsg: 'password not match'})
        }
        else{
          setConfirmPassword({value: text, IsValid: true, ErrorMsg: ''})
        }

        break;
      }
      default:
        break;
    }
  };

  const setselectedItem = (item, index, label) => {
    switch (label) {
      case "day":
        {
        setSelectedDay(item);
        break;
        }
      case "month":
        {
        setSelectedMonth(item);
        let newList = getDaysInMonth(index+1,selectedYear);
        setDays([...newList])
        setSelectedDay(1);
        break;
        }
      case "year":
        {
        setSelectedYear(item)
        let List = getDaysInMonth(selectedMonth,item);
        setDays([...List])
        setSelectedDay(1);
        break;
        }
      default:
        break;
    }
  }

  return (
    <View style={Style.container}>
      <Header
        style={{height: 70}}
        title="AccountInfo"
        leftIcon="back"
        HandleBack={() => props.navigation.pop()}
      />

      <ScrollView style={Style.socialContainer} >
      

        <View style={Style.form}>
          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('firstName' , e)} value={firstName.value}  errorMsg={firstName.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'FirstName'} style={Style.inputStyle} />
          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('lastName' , e)} value={lastName.value} errorMsg={lastName.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'LastName'} style={Style.inputStyle} />
          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('email' , e)} value={email.value} errorMsg={email.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'Email'} style={Style.inputStyle} />
          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('mobile' , e)} value={mobile.value} errorMsg={mobile.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'Mobile'} style={Style.inputStyle} />
          <Text style={Style.dropdownTitle}>{I18n.t('Dateofbirth')}</Text>
        <View style={{flexDirection: 'row'}}>
          <Select style={{flex: 0.4, marginEnd: 15}} selectedItem={selectedDay} setSelectedItem={(item,index)=> setselectedItem(item,index,"day")}  data={days}>

          </Select>
          <Select style={{flex: 0.4, marginEnd: 15}}  selectedItem={selectedMonth}  setSelectedItem={(item,index)=> setselectedItem(item,index,"month")} data={months}>

          </Select>
          <Select style={{flex: 0.4}} selectedItem={selectedYear}  setSelectedItem={(item,index)=> setselectedItem(item,index,"year")} data={years}>

          </Select>
          </View>

          <TouchableOpacity style={{ width: '100%', marginTop: 50 }} >
                    <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%',height: 50, justifyContent: 'center' }} value='Save'></BlockButton>
          </TouchableOpacity>
         
 
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountInfoScreen;
