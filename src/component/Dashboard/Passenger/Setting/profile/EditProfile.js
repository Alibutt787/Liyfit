import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,ScrollView,SafeAreaView, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input,Button,Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {Formik} from 'formik';
import * as yup from 'yup'
import SubHeadericon from '../../../../CustomComponent/SubHeadericon';
const {width, height} =Dimensions.get('window')

const EditProfile = ({navigation}) => {
  const [date, setDate] = useState(new Date( new Date().getFullYear()-10, new Date().getMonth(), new Date().getDate()-2));
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
      img : yup
      .string()
      .required('img is Required'), 
      yname: yup
       .string()
       .required('your name is Required'),
       lname: yup
       .string()
       .required('father name is Required'),
      email : yup
       .string()
       .email('invalid email')
       .required('Email  is Required'),
       date : yup
       .string()
       .required('date is Required'),
   
     
   })
  
    const [uri, setUri] = useState(null);


  return (
    <SafeAreaView >
<ScrollView style={styles.container}> 
<SubHeadericon name="arrow-left" des="Edit Profile" navigation={navigation}/>

  <View  style={styles.loginbox}>       
 
  {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          maximumDate  ={new Date( date.getFullYear(), date.getMonth(), date.getDate()-2)}
       
        //   maximumDate  ={new Date( date.getFullYear(), date.getMonth()+1, date.getDate())}
        //  minimumDate ={new Date( date.getFullYear()-18, date.getMonth(), date.getDate()+8)}
       
          dayOfWeekFormat={'{dayofweek.abbreviated(2)}'}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}

<Formik
   validationSchema={createPostSchema}
   initialValues={{ yname: '', lname: '', email:'',date:'' ,img:''}}
   onSubmit={(values) => {console.log(values)}}
 >
   {({
     handleChange,
     handleBlur,
     setFieldValue,
     handleSubmit,
     touched,
     isSubmitting,
     values,
     errors,
     isValid,
   }) => (
     <>
    
    <Avatar
              size={64}
              rounded
              source={uri ?{uri:uri} :require('../../../../../assets/cht.webp')}
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={{ backgroundColor: 'green',width:120,height:120,borderRadius:100,alignSelf:'center' }} 
            avatarStyle={{width:120,height:120,borderRadius:90}} 
            onPress={()=>{navigation.navigate('ViewProfilePhotoScreen',{uri:{uri}})}}
            >



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
                          setFieldValue('img',image ?.path );
                        }).catch(e=>alert('No Picture has been choosen'))
                     
                    }}
              />
            </Avatar>
{errors.img && <Text style={{color:'red',fontSize:10,textAlign:'center'}}>{errors.img}</Text>  }

<Input style={{marginTop:30}}
    leftIcon={{ type: 'font-awesome', name: 'user' }}
    // inputContainerStyle={style.InputContainerStyle}
    leftIconContainerStyle={{color:'grey',marginTop:30}}
    placeholder={"Afaq"}
    underlineColorAndroid={'transparent'}
    onChangeText={handleChange('yname')}
    onBlur={handleBlur('yname')}
    errorMessage={errors.yname && `${errors.yname}`  }
    value={values.yname}
    
    keyboardType="default"
  /> 
       
    <Input
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"sherazi"}
        onChangeText={handleChange('lname')}
        onBlur={handleBlur('lname')}
        // onBlur={()=>{onTouch('lname')}}
        value={values.lname}
        keyboardType="default"
    // onTouch={setFieldTouched}
    errorMessage={errors.lname && `${errors.lname}` }
       />
      
       <TouchableOpacity 
       
       onPress={()=>{showDatepicker(),setFieldValue('date',date)}}
        >
       <Input
        disabled
        // placeholder={date.toLocaleDateString()}
        placeholder={'yy/mm/dd'}
        leftIcon={{ type: 'font-awesome', name: 'calendar' }}
        leftIconContainerStyle={{color:'red'}}
        // onChangeText={handleChange('finalPoint')}
        keyboardType="default"
        errorMessage={errors.date && `${errors.date}`  }
       />
      
       </TouchableOpacity>
       <Input
    placeholder={'dumy@gmail.com'}
        leftIcon={{ type: 'Fontisto', name: 'email' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        keyboardType="default"
        
    errorMessage={errors.email && `${errors.email}` }
       />
      
       <Button
                title="Save"
                buttonStyle={{ margin:10,marginTop:20, backgroundColor: 'green',height:50, }}
                containerStyle={{         
                //   width: 200,
                //   marginHorizontal: 50,
                //   marginVertical: 10,
                }}
                titleStyle={{ color: 'white' }}
              //  disabled={isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)}
                onPress={handleSubmit} 
                // onPress={()=>setloading(true)}
                 disabled={!isValid || isSubmitting}
                // disabled={touched || isSubmitting}
                 loading={isSubmitting}
      /> 


      
     </>
   )}
 </Formik>
 <Text style={{height:400}}></Text>
 
            </View>                         
          </ScrollView>
</SafeAreaView>

  )
}

export default EditProfile;
const styles = StyleSheet.create({
    container: {
  
       backgroundColor: '#C4C4C4',
      height:height+50,
      width:width,
    
    },
    loginbox:{marginTop:10,padding:15,margin:10,backgroundColor:'white',borderRadius:10},
  
    
   
  });






