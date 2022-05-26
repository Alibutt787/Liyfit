import React,{useState} from 'react';
import { StyleSheet, TextInput,Text,
View,Dimensions,ScrollView,SafeAreaView, TouchableOpacity,ActivityIndicator,Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input,Button} from 'react-native-elements';
import {Formik} from 'formik';
import {createPostSchema} from './Schema';
import Headericon from '../../../CustomComponent/Headericon';
import firestore from '@react-native-firebase/firestore';
const {width, height} =Dimensions.get('window');
import { useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
const AttractPeople = ({navigation}) => {
  const user = auth().currentUser;
 
  const Postdata = useSelector((state) => state.userExist);
  const hy= JSON.parse(Postdata.userr)
  const mobileNumber=hy?.phoneNumber;
  const dbRef = firestore().collection(mobileNumber).doc('createPost');
  const dbR = firestore().collection(mobileNumber).doc('createPostt');

const [date, setDate] = useState(new Date());
const [show, setShow] = useState(false);
const dateMax=new Date();
const onChangedate = (event, selectedDate) => {
const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);};
  const showdate = () => {
    setShow(true);};
  const [time, settime] = useState(new Date());
  const [showclock, setShowclock] = useState(false);
  const onChangetime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowclock(Platform.OS === 'ios');
    settime(currentDate);};
  const showtime = () => {
    setShowclock(true);
  };
  const [loading, setloading] = useState(false);
  return (
<SafeAreaView >
<ScrollView>
<View style={styles.container}> 
<Headericon name="arrow-left" des="Attract People" navigation={navigation}/>
<View  style={styles.loginbox}>       
<Formik
   validationSchema={createPostSchema}
   initialValues={{ initialPoint: '', finalPoint: '',fare:'',seats:''
   ,date:'',time:'',Description:'',vehicle:''
   ,creationDate:new Date().toLocaleDateString(),creationTime:new Date().toLocaleTimeString(),}}
   onSubmit={(values,actions )=>{
    actions.resetForm();
    setloading(true)
    firestore().collection('Users')
    .doc(user?.uid).collection('post').doc().set({
      initialPoint:values.initialPoint,
       finalPoint:values.finalPoint,
       fare:values.fare,
      seats:values.seats
      ,date:values.date,
      time:values.time,
      Description:values.Description,
      vehicle:values.vehicle
      ,creationDate:values.creationDate,
      creationTime:values.creationTime,
   }).then(() => {
  setloading(false)

  ,Alert.alert('Save successfully') })


      }}>
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
    placeholder={"Starting place"}
    underlineColorAndroid={'transparent'}
    onChangeText={handleChange('initialPoint')}
    onBlur={handleBlur('initialPoint')}
    value={values.initialPoint}
    keyboardType="default"
    errorMessage={errors.initialPoint && `${errors.initialPoint}` }
  /> 
       {/* {errors.initialPoint &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.initialPoint}</Text>} */}
<Input
        leftIcon={{ type: 'font-awesome', name: 'product-hunt' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"final place"}
       onChangeText={handleChange('finalPoint')}
        onBlur={handleBlur('finalPoint')}
        value={values.finalPoint}
        keyboardType="default"
        errorMessage={errors.finalPoint && `${errors.finalPoint}` }
       />
       {/* {errors.finalPoint &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.finalPoint}</Text>
       } */}
          <Input
        leftIcon={{ type: 'font-awesome', name: 'dollar' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"fare"}
       onChangeText={handleChange('fare')}
        onBlur={handleBlur('fare')}
        value={values.fare}
        keyboardType="numeric"
        errorMessage={errors.fare && `${errors.fare}` }
       />
       {/* {errors.fare &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.fare}</Text>
       } */}

{show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          maximumDate  ={new Date( dateMax.getFullYear(), dateMax.getMonth()+1, dateMax.getDate())}
         minimumDate ={new Date( dateMax.getFullYear(), dateMax.getMonth(), dateMax.getDate())}
          mode='date'
          dayOfWeekFormat={'{dayofweek.abbreviated(2)}'}
          is24Hour={false}
          display="default"
          onChange={onChangedate}
          
        />
      )}

<TouchableOpacity 
       
       onPress={()=>{showdate(),setFieldValue('date',date.toLocaleDateString());} }
        >
          <Input 
          disabled
          inputStyle={{color:'black'}}
        rightIcon={{ type: 'font-awesome', name: 'calendar' }}
        placeholder={date.toLocaleDateString()}
        value={date.toLocaleDateString()}
        onChangeText={handleChange('date')}
        onBlur={handleBlur('date')}
         errorMessage={errors.date && `${errors.date}` }
      />
       {/* {errors.date &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.date}</Text>
       } */}
       </TouchableOpacity>
 
  
  
  {showclock && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          maximumDate  ={new Date( dateMax.getFullYear(), dateMax.getMonth()+1, dateMax.getDate())}
         minimumDate ={new Date( dateMax.getFullYear(), dateMax.getMonth(), dateMax.getDate())}
          mode='time'
          dayOfWeekFormat={'{dayofweek.abbreviated(2)}'}
          is24Hour={false}
          display="default"
          onChange={onChangetime}
          
        />
      )}

<TouchableOpacity 
       
       onPress={()=>{showtime(),setFieldValue('time',time.toLocaleTimeString());} }
        >
          <Input 
          disabled
          inputStyle={{color:'black',backgroundColor:'white'}}
        rightIcon={{ type: 'font-awesome', name: 'clock-o' }}
        placeholder={time.toLocaleTimeString()}
        value={time.toLocaleTimeString()}
        onChangeText={handleChange('time')}
        onBlur={handleBlur('time')}
        errorMessage={errors.time && `${errors.time}` }
      />
       {/* {errors.time &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.time}</Text>
       } */}
       </TouchableOpacity>
 
       <Input
        leftIcon={{ type: 'font-awesome', name: 'car' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"vehicle name"}
       onChangeText={handleChange('vehicle')}
        onBlur={handleBlur('vehicle')}
        value={values.vehicle}
        keyboardType="default"
        errorMessage={errors.vehicle && `${errors.vehicle}` }
       />
       {/* {errors.vehicle &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.vehicle}</Text>
       } */}
  



<Input
        leftIcon={{ type: 'font-awesome', name: 'users' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"number of seats"}
       onChangeText={handleChange('seats')}
        onBlur={handleBlur('seats')}
        value={values.seats}
        keyboardType="numeric"
        errorMessage={errors.seats && `${errors.seats}` }
       />
       {/* {errors.seats &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.seats}</Text>
       } */}
      
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
         errorMessage={errors.Description && `${errors.Description}` }
       />
       {errors.Description &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.Description}</Text>
       }
       <Text></Text>
  

<Button
                  title="Public Post"
                  icon={{
                    name: 'firefox',
                    type: 'font-awesome',
                    size: 25,
                    color: 'white',
                  }}
                  iconLeft
                  buttonStyle={{height:50,width:'100%' ,backgroundColor:'green'}}
                  containerStyle={{}}
                  titleStyle={{ color: 'white',  }}
                  onPress={handleSubmit}
                  // disabled={!isValid }
                  disabled={!isValid || isSubmitting}
                  //  loading={isSubmitting}
        /> 




        
     </>
   )}
 </Formik>
 


            </View>                         
          </View>
</ScrollView>
{loading?  <View style={{ position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          opacity: 0.7,
          backgroundColor:'grey',
          justifyContent: 'center',
          alignItems: 'center',
          width:width,height:height}}>
            <ActivityIndicator  color="blue" size="large"/>
            </View>:<></>}
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






