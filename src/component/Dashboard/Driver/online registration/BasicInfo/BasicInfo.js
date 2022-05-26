import React,{useState} from 'react';
import { StyleSheet, Text,Alert, View,Dimensions,ScrollView,SafeAreaView,Image ,TouchableOpacity,ActivityIndicator } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input,Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { Avatar } from 'react-native-elements';
import {Formik} from 'formik';
import * as yup from 'yup';
import firestore from '@react-native-firebase/firestore';
const {width, height} =Dimensions.get('window');
import Headericon from '../../../../CustomComponent/Headericon';
import { useSelector} from 'react-redux'; 
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import { signUpValidationSchema } from '../../AttractPeople/Schema';
const BasicInfo = ({navigation}) => {
 
  const Postdata = useSelector((state) => state.userExist);
  const hy= JSON.parse(Postdata.userr)
  const number=hy?.phoneNumber;

  const [date, setDate] = useState(new Date( new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);}
  const showDatepicker = () => {
    setShow(true)};
  const [birthDate, setbirthDate] = useState(new Date( new Date().getFullYear()-18, new Date().getMonth(), new Date().getDate()-2));
  const [showbirth, setShowbirth] = useState(false);
  const showDateofbirth = () => {
    setShowbirth(true)    
  };
  const onChangeDateofbirth = (event, selectedDate) => {
    const currentDate = selectedDate || birthDate;
    setShowbirth(Platform.OS === 'ios');
    setbirthDate(currentDate);
  };
    const createPostSchema = yup.object().shape({
      Bimg : yup
      .string()
      .required('image is Required'),
        yname: yup
       .string()
       .required('your name is Required'),
       fname: yup
       .string()
       .required('S/O is Required'),
      email : yup
       .string()
       .email('invalid email')
       .required('Email Address is Required'),
       date : yup
       .string()
       .required('date of birth is Required'),
       fcnic : yup
       .string()     
       .required('cnic front pic is Required'),
       bcnic : yup
       .string()
       .required('cnic front pic is Required'),
       lic_num : yup
       .string()
       .required('license number is Required'),
       lic_img : yup
       .string()
       .required('license pic is Required'),
       lic_exp : yup
       .string()
       .required('license expiry date is Required'),
       id_conf_img : yup
       .string()
       .required('id confirmation pic is Required'),
       veh_name : yup
       .string()     
       .required('vehical name is Required'),
       veh_color : yup
       .string()
       .required('vehical color is Required'),
       veh_model : yup
       .string()
       .required('vehical model is Required'),
       veh_number_plate : yup
       .string()
       .required('vehical number pic is Required'),
       veh_img : yup
       .string()
       .required('vehical pic is Required'),
       certif_img: yup
       .string()
       .required('fitness certificate is Required'),
       certif_year: yup
       .string()
       .required('transportation year is Required'),
     
   })
  const [uri_1, setUri_1] = useState(null);
  const [uri_2, setUri_2] = useState(null);
  const [uri_3, setUri_3] = useState(null);
  const [uri_4, setUri_4] = useState(null);
  const [uri_5, setUri_5] = useState(null);
  const [uri_6, setUri_6] = useState(null);
  const [uri_7, setUri_7] = useState(null);

  
  const [loading, setloading] = useState(false);
  function sndpic (pros){
    const user = auth().currentUser;
    const url = pros.map(async(e)=>{ await storage().ref(`registerImg/${user?.uid}`).child(e).putFile(e)}) 
      console.log(url);
      }
 
  return (
    <SafeAreaView >
    
<ScrollView>
  <View>
<View  style={styles.container}>  
<Headericon name="arrow-left" des="Online Registration" navigation={navigation}/>
  <View > 
  {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          // maximumDate  ={new Date( date.getFullYear(), date.getMonth()+8, date.getDate())}
         minimumDate ={new Date( date.getFullYear(), date.getMonth(), date.getDate())}
       
          dayOfWeekFormat={'{dayofweek.abbreviated(2)}'}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}

  {showbirth && (
        <DateTimePicker
          testID="dateTimePicker"
          value={birthDate}
           maximumDate  ={new Date( birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()-2)}
        //  minimumDate ={new Date( date.getFullYear(), date.getMonth(), date.getDate()+8)}
       
          dayOfWeekFormat={'{dayofweek.abbreviated(2)}'}
          is24Hour={false}
          display="default"
          onChange={onChangeDateofbirth}
        />
      )}

<Formik
   validationSchema={createPostSchema}
   initialValues={{ yname: '', fname: '', email:'',Bimg:'',date:'',
    fcnic:'', bcnic:'', lic_num:'',lic_img:'', lic_exp:'', id_conf_img:'' ,
    veh_name:'', veh_color:'', veh_model:'',veh_number_plate:'',veh_img:'',certif_img:'',certif_year:''
  }}
  onSubmit={(values,actions )=>{
    actions.resetForm();
    setloading(true)
    const array=[
     values.Bimg,
      values.fcnic,
      values.bcnic,
      values.lic_img,
      values.id_conf_img,
      values.certif_img,
      values.veh_img]

sndpic(array); 

const user = auth().currentUser;
    firestore().collection('Users')
    .doc(user?.uid).collection('RegisterData').doc().set({
      yname: values.yname,
       fname: values.fname,
       email:values.email,
       Bimg:values.Bimg,
       date:values.date,
       fcnic:values.fcnic,
       bcnic:values.bcnic,
       lic_num:values.lic_num,
       lic_img:values.lic_num, 
       lic_exp:values.lic_exp,
       id_conf_img:values.id_conf_img ,
       veh_name:values.veh_name,
       veh_color:values.veh_color,
        veh_model:values.veh_model,
        veh_number_plate:values.veh_number_plate,
        veh_img:values.veh_img,
        certif_img:values.certif_img,
        certif_year:values.certif_year
   }).then(() => {
  setloading(false)

  ,Alert.alert('Save successfully') })


  



         
    }}

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
     {/* Basic info */}
     <View  style={styles.loginbox}>
       <Text>Basic Info</Text>
      <Avatar
              size={64}
              rounded
              source={uri_1 ?{uri:uri_1} :require('../../../../../assets/dr.png')}
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={{ backgroundColor: 'green',width:120,height:120,borderRadius:100,alignSelf:'center' }} 
            avatarStyle={{width:120,height:120,borderRadius:90}} >
              <Avatar.Accessory size={23}  
              onPress={()=>{
                ImagePicker.openPicker({
                  cropperStatusBarColor: 'black',
                  cropping: true,
                  mediaType: 'photo',
                  showCropFrame: true,
                  showCropGuidelines: true,
                  }).then(image => {
                    setUri_1(image ?.path)
                    setFieldValue('Bimg',image ?.path );
                  }).catch(e=>alert('No Picture has been choosen'))
               
              }}/>
            </Avatar>
           
       {errors.Bimg &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.Bimg}</Text>}


<Input style={{marginTop:30}}
    leftIcon={{ type: 'font-awesome', name: 'user' }}
    // inputContainerStyle={style.InputContainerStyle}
    leftIconContainerStyle={{color:'grey',marginTop:30}}
    placeholder={"first Name"}
    underlineColorAndroid={'transparent'}
    onChangeText={handleChange('yname')}
    onBlur={handleBlur('yname')}
    value={values.yname}
    keyboardType="default"
    errorMessage={errors.yname && `${errors.yname}` }

  /> 
       {/* {errors.yname &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.yname}</Text>} */}
    
    <Input
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"Father Name"}
        onChangeText={handleChange('fname')}
        onBlur={handleBlur('fname')}
        value={values.fname}
        keyboardType="default"
        errorMessage={errors.fname && `${errors.fname}` }
       
       />
       {/* {errors.fname &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.fname}</Text>
       } */}

       <TouchableOpacity 
       
       onPress={()=>{showDateofbirth(),setFieldValue('date',date.toLocaleDateString());} }
        >
          <Input 
          disabled
          inputStyle={{color:'black',backgroundColor:'white'}}
        rightIcon={{ type: 'font-awesome', name: 'calendar' }}
        
        placeholder={birthDate.toLocaleDateString()}
      value={birthDate.toLocaleDateString()}
      errorMessage={errors.date && `${errors.date}` }
      />
       {/* {errors.date &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.date}</Text>
       } */}
       </TouchableOpacity>


       <Input
    placeholder={'Email'}
        leftIcon={{ type: 'Fontisto', name: 'email' }}
        leftIconContainerStyle={{color:'red'}}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        keyboardType="default"
        errorMessage={errors.email && `${errors.email}` }

       />
          {/* {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>} */}
   
      
     </View>
{/* CNIC component */}

       <View  style={styles.loginbox}>
       <Text>CNIC</Text>
      
               <Text style={{textAlign:'center',padding:15,fontSize:20,fontFamily:'serif'}}> 
               The front side of your CNIC
               </Text>
               <View>
               <Image 
                source={uri_2?{uri:uri_2}:require('../../../../../assets/fcnicpic.jpg')} 
               style={{width:'80%',height:170,borderRadius:10,alignSelf:'center',resizeMode:'contain'}} />
                     {errors.fcnic &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.fcnic}</Text>
       }
               </View>
               <Button
                title="Add a photo"
                buttonStyle={{alignSelf:'center', marginTop:10,borderColor:'green'
                ,borderWidth:2,backgroundColor:'transparent',width:150, borderRadius:100 }}
                containerStyle={{
                  marginBottom:20,
                    borderRadius:100
                }}
                titleStyle={{ color: 'green',  }}
                onPress={()=>{
                  ImagePicker.openPicker({
                    cropperStatusBarColor: 'black',
                    cropping: true,
                    mediaType: 'photo',
                    showCropFrame: true,
                    showCropGuidelines: true,
                    }).then(image => {
                      setUri_2(image ?.path)
                      setFieldValue('fcnic',image ?.path );
                    }).catch(e=>alert('No Picture has been choosen'))
                 
                }}  />
              
               <Text style={{textAlign:'center',padding:15,fontSize:20,fontFamily:'serif'}}> 
               The back side of your CNIC
               </Text>
               <View>
               <Image  source={uri_3 ? {uri:uri_3} :require('../../../../../assets/bcnicpic.jpg')} 
               style={{width:'80%',height:170,borderRadius:10,alignSelf:'center',resizeMode:'contain'}} />
                     {errors.bcnic &&
         <Text style={{ fontSize: 10, color: 'red' ,textAlign:'center'}}>{errors.bcnic}</Text>
       }
               </View>
               <Button
                title="Add a photo"
                buttonStyle={{alignSelf:'center', marginTop:10,borderColor:'green',borderWidth:2,backgroundColor:'transparent',width:150, borderRadius:100 }}
                containerStyle={{
                  marginBottom:20,
                    borderRadius:100
                }}
                titleStyle={{ color: 'green',  }}
                onPress={()=>{
                  ImagePicker.openPicker({
                    cropperStatusBarColor: 'black',
                    cropping: true,
                    mediaType: 'photo',
                    showCropFrame: true,
                    showCropGuidelines: true,
                    }).then(image => {
                      setUri_3(image ?.path)
                      setFieldValue('bcnic',image ?.path );
                    }).catch(e=>alert('No Picture has been choosen'))
                }}  />
            
       </View>

