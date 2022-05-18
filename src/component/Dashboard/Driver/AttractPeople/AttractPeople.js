import React,{useState,useRef} from 'react'
import { StyleSheet, TextInput,Text,InputText, View,Dimensions,ScrollView,SafeAreaView,TouchableHighlight,Button, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Field, Formik,useField, useFormikContext} from 'formik';
import {createPostSchema} from './Schema'
import Headericon from '../../../CustomComponent/Headericon';

const {width, height} =Dimensions.get('window')
const AttractPeople = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
const dateMax=new Date();
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
          maximumDate  ={new Date( dateMax.getFullYear(), dateMax.getMonth()+1, dateMax.getDate())}
         minimumDate ={new Date( dateMax.getFullYear(), dateMax.getMonth(), dateMax.getDate())}
          mode={mode}
          dayOfWeekFormat={'{dayofweek.abbreviated(2)}'}
          is24Hour={false}
          display="default"
          onChange={onChange}
          
        />
      )}
<Formik
   validationSchema={createPostSchema}
   initialValues={{ initialPoint: '', finalPoint: '',fare:'',seats:''
   ,date:'',Description:'',vehicle:''
   ,creationDate:new Date().toLocaleDateString(),creationTime:new Date().toLocaleTimeString(),}}
   onSubmit={values =>{console.log(values)}}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     setFieldTouched,
     setFieldValue,
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
        leftIcon={{ type: 'font-awesome', name: 'product-hunt' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"From\nspecify Initial point address"}
       onChangeText={handleChange('finalPoint')}
        onBlur={handleBlur('finalPoint')}
        value={values.finalPoint}
        keyboardType="default"
       />
       {errors.finalPoint &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.finalPoint}</Text>
       }
          <Input
        leftIcon={{ type: 'font-awesome', name: 'dollar' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"fare"}
       onChangeText={handleChange('fare')}
        onBlur={handleBlur('fare')}
        value={values.fare}
        keyboardType="numeric"
       />
       {errors.fare &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.fare}</Text>
       }

<View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10,paddingBottom:20}}>
         <TouchableOpacity   style={{flexDirection:'row',borderBottomColor:'black',borderBottomWidth:1,borderRadius:10,padding:10}}  
         
      
         onPress={showDatepicker}>
         
         <Icon
  name='calendar'
  color='black' size={25} />
 
  <Text style={{padding:5,paddingLeft:5,fontSize:15}}>{`${date.toDateString()}`}</Text>
 
  </TouchableOpacity>
     
       <TouchableOpacity   style={{flexDirection:'row',borderBottomColor:'black',borderBottomWidth:1,borderRadius:10,padding:10}}  onPress={showTimepicker} >
         <Icon
  name='clock'
  color='black' size={25} />
  <Text style={{padding:5,paddingLeft:5,fontSize:15}}>{`${date.toLocaleTimeString()}`}</Text>
         </TouchableOpacity>
       </View>

       <Input
        leftIcon={{ type: 'font-awesome', name: 'car' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"vehicle name"}
       onChangeText={handleChange('vehicle')}
        onBlur={handleBlur('vehicle')}
        value={values.vehicle}
        keyboardType="default"
       />
       {errors.vehicle &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.vehicle}</Text>
       }
       <TouchableOpacity style ={{flex:1, marginTop: 10, marginBottom:10, backgroundColor:null}}
                                                  onPress={showDatepicker}>
              <Input value = {values.date}  inputContainerStyle={{height: '60%'}}
                     onChangeText={handleChange('date')}
                     onBlur={()=>setFieldTouched('date')}
                     label = "Date" labelStyle = {{fontSize: 15}}/>
                       {errors.date &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.date}</Text>
       }
                     </TouchableOpacity>



<Input
        leftIcon={{ type: 'font-awesome', name: 'users' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"number of seats"}
       onChangeText={handleChange('seats')}
        onBlur={handleBlur('seats')}
        value={values.seats}
        keyboardType="default"
       />
       {errors.seats &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.seats}</Text>
       }
      
     <TextInput
         name="Description"
         placeholder="Description"
         style={styles.textInputDes}
         onChangeText={handleChange('Description')}
         onBlur={handleBlur('Description')}
         value={values.Description}
         numberOfLines={15}
         keyboardType="default"
         underlineColorAndroid="transparent"
         placeholderTextColor={"#9E9E9E"}
         multiline={true}
       />
       {errors.Description &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.Description}</Text>
       }
       <Text></Text>
  

<Button
                  title="Public Post"
                  icon={{
                    name: 'edit',
                    type: 'font-awesome',
                    size: 25,
                    color: 'white',
                  }}
                  iconLeft
                  buttonStyle={{height:50,width:'100%' }}
                  containerStyle={{}}
                  titleStyle={{ color: 'white',  }}
                  onPress={handleSubmit}
                  disabled={!isValid }
                  // disabled={!isValid || isSubmitting}
                  //  loading={isSubmitting}
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
  
      backgroundColor: 'white',
    
    }, 
    loginbox:{marginTop:10, backgroundColor:'white',marginLeft:'5%',marginRight:'5%',marginBottom:50,overflow:'hidden'},
 
    textInputDes: {
      textAlign: 'left',
      width: '100%',
     marginTop:20,
     paddingLeft:15,
     paddingRight:15,
      borderColor: 'gray',
       borderWidth: StyleSheet.hairlineWidth,
      lineHeight:20,
      borderColor: '#9E9E9E',
      borderRadius: 15,
      height:200,
       textAlignVertical: 'top',
      overflow:'hidden',
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






