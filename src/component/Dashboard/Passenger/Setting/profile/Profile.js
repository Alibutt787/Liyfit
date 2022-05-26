import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,ScrollView,SafeAreaView,TouchableHighlight, TouchableOpacity } from 'react-native'
import {Input,Button} from 'react-native-elements';
import { Avatar } from 'react-native-elements'
import SubHeadericon from '../../../../CustomComponent/SubHeadericon';
const {width, height} =Dimensions.get('window')

const Profile = ({navigation}) => {
  const [uri, setUri] = useState('');
  return (
    <SafeAreaView >
<View style={styles.container}> 
<SubHeadericon name="arrow-left" des="Profile Setting" navigation={navigation}/>
  <View  style={styles.loginbox}>       
  <Avatar
              size={64}
              rounded
              source={uri ? {uri:uri} :require('../../../../../assets/cht.webp')}
              // source={require('../../../../../assets/cht.webp')}
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={{ backgroundColor: 'white',width:150,height:150,borderRadius:100
              ,alignSelf:'center',resizeMode:'contain' }} 
              onPress={()=>{navigation.navigate('ViewProfilePhotoScreen', {uri:{uri}})}}
            avatarStyle={{width:150,height:150,borderRadius:200,resizeMode:'contain'}} >
            </Avatar>
<Input style={{marginTop:30}}
    disabled
    leftIcon={{ type: 'font-awesome', name: 'user' }}
    // inputContainerStyle={style.InputContainerStyle}
    leftIconContainerStyle={{color:'grey',marginTop:30}}
    placeholder={"Afaq"}
    underlineColorAndroid={'transparent'}
    keyboardType="default"
  /> 
    <Input
       disabled
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"Sherazi"}
        keyboardType="default"
       /> 
       <Input
       disabled
    placeholder={'yyyy/mm/dd'}
        leftIcon={{ type: 'font-awesome', name: 'calendar' }}
        leftIconContainerStyle={{color:'red'}}
        keyboardType="default"
       />
       <Input
       disabled
    placeholder={'dumy@gmail.com'}
        leftIcon={{ type: 'Fontisto', name: 'email' }}
        leftIconContainerStyle={{color:'red'}}
        keyboardType="default"
       />
    
      <Button
                  title="change"
                  icon={{
                    name: 'mail-forward',
                    type: 'font-awesome',
                    size: 25,
                    color: 'white',
                  }}
                  iconRight
                  buttonStyle={{height:50,width:'100%',marginTop:20 }}
                  containerStyle={{}}
                  titleStyle={{ color: 'white',  }}
                  onPress={() =>{  navigation.navigate('EditProfile')}} 
                 // disabled={!isValid || isSubmitting}
                  // loading={isSubmitting}
        /> 
   
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