{/* Driving License component */}


       <View  style={styles.loginbox}>
       <Text style={{marginBottom:15}}>Driving License</Text>
               <Text style={styles.text}>  Number*</Text>
             <Input
        placeholder=" "
        keyboardType="number-pad"
        maxLength={8}
        inputContainerStyle={{borderWidth:2,borderRadius:8,margin:0}}
        inputStyle={{paddingLeft:15,margin:0}}
        onChangeText={handleChange('lic_num')}
        onBlur={handleBlur('lic_num')}
        value={values.lic_num}
        icon
        errorMessage={errors.lic_num && `${errors.lic_num}` }

       />
                 {/* {errors.lic_num &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.lic_num}</Text> } */}
               <Text style={{textAlign:'center',padding:15,fontSize:20,fontFamily:'serif'}}> 
               The front of driver's license
               </Text>
               <View>
               <Image  source={uri_4 ? {uri:uri_4} :require('../../../../../assets/license.jpg')} 
               style={{width:'85%',height:250,backgroundColor:'red',borderRadius:10,alignSelf:'center'}} />
                   {errors.lic_img &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.lic_img}</Text>}
               </View>
               <Button
                title="Add a photo"
                buttonStyle={{alignSelf:'center', marginTop:10,borderColor:'green',borderWidth:2,backgroundColor:'transparent',width:150, borderRadius:100 }}
                containerStyle={{
                  marginBottom:20,
                    borderRadius:100
                }}
                titleStyle={{ color: 'green',  }}
                onPress={()=>{
                  ImagePicker.openPicker({
                    cropperStatusBarColor: 'black',
                    cropping: true,
                    mediaType: 'photo',
                    showCropFrame: true,
                    showCropGuidelines: true,
                    }).then(image => {
                      setUri_4(image ?.path)
                      setFieldValue('lic_img',image ?.path );
                    }).catch(e=>alert('No Picture has been choosen'))
                 
                }} />

                <TouchableOpacity  onPress={()=>{showDatepicker(),setFieldValue('lic_exp',date.toLocaleDateString())}}>
                 <Text style={styles.text}>
                     Date of expiration
                 </Text>
                <Input
                 disabled
                 placeholder={date.toLocaleDateString()}
        rightIcon={{ type:'font-awesome', name: 'calendar' }}
        inputStyle={{paddingLeft:15}}
        inputContainerStyle={{borderWidth:2,borderRadius:8}}
        errorMessage={errors.lic_exp && `${errors.lic_exp}` }
       
       /> 
                </TouchableOpacity>
                {/* {errors.lic_exp &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.lic_exp}</Text>
       } */}
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
        />)}

                 <Text style={styles.text}>Please enter the expiration date of your document</Text>
             



       </View>

