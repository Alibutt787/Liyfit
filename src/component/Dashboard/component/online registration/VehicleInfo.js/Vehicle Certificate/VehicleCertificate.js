import { StyleSheet, Text, View,SafeAreaView,ScrollView,Image } from 'react-native'
import React,{useState} from 'react'
import {Input,Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import SubHeadericon from '../../../../../CustomComponent/SubHeadericon';

const VehicleCertificate= ({navigation}) => {
  const [uri, setUri] = useState('');
  const pickPicture = () => {
    ImagePicker.openPicker({
      cropperStatusBarColor: 'black',
        showCropFrame: true,
        showCropGuidelines: true,
          cropping: true
      }).then(image => {
        console.log(image ?.path);
        setUri(image ?.path)
      }).catch(e=>console.log('pakistan'))
  };


  return (
    <SafeAreaView >
    <ScrollView>
    <View style={styles.container}> 
    <SubHeadericon  name="arrow-left" des=" Vehicle registration" navigation={navigation}/>
    <View style={styles.card}>
               <Text style={{textAlign:'center',padding:15,fontSize:17,fontFamily:'serif'}}> 
               Vehicle registration (front side)
               </Text>
               <View>
               <Image  source={uri ? {uri} :require('../../../../../../assets/license.jpg')} 
               style={{width:'85%',height:250,borderRadius:10,alignSelf:'center',resizeMode:'contain'}} />
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
                onPress={pickPicture}  />
               </View>
               

               <View style={styles.card}>
               <Text style={{textAlign:'center',padding:15,fontSize:17,fontFamily:'serif'}}> 
                Vehicle registration (back side)
                </Text>
               <View>
               <Image  source={uri ? {uri} :require('../../../../../../assets/license.jpg')} 
               style={{width:'85%',height:250,borderRadius:10,alignSelf:'center',resizeMode:'contain'}} />
               </View>
               <Button
                title="Add a photo"
                buttonStyle={{alignSelf:'center', marginTop:10,borderColor:'green',borderWidth:2,backgroundColor:'transparent',width:150, borderRadius:100 }}
                containerStyle={{
                  marginBottom:20,
                    borderRadius:100
                }}
                titleStyle={{ color: 'green',  }}
                onPress={pickPicture}  />
               </View>
               
             <View  style={styles.card}>
               <Text style={styles.text}> Transport year</Text>
             <Input
        placeholder=" "
        keyboardType="number-pad"
        inputContainerStyle={{borderWidth:2,borderRadius:8,margin:10}}
       
        inputStyle={{paddingLeft:15,margin:0}}
        icon
       />
               </View> 
               <Button
                title="Save"
                buttonStyle={{ margin:15, backgroundColor: 'green',height:50, }}
                containerStyle={{
                    
                //   width: 200,
                //   marginHorizontal: 50,
                //   marginVertical: 10,
                }}
                titleStyle={{ color: 'white',  }}
                onPress={() =>{  navigation.goBack()}} 
               // disabled={!isValid || isSubmitting}
                // loading={isSubmitting}
      /> 
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default VehicleCertificate

const styles = StyleSheet.create({
  card:{backgroundColor:'white',

margin:15,padding:0,borderRadius:8}
,text:{textAlign:'center',padding:10,fontSize:20,fontFamily:'serif'}
})