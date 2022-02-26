import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,ScrollView,SafeAreaView,TouchableHighlight, TouchableOpacity } from 'react-native'
// import DatePicker from 'react-native-modern-datepicker';
import DatePicker,{ getToday, getFormatedDate } from 'react-native-modern-datepicker';
import {Input,Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as yup from 'yup'
import SubHeadericon from '../../../CustomComponent/SubHeadericon';
const {width, height} =Dimensions.get('window')

const EditProfile = ({navigation}) => {


    const createPostSchema = yup.object().shape({
        initialPoint: yup
       .string()
       .required('Email Address is Required'),
       finalPoint: yup
       .string()
       .required('Email Address is Required'),
      Description : yup
       .string()
       .required('Email Address is Required'),
   
     
   })
  console.log(width,'pakista',height)
  function sig() {
   // alert(Password);
  }
  
  const [selectedDate, setSelectedDate] = useState('');

  const [Opend, setOpend] = useState(false);

  console.log('select',selectedDate);
const hy =new Date().getFullYear();
const hy1 =new Date().getMonth();
const hy2 =new Date().getDate();
console.log(`${hy}/${hy1+2}/${hy2}`);


  return (
    <SafeAreaView >
<ScrollView>
<View style={styles.container}> 
 
 
<SubHeadericon name="arrow-left" des="Profile Setting" navigation={navigation}/>
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
      onDateChange={(e)=>{setOpend(false),setSelectedDate(e)}}
      minimumDate={getToday()}
      maximumDate={`${hy}/${hy1+2}/${hy2}`}
      mode="calendar"
      minuteInterval={30}
      style={{ borderRadius: 10 }}
    />:<></>}

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
    
<Input style={{marginTop:30}}
    leftIcon={{ type: 'font-awesome', name: 'user' }}
    // inputContainerStyle={style.InputContainerStyle}
    leftIconContainerStyle={{color:'grey',marginTop:30}}
    placeholder={"first Name"}
    underlineColorAndroid={'transparent'}
    onChangeText={handleChange('initialPoint')}
    onBlur={handleBlur('initialPoint')}
    value={values.initialPoint}
    keyboardType="default"
  /> 
       {errors.initialPoint &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.initialPoint}</Text>}
    
    <Input
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={value => this.setState({ comment: value })}
        placeholder={"Last Name"}
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
       <Input
    placeholder={'Email'}
        leftIcon={{ type: 'Fontisto', name: 'email' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={value => this.setState({ comment: value })}
        onChangeText={handleChange('finalPoint')}
        onBlur={handleBlur('finalPoint')}
        value={values.finalPoint}
        keyboardType="default"
       />
       <Input
    placeholder={'Home Town'}
        leftIcon={{ type: 'font-awesome', name: 'building-o' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={value => this.setState({ comment: value })}
        onChangeText={handleChange('finalPoint')}
        onBlur={handleBlur('finalPoint')}
        value={values.finalPoint}
        keyboardType="default"
       />
      
       <Button
                title="Save"
                buttonStyle={{ marginTop:100, backgroundColor: 'green',height:55,width:'100%' }}
                containerStyle={{
                    
                //   width: 200,
                //   marginHorizontal: 50,
                //   marginVertical: 10,
                }}
                titleStyle={{ color: 'white',  }}
                onPress={() =>{  navigation.goBack()}} 
               // disabled={!isValid || isSubmitting}
                loading={isSubmitting}
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

export default EditProfile;
const styles = StyleSheet.create({
    container: {
  
      backgroundColor: '#C4C4C4'
      ,width:width,
      height:height
    
    },
    loginbox:{marginTop:10,padding:15,marginBottom:50},
  
    
   
  });






