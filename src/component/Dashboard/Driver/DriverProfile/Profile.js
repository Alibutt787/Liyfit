import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,ScrollView,SafeAreaView,TouchableHighlight, TouchableOpacity } from 'react-native'
import {Input,Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { Avatar,Icon } from 'react-native-elements';
import Headericon from '../../../CustomComponent/Headericon';
const {width, height} =Dimensions.get('window')
import firestore from '@react-native-firebase/firestore';
import { useSelector} from 'react-redux';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {
  const Postdata = useSelector((state) => state.userExist);
  const hy= JSON.parse(Postdata.userr)
  const number=hy?.phoneNumber;
  async function fun(pro){
    
    const user = auth().currentUser;
    const url = await storage().ref(`images/${user?.uid}`).putFile(pro ?.path)
      console.log(url);
      }
const [state,setstate]= useState()

 
  const [uri, setUri] = useState(null);
  const pickPicture = () => {
    ImagePicker.openPicker({
      cropperStatusBarColor: 'black',
      showCropFrame: true,
      showCropGuidelines: true,
      width:800,height:800,
        cropping: true
      }).then(image => {
        setUri(image ?.path);
      
      fun(image)

      }).catch(e=>alert(e))
  };

  return (
    <SafeAreaView >

<View style={styles.container}> 
<Headericon name="arrow-left" des="Driver Profile " navigation={navigation}/>

  <View  style={styles.loginbox}>       
  <Avatar
              size={64}
              rounded
              source={uri ? {uri} :require('../../../../assets/dr.png')}
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={{ backgroundColor: 'white',width:150,height:150,borderRadius:100
              ,alignSelf:'center',resizeMode:'contain' }} 
              onPress={()=>{navigation.navigate('ViewProfilePhotoScreen', {uri:{uri}})}}
            avatarStyle={{width:150,height:150,borderRadius:200,resizeMode:'contain'}} >
              <Avatar.Accessory size={23}   onPress={pickPicture}/>
            </Avatar>
<Input style={{marginTop:30}}
    disabled
    leftIcon={{ type: 'font-awesome', name: 'user' }}
    // inputContainerStyle={style.InputContainerStyle}
    leftIconContainerStyle={{color:'grey',marginTop:30}}
    // placeholder={state?.yname}
    placeholder={'Ali'}
    underlineColorAndroid={'transparent'}
    keyboardType="default"
  /> 
      
    <Input
       disabled
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        leftIconContainerStyle={{color:'red'}}
        // placeholder={state?.fname}
        placeholder={'Iqbal butt'}
        keyboardType="default"
       />
       <Input
       disabled
    // placeholder={state?.date}
    placeholder={'4/5/2004'}
        leftIcon={{ type: 'font-awesome', name: 'calendar' }}
        leftIconContainerStyle={{color:'red'}}
        keyboardType="default"
       />
       <Input
       disabled
    // placeholder={state?.email}
    placeholder={'alibutt78@gmail.com'}
        leftIcon={{ type: 'Fontisto', name: 'email' }}
        leftIconContainerStyle={{color:'black'}}
        keyboardType="default" />
       <View style={{flexDirection:'row',alignItems:'center',marginTop:35}}>
         <Text style={{fontSize:15,paddingLeft:68}}>Verified Account</Text>
     <Icon name={'check-circle'} size={46}color={'green'}/>
     </View>
            </View>                         
          </View>
</SafeAreaView>

  )
}

export default Profile;
const styles = StyleSheet.create({
    container: {
  
      backgroundColor: '#C4C4C4'
      ,width:width,
      height:height
    
    },
    loginbox:{marginTop:10,padding:15,marginBottom:50},
  
    
   
  });




