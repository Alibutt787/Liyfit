import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,ScrollView,SafeAreaView,TouchableHighlight, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input,Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as yup from 'yup'
import SubHeadericon from '../../../../CustomComponent/SubHeadericon';
const {width, height} =Dimensions.get('window')

const EditProfile = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showDatepicker = () => {
    setShow(true)
  };

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
  function sig() {
   // alert(Password);
  }
  

  return (
    <SafeAreaView >
<View style={styles.container}> 
 
 
<SubHeadericon name="arrow-left" des="Edit Profile" navigation={navigation}/>
  <View  style={styles.loginbox}>       

  {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          maximumDate  ={new Date( date.getFullYear(), date.getMonth()+1, date.getDate())}
         minimumDate ={new Date( date.getFullYear()-18, date.getMonth(), date.getDate()+8)}
       
          dayOfWeekFormat={'{dayofweek.abbreviated(2)}'}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}

<Formik
   validationSchema={createPostSchema}
   initialValues={{ initialPoint: '', finalPoint: '', Description:'' }}
   onSubmit={values => alert(values)}
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
        // onChangeText={handleChange('finalPoint')}
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
    placeholder={date.toLocaleDateString()}
        leftIcon={{ type: 'font-awesome', name: 'calendar' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={value => this.setState({ comment: value })}
        // onChangeText={handleChange('finalPoint')}
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
        // onChangeText={handleChange('finalPoint')}
        onBlur={handleBlur('finalPoint')}
        value={values.finalPoint}
        keyboardType="default"
       />
       <Input
    placeholder={'Home Town'}
        leftIcon={{ type: 'font-awesome', name: 'building-o' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={value => this.setState({ comment: value })}
        // onChangeText={handleChange('finalPoint')}
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