{/* ID confirmation */}

       <View  style={styles.loginbox}>
       <Text>ID Confirmation</Text>

       
               <Text style={{textAlign:'center',padding:15,fontSize:20,fontFamily:'serif'}}> 
              ID Confirmation
               </Text>
               <View>
               <Image  source={uri_5 ? {uri:uri_5} :require('../../../../../assets/idconfirmation.jpg')} 
               style={{width:'90%',height:180,borderRadius:10,alignSelf:'center',resizeMode:'contain'}} />
                     {errors.id_conf_img &&
         <Text style={{ fontSize: 10, color: 'red' ,textAlign:'center' }}>{errors.id_conf_img}</Text>
       }
               </View>
               <Button
                title="Add a photo"
                buttonStyle={{alignSelf:'center', marginTop:10,borderColor:'green',borderWidth:2,backgroundColor:'transparent',width:150, borderRadius:100 }}
               
                containerStyle={{
                  marginBottom:20,
                    borderRadius:100
                }}
                titleStyle={{ color: 'green',  }}
                onPress={()=>{
                  ImagePicker.openPicker({
                    cropperStatusBarColor: 'black',
                    cropping: true,
                    mediaType: 'photo',
                    showCropFrame: true,
                    showCropGuidelines: true,
                    }).then(image => {
                      setUri_5(image ?.path)
                      setFieldValue('id_conf_img',image ?.path );
                    }).catch(e=>alert('No Picture has been choosen'))
                 
                }}  />
               <Text style={{textAlign:'center',padding:10,fontSize:15,fontFamily:'serif'}}> 
              Bring the driver's  license in front of you and take a photo as an example.{'\n'}{'\n'}
              This photo should clearly show the face and your driver's license.{'\n'}{'\n'}
              The photo must be taken in good quality.{'\n'}{'\n'}
              photo in glasses are not allowed.
               </Text>
             
       </View>
{/* Vehical Info component */}


       <View  style={styles.loginbox}>
       <Text style={{marginBottom:15}}>Vehical Info</Text>

               <Text style={styles.text}> Vehicle name</Text>
             <Input
        placeholder=" "
        // keyboardType='alphabet'
        inputContainerStyle={{borderWidth:2,borderRadius:8,margin:0}}
        inputStyle={{paddingLeft:15,margin:0}}
        icon
        onChangeText={handleChange('veh_name')}
        onBlur={handleBlur('veh_name')}
        value={values.veh_name}
        errorMessage={errors.veh_name && `${errors.veh_name}` }

       />
       {/* {errors.veh_name &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.veh_name}</Text>} */}
               <Text style={styles.text}> Vehicle Color</Text>
             <Input
        placeholder=" "
        maxLength={9}
        // keyboardType="number-pad"
        inputContainerStyle={{borderWidth:2,borderRadius:8,margin:0}}
       
        inputStyle={{paddingLeft:15,margin:0}}
        icon
        onChangeText={handleChange('veh_color')}
        onBlur={handleBlur('veh_color')}
        value={values.veh_color}
        errorMessage={errors.veh_color && `${errors.veh_color}` }

       />
       {/* {errors.veh_color &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.veh_color}</Text>} */}
              
             
               <Text style={styles.text}> Vehicle Model</Text>
             <Input
        placeholder=" "
        keyboardType="number-pad"
        inputContainerStyle={{borderWidth:2,borderRadius:8,margin:0}}
       maxLength={4}
        inputStyle={{paddingLeft:15,margin:0}}
        icon
        onChangeText={handleChange('veh_model')}
        onBlur={handleBlur('veh_model')}
        value={values.veh_model}
        errorMessage={errors.veh_model && `${errors.veh_model}` }
        
       />
       {/* {errors.veh_model &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.veh_model}</Text>} */}
             
               <Text style={styles.text}> Number plate</Text>
             <Input
        placeholder=" "
        // keyboardType="number-pad"
        maxLength={7}
        inputContainerStyle={{borderWidth:2,borderRadius:8,margin:0}}
       
        inputStyle={{paddingLeft:15,margin:0}}
        icon
        onChangeText={handleChange('veh_number_plate')}
        onBlur={handleBlur('veh_number_plate')}
        value={values.veh_number_plate}
        errorMessage={errors.veh_number_plate && `${errors.veh_number_plate}` }
       />
       {/* {errors.veh_number_plate &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.veh_number_plate}</Text>} */}
             
