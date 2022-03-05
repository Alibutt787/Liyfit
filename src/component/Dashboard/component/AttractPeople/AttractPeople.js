import React,{useState,useRef} from 'react'
import { StyleSheet, TextInput,Text, View,Dimensions,ScrollView,SafeAreaView,TouchableHighlight,Button, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input} from 'react-native-elements';
import {Formik} from 'formik';
import {createPostSchema} from '../createPost/postLogin/Schema'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Headericon from '../../../CustomComponent/Headericon';

const {width, height} =Dimensions.get('window')

const AttractPeople = ({navigation}) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
console.log(date.getDate());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  console.log(width,'pakista',height)
  function sig() {
   // alert(Password);
  }

  

  return (
    <SafeAreaView >


<ScrollView>
<View style={styles.container}> 
 
<Headericon name="bars" des="Attract People" navigation={navigation}/>
  <View  style={styles.loginbox}>       
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          maximumDate  ={new Date( date.getFullYear(), date.getMonth()+1, date.getDate())}
         minimumDate ={new Date( date.getFullYear(), date.getMonth(), date.getDate())}
          mode={mode}
          dayOfWeekFormat={'{dayofweek.abbreviated(2)}'}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
 

<Formik
   validationSchema={createPostSchema}
   initialValues={{ initialPoint: '', finalPoint: '', Description:'' }}
   onSubmit={values => console.log(values)}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     isSubmitting,
     values,
     errors,
     isValid,
   }) => (
     <>
    
<Input
    leftIcon={{ type: 'font-awesome', name: 'adn' }}
    // inputContainerStyle={style.InputContainerStyle}
    leftIconContainerStyle={{color:'grey'}}
    placeholder={"To\nDestination address"}
    underlineColorAndroid={'transparent'}
    onChangeText={handleChange('initialPoint')}
    onBlur={handleBlur('initialPoint')}
    value={values.initialPoint}
    keyboardType="default"
  /> 
       {errors.initialPoint &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.initialPoint}</Text>}
    
    <Input
        leftIcon={{ type: 'font-awesome', name: 'chain' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={value => this.setState({ comment: value })}
        placeholder={"From\nspecify Initial point address"}
        onChangeText={handleChange('finalPoint')}
        onBlur={handleBlur('finalPoint')}
        value={values.finalPoint}
        keyboardType="default"
       
       />
       {errors.finalPoint &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.finalPoint}</Text>
       }
       <TouchableOpacity 
        onPress={showDatepicker}
        >
       <Input
       disabled
    placeholder={`${date.toDateString()}`}
        leftIcon={{ type: 'font-awesome', name: 'calendar' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={value => this.setState({ comment: value })}
        onChangeText={handleChange('finalPoint')}
        onBlur={handleBlur('finalPoint')}
     //   value={values.finalPoint}
        keyboardType="default"
       />
       </TouchableOpacity>


       <TouchableOpacity onPress={showTimepicker}  >
       <Input
       disabled
       placeholder={`${date.toLocaleTimeString()}`}
        leftIcon={{ type: 'font-awesome', name: 'clock-o' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={value => this.setState({ comment: value })}
        onChangeText={handleChange('finalPoint')}
        onBlur={handleBlur('finalPoint')}
        value={values.finalPoint}
        keyboardType="default"
       />
       </TouchableOpacity>
     <TextInput
         name="Description"
         placeholder="Description"
         style={styles.textInputDes}
         onChangeText={handleChange('Description')}
         onBlur={handleBlur('Description')}
         value={values.Description}
         numberOfLines={8}
         keyboardType="default"
       />
       {errors.finalPoint &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.finalPoint}</Text>
       }
       <Text></Text>
       <Button style={{}}
        // onPress={handleSubmit}
         onPress={() =>{  navigation.navigate('PostHome')}} 
       // onPress={onSubmit}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
        title="LOGIN"
         disabled={!isValid}
       />
     </>
   )}
 </Formik>
            </View>                         
          </View>
</ScrollView>
</SafeAreaView>

  )
}

export default AttractPeople;
const styles = StyleSheet.create({
    container: {
  
      backgroundColor: '#C4C4C4',
    
    },
    loginbox:{marginTop:10, backgroundColor:'#C4C4C4',padding:15,marginBottom:50},
    inputStyle: {
      width: '100%',
      borderRadius:10,
      borderColor:'black',
      color:'white',
      backgroundColor:'white',
      fontSize:14,
      padding:8,
      color:'black'
    },
    textInputDes: {
      
      width: '100%',
     marginTop:20,
     paddingLeft:15,
     paddingRight:15,
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
      height:200, textAlignVertical: 'top'
    },
    textInput: {
      height: 50,
      width: '100%',
     marginTop:20,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
   
  
    styleLoginBtn: {
      
     borderRadius:5,
      borderWidth: 2, //button background/border color
      overflow: "hidden",
      color:'red',
      marginBottom: 2,
      marginTop:20
      
    },
   
  });






