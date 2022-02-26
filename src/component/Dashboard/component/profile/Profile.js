import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,ScrollView,SafeAreaView,TouchableHighlight, TouchableOpacity } from 'react-native'
// import DatePicker from 'react-native-modern-datepicker';
import DatePicker,{ getToday, getFormatedDate } from 'react-native-modern-datepicker';
import {Input,Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as yup from 'yup'
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-crop-picker';
import { Avatar } from 'react-native-elements'
const {width, height} =Dimensions.get('window')

const Profile = ({navigation}) => {


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
  const [uri, setUri] = useState('');
  const pickPicture = () => {
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image ?.path);
        setUri(image ?.path)
      }).catch(e=>console.log('pakistan'))
  };
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
 
 <View style={{flexDirection:'row',backgroundColor:"white"}}>
<Icon name="bars" size={25} color="black"      onPress={()=>{navigation.openDrawer()}} style={{paddingTop:20,paddingLeft:15,paddingRight:20}}/>
<Text style={{padding:15,marginLeft:'0%',marginTop:9,fontSize:22,color:'black'}}>Profile Setting</Text>
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
      onDateChange={(e)=>{setOpend(false),setSelectedDate(e)}}
      minimumDate={getToday()}
      maximumDate={`${hy}/${hy1+2}/${hy2}`}
      mode="calendar"
      minuteInterval={30}
      style={{ borderRadius: 10 }}
    />:<></>}
    <Avatar
            size={64}
            rounded
            source={uri ? {uri} :null}
            title="DA"
            containerStyle={{ backgroundColor: 'grey',width:150,height:150,borderRadius:100,alignSelf:'center' }} 
            onPress={()=>{navigation.navigate('ViewProfilePhotoScreen', {uri:{uri}})}}
          avatarStyle={{width:150,height:150,borderRadius:90}} >
            <Avatar.Accessory size={23}   onPress={pickPicture}/>
          </Avatar>
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
    placeholder={selectedDate?selectedDate:'Date of birth'}
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
                buttonStyle={{ backgroundColor: 'green',height:55,width:'100%' }}
                containerStyle={{
                //   width: 200,
                //   marginHorizontal: 50,
                //   marginVertical: 10,
                }}
                titleStyle={{ color: 'white',  }}
                onPress={() =>{  navigation.navigate('PostHome')}} 
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

export default Profile;
const styles = StyleSheet.create({
    container: {
  
      backgroundColor: '#C4C4C4',
    
    },
    loginbox:{marginTop:10, backgroundColor:'#C4C4C4',padding:15,marginBottom:50},
  
    
   
  });

