</View>

{/* Vehical Photo */}
<View style={styles.loginbox}>
               <Text style={{padding:15,fontSize:17}}> 
              Vehicle Photo
               </Text>
               <View>
               <Image  source={uri_6 ? {uri:uri_6} :require('../../../../../assets/UberX.png')} 
               style={{width:'95%',height:180,borderRadius:10,alignSelf:'center',resizeMode:'contain'}} />
               
       {errors.veh_img &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.veh_img}</Text>}
               </View>
               <Button
                title="Add a photo"
                buttonStyle={{alignSelf:'center', marginTop:10,borderColor:'green'
                ,borderWidth:2,backgroundColor:'transparent',width:150, borderRadius:100 }}
                containerStyle={{
                  marginBottom:20,
                    borderRadius:100
                }}
                titleStyle={{ color: 'green',  }}
                onPress={()=>{
                  ImagePicker.openPicker({
                    cropperStatusBarColor: 'black',
                    cropping: true,
                    mediaType: 'photo',
                    showCropFrame: true,
                    showCropGuidelines: true,
                    }).then(image => {
                      setUri_6(image ?.path)
                      setFieldValue('veh_img',image ?.path );
                    }).catch(e=>alert('No Picture has been choosen'))
                 
                }}   />
               </View>

               {/* Certificates */}

