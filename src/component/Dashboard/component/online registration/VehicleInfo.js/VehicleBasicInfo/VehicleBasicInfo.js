import { StyleSheet, Text, View ,SafeAreaView,ScrollView,Image,Dimensions, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import {Button, Input} from 'react-native-elements';
import SubHeadericon from '../../../../../CustomComponent/SubHeadericon';
const VehicleBasicInfo = ({navigation}) => {
  
  return (
    <SafeAreaView >
<ScrollView>
<View style={styles.container}> 
<SubHeadericon name="arrow-left" des="Vehicle Basic Info" navigation={navigation}/>
<View>
<View  style={styles.card}>
               <Text style={styles.text}> Vehicle name</Text>
             <Input
        placeholder=" "
        keyboardType="number-pad"
        inputContainerStyle={{borderWidth:2,borderRadius:8,margin:0}}
        inputStyle={{paddingLeft:15,margin:0}}
        icon
       />
            
               <Text style={styles.text}> Vehicle Color</Text>
             <Input
        placeholder=" "
        keyboardType="number-pad"
        inputContainerStyle={{borderWidth:2,borderRadius:8,margin:0}}
       
        inputStyle={{paddingLeft:15,margin:0}}
        icon
       />
              
             
               <Text style={styles.text}> Vehicle Model</Text>
             <Input
        placeholder=" "
        keyboardType="number-pad"
        inputContainerStyle={{borderWidth:2,borderRadius:8,margin:0}}
       
        inputStyle={{paddingLeft:15,margin:0}}
        icon
       />
             
               <Text style={styles.text}> Number plate</Text>
             <Input
        placeholder=" "
        keyboardType="number-pad"
        inputContainerStyle={{borderWidth:2,borderRadius:8,margin:0}}
       
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
</View>
</ScrollView>
</SafeAreaView>
  )
}

export default VehicleBasicInfo

const styles = StyleSheet.create({card:{backgroundColor:'white',

margin:15,padding:0,borderRadius:8}
,text:{padding:10,fontSize:20,fontFamily:'serif'}

})