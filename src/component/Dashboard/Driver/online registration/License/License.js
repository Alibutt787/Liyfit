import { StyleSheet, Text, View ,SafeAreaView,ScrollView,Image,Dimensions, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import SubHeadericon from '../../../../CustomComponent/SubHeadericon'
import {Button, Input} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
const License = ({navigation}) => {

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

    const [uri, setUri] = useState('');
    const [u, setU] = useState(null);
    const pickPicture = () => {
      const config = {
        cropperStatusBarColor: 'black',
        cropping: true,
        mediaType: 'photo',
        showCropFrame: true,
        showCropGuidelines: true,
      }
      ImagePicker.openPicker({
        cropperStatusBarColor: 'black',
        showCropFrame: true,
        showCropGuidelines: true,
          cropping: true
        }).then(image => {
          setU(image.cropRect)
          setUri(image ?.path)
        }).catch(e=>alert('pakistan'))
    };
  return (
    <SafeAreaView >
<ScrollView>
<View style={styles.container}> 
<SubHeadericon name="arrow-left" des="Driver license" navigation={navigation}/>
<View>
             <View  style={styles.card}>
               <Text style={styles.text}> Driving license Number</Text>
             <Input
        placeholder=" "
        keyboardType="number-pad"
        inputContainerStyle={{borderWidth:2,borderRadius:8,margin:0}}
       
        inputStyle={{paddingLeft:15,margin:0}}
        icon
       />
               </View> 
               <View style={styles.card}>
               <Text style={{textAlign:'center',padding:15,fontSize:20,fontFamily:'serif'}}> 
               The front of driver's license
               </Text>
               <View>
               <Image  source={uri ? {uri} :require('../../../../../assets/license.jpg')} 
               style={{width:'90%',height:290,backgroundColor:'red',borderRadius:10,alignSelf:'center'}} />
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
               <View style={styles.card}>
                 <Text style={styles.text}>
                   Date of expiration
                 </Text>

                <TouchableOpacity  onPress={showDatepicker}>
                <Input
                 disabled
                 placeholder={date.toLocaleDateString()}
        rightIcon={{ type:'font-awesome', name: 'chevron-down' }}
        inputStyle={{paddingLeft:15}}
        inputContainerStyle={{borderWidth:2,borderRadius:8,backgroundColor:'#b2adad'}}
        keyboardType="default"
       
       /> 
                </TouchableOpacity>
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
</View>
</ScrollView>
</SafeAreaView>
  )
}

export default License

const styles = StyleSheet.create({card:{backgroundColor:'white',

margin:15,padding:0,borderRadius:8}
,text:{textAlign:'center',padding:10,fontSize:20,fontFamily:'serif'}

})