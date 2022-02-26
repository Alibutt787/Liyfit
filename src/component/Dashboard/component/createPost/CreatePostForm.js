import React,{useState,useRef} from 'react'
import { StyleSheet, TextInput,Text, View,Dimensions,ScrollView,SafeAreaView,TouchableHighlight,Button, TouchableOpacity } from 'react-native'
// import DatePicker from 'react-native-modern-datepicker';
import DatePicker,{ getToday, getFormatedDate } from 'react-native-modern-datepicker';
import {Input} from 'react-native-elements';
import {Formik} from 'formik';
import {createPostSchema} from './postLogin/Schema'
import Icon from 'react-native-vector-icons/FontAwesome5';

const {width, height} =Dimensions.get('window')

const CreatePostForm = ({navigation}) => {
  console.log(width,'pakista',height)
  function sig() {
   // alert(Password);
  }
  const [selectedDate, setSelectedDate] = useState('');
  const [time, setTime] = useState('');
  console.log(time);
  const [Opend, setOpend] = useState(false);
  const [OpendTime, setOpendTime] = useState(false);

  console.log('select',selectedDate);
const hy =new Date().getFullYear();
const hy1 =new Date().getMonth();
const hy2 =new Date().getDate();
console.log(`${hy}/${hy1+2}/${hy2}`);


  return (
    <SafeAreaView >


<ScrollView>
<View style={styles.container}> 
 
 <View style={{flexDirection:'row',backgroundColor:"white"}}>
<Icon name="arrow-left" size={25} color="black"   onPress={() => navigation.goBack()} style={{paddingTop:20,paddingLeft:15,paddingRight:20}}/>
<Text style={{padding:15,marginLeft:'0%',marginTop:9,fontSize:22,color:'black'}}>Create Post</Text>
</View>
  <View  style={styles.loginbox}>       

  { Opend?  <DatePicker
      options={{
        backgroundColor: 'white',
        textHeaderColor: 'black',
        textDefaultColor: 'black',
        selectedTextColor: 'black',
        mainColor: '#F4722B',
        textSecondaryColor: 'black',
        borderColor: 'rgba(122, 146, 165, 0.1)',
      }}
      selected={getToday()}
      onDateChange={(e)=>{setOpend(false),setSelectedDate(e)}}
      minimumDate={getToday()}
      maximumDate={`${hy}/${hy1+2}/${hy2}`}
      mode="calendar"
      minuteInterval={30}
      style={{ borderRadius: 10 }}
    />:<></>}

{ OpendTime?
<DatePicker style={{height:60}}
      mode="time"
      minuteInterval={3}
      onTimeChange={(selectedTime) => {setTime(selectedTime),setOpendTime(false)}}
    />:<></>
}
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
        onPress={()=>{setOpend(true)}} >
       <Input
       disabled
    name={selectedDate}
    placeholder={selectedDate?selectedDate:'20yy/mm/dd'}
        leftIcon={{ type: 'font-awesome', name: 'calendar' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={value => this.setState({ comment: value })}
        onChangeText={handleChange('finalPoint')}
        onBlur={handleBlur('finalPoint')}
     //   value={values.finalPoint}
        keyboardType="default"
       />
       </TouchableOpacity>


       <TouchableOpacity 
        onPress={()=>{setOpendTime(true)}} >
       <Input
       disabled
    name={time}
    placeholder={time?time:'When'}
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

export default CreatePostForm;
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






