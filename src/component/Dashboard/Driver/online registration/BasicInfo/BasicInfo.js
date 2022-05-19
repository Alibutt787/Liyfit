import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,ScrollView,SafeAreaView,TouchableHighlight, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input,Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { Avatar } from 'react-native-elements'
import {Formik} from 'formik';
import * as yup from 'yup'
import SubHeadericon from '../../../../CustomComponent/SubHeadericon';
const {width, height} =Dimensions.get('window')
import {TodoListContext} from '../OnlinegistrationNav'
const BasicInfo = ({navigation}) => {
  const { addTodoItem } = React.useContext(TodoListContext);
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
      image : yup
      .string()
      .required('Email Address is Required'),
        fname: yup
       .string()
       .required('Email Address is Required'),
       lname: yup
       .string()
       .required('Email Address is Required'),
      email : yup
       .string()
       .required('Email Address is Required'),
       date : yup
       .string()
       .required('Email Address is Required'),
   
     
   })
  function sig() {
   // alert(Password);
  }
  const [uri, setUri] = useState(null);
  const pickPicture = () => {
    ImagePicker.openPicker({
      cropperStatusBarColor: 'black',
      cropping: true,
      mediaType: 'photo',
      showCropFrame: true,
      showCropGuidelines: true,
      }).then(image => {
        setUri(image ?.path)
      }).catch(e=>alert('pakistan'))

  };


  return (
    <SafeAreaView >
<ScrollView>
<View style={styles.container}> 
 
 
<SubHeadericon name="arrow-left" des="Basic Info" navigation={navigation}/>
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
   initialValues={{ fname: '', lname: '', email:'',image:'',date:'' }}
   onSubmit={values => alert(values)}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     setFieldValue,
     isSubmitting,
     values,
     errors,
     isValid,
   }) => (
     <>
      <Avatar
              size={64}
              rounded
              source={uri ? {uri} :null}
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={{ backgroundColor: 'green',width:90,height:90,borderRadius:100,alignSelf:'center' }} 
            avatarStyle={{width:90,height:90,borderRadius:90}} >
              <Avatar.Accessory size={23}  
             
              onPress={()=>{
                ImagePicker.openPicker({
                  cropperStatusBarColor: 'black',
                  cropping: true,
                  mediaType: 'photo',
                  showCropFrame: true,
                  showCropGuidelines: true,
                  }).then(image => {
                    setUri(image ?.path)
                    setFieldValue('image',image ?.path );
                  }).catch(e=>alert('No Picture has been choosen'))
               
              }}/>
            </Avatar>
           
       {errors.image &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.image}</Text>}


<Input style={{marginTop:30}}
    leftIcon={{ type: 'font-awesome', name: 'user' }}
    // inputContainerStyle={style.InputContainerStyle}
    leftIconContainerStyle={{color:'grey',marginTop:30}}
    placeholder={"first Name"}
    underlineColorAndroid={'transparent'}
    onChangeText={handleChange('fname')}
    onBlur={handleBlur('fname')}
    value={values.fname}
    keyboardType="default"
  /> 
       {errors.fname &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.fname}</Text>}
    
    <Input
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"Last Name"}
        onChangeText={handleChange('lname')}
        onBlur={handleBlur('lname')}
        value={values.lname}
        keyboardType="default"
       
       />
       {errors.lname &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.lname}</Text>
       }
       <TouchableOpacity 
       
       onPress={showDatepicker}
        >
       <Input
       disabled
    placeholder={date.toLocaleDateString()}
        leftIcon={{ type: 'font-awesome', name: 'calendar' }}
        leftIconContainerStyle={{color:'red'}}
        // setFieldValue('image',image ?.path );
        // onChangeText={value => this.setState({ comment: value })}
        // onChangeText={handleChange('finalPoint')}
        // onBlur={handleBlur('finalPoint')}
     //   value={values.finalPoint}
        keyboardType="default"
       />
       </TouchableOpacity>
       <Input
    placeholder={'Email'}
        leftIcon={{ type: 'Fontisto', name: 'email' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        keyboardType="default"
       />
          {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}
   <Button
                title="Save"
                buttonStyle={{ margin:15, backgroundColor: 'green',height:50, }}
                containerStyle={{         
                //   width: 200,
                //   marginHorizontal: 50,
                //   marginVertical: 10,
                }}
                titleStyle={{ color: 'white' }}
                onPress={handleSubmit} 
                disabled={!isValid || isSubmitting}
                // loading={isSubmitting}
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

export default BasicInfo;
const styles = StyleSheet.create({
    container: {
  
      backgroundColor: '#C4C4C4'
      ,width:width,
      height:height
    
    },
    loginbox:{marginTop:10,padding:15,margin:12,backgroundColor:'white',borderRadius:8},
  
    
   
  });