<View style={styles.loginbox}>
               <Text style={{padding:15,fontSize:17}}> 
              Certificates
               </Text>
               <Text style={{textAlign:'center',padding:15,fontSize:17,fontFamily:'serif'}}> 
               Vehicle registration (front side)
               </Text>
               <View>
               <Image  source={uri_7 ? {uri:uri_7} :require('../../../../../assets/vehicalregistration.jpg')} 
               style={{width:'85%',height:180,borderRadius:10,alignSelf:'center',resizeMode:'contain'}} />
               {errors.certif_img &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center'  }}>{errors.certif_img}</Text>}
               </View>
               <Button
                title="Add a photo"
                buttonStyle={{alignSelf:'center', marginTop:10,borderColor:'green'
                ,borderWidth:2,backgroundColor:'transparent',width:150, borderRadius:100 }}
                containerStyle={{
                  marginBottom:25,
                    borderRadius:100
                }}
                titleStyle={{ color: 'green',  }}
                onPress={()=>{
                  ImagePicker.openPicker({
                    cropperStatusBarColor: 'black',
                    cropping: true,
                    mediaType: 'photo',
                    showCropFrame: true,
                    showCropGuidelines: true,
                    }).then(image => {
                      setUri_7(image ?.path)
                      setFieldValue('certif_img',image ?.path );
                    }).catch(e=>alert('No Picture has been choosen'))
                 
                }}   />
               <Text style={styles.text}> Transport year</Text>

             <Input
        placeholder=" "
        keyboardType="number-pad"
        maxLength={4}
        inputContainerStyle={{borderWidth:2,borderRadius:8}}
       
        inputStyle={{paddingLeft:10}}
        icon
        onChangeText={handleChange('certif_year')}
        onBlur={handleBlur('certif_year')}
        value={values.certif_year}
        errorMessage={errors.certif_year && `${errors.certif_year}` }
       />
       {/* {errors.certif_year &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.certif_year}</Text>} */}
<View style={{justifyContent:'center',alignItems:'center',marginLeft:25,marginRight:23}}>
         <Text style={{fontSize:12,fontFamily:'serif'}} 
         >By tapping "Save" i agree with 
          <TouchableOpacity  
           onPress={()=>navigation.navigate('DriverTermsConditionPage')}>
         <Text style={styles.Link}>Term and conditions</Text>
         </TouchableOpacity>,
         also I acknowledge and agree with processing and transfer of personal data according to conditions of   
          <TouchableOpacity  
           onPress={()=>navigation.navigate('DriverTermsConditionPage')}>
         <Text style={styles.Link}> Privacy Policy.</Text>
         </TouchableOpacity>
          </Text>
        </View>

               <Button
                title="Save"
                buttonStyle={{ margin:10,marginTop:20, backgroundColor: 'green',height:50, }}
                containerStyle={{         
                //   width: 200,
                //   marginHorizontal: 50,
                //   marginVertical: 10,
                }}
                titleStyle={{ color: 'white' }}
                onPress={handleSubmit} 
                disabled={!isValid || isSubmitting}
                 loading={isSubmitting}
      />   
               </View>
      

     </>
   )}
 </Formik>
            </View>           
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

export default BasicInfo;
const styles = StyleSheet.create({
    container: {
  
      backgroundColor: '#C4C4C4'
      ,width:width,
     
    
    },
    loginbox:{marginTop:10,padding:15,margin:12,backgroundColor:'white',borderRadius:8},
  
    text:{
paddingLeft:12
    },
    Link:{color:'green',textDecorationLine:'underline',fontSize:12
,fontFamily:'serif'
}
   
  });






