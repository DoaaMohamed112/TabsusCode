import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Picker } from 'react-native';
import Colors from '../constants/Colors';
import I18n from '../i18n'
const Styles = StyleSheet.create({

  InputText: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#f0f0f0',
    shadowOffset: { width: 0, height: 1 },

    borderRadius: 5,
    width: '80%',
    // marginTop: 10,
    height: 50,
    borderWidth:1,
    borderColor: Colors.textGray,
    
  },
  InputPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#f0f0f0',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    width: '80%',
    marginTop: 30,
    height: 40,
    borderColor: 'transparent',
    fontFamily: 'barmeno-regular',
  },
  SuccessInput: {
    borderColor: Colors.greenSuccess,
    borderBottomWidth: 1
  },
  ErrorInput: {
    borderColor: Colors.error,
    borderBottomWidth: 1
  },
  icon: {
    height: 25,
    width: 25,
    marginHorizontal: 5
  },
  pickerColor:{
    color: Colors.placeholder
  },
  title: {
    color: Colors.textGray,
    fontSize: 15,
    marginBottom: 10
  }
});

/* props needed
 inputType : TextInput, else picker
if inputType = TextInput
  IsValid = success, error
  style
  Icon = path of image
   placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.HandleChange}
          secureTextEntry={props.secureTextEntry}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
else inputType is picker
data
selectedValue={props.value}
onValueChange={props.handleChange}>

*/
const InputText = props => {
  let pickerItems;
  if (props.data != undefined)
    pickerItems = props.data.map((s, i) => {
      return <Picker.Item color={i != 0 ? Colors.darkgray : Colors.fontLightGray} key={i} value={s} label={s} />
    });
// console.log(i18n.locale)
  return (
    props.inputType == 'TextInput' ?
    <View>
      { props.title && <Text style={[Styles.title ,props.TextStyle]}>{I18n.t(props.title)}</Text>}

     <View style={[Styles.InputText, props.style, props.Isvalid === 'success' ? Styles.SuccessInput : (props.Isvalid === 'error') ? Styles.ErrorInput : null]}>
      { props.Icon ? <Image source={props.Icon} style={Styles.icon} /> : null}
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.HandleChange}
          secureTextEntry={props.secureTextEntry}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
          style={[ {width: '100%',height:'100%',textAlignVertical:'top'}]}
        /> 
        </View>
      { props.errorMsg != '' ? <Text style={props.errorStyle}>{props.errorMsg}</Text> : null}
    </View>

         :  
      <View style={[Styles.InputPicker, props.style, props.Isvalid === 'success' ? Styles.SuccessInput : (props.Isvalid === 'error') ? Styles.ErrorInput : null]}>
      { props.Icon ? <Image source={props.Icon} style={Styles.icon} /> : null}
          <Picker
            selectedValue={props.value}
            style={{...Styles.pickerColor,...{width: props.Icon ? '85%' : '110%',color: props.value == 'City' || props.value== 'Region' ? Colors.fontLightGray : Colors.fontMidiumLightGray} }}
            mode='dropdown'
            onValueChange={props.handleChange} >
            {pickerItems}
            
          </Picker>
    </View>
  );
};

export default InputText;

