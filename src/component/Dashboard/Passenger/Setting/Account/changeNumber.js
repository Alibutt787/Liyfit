import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'
import {Button} from 'react-native-elements';
import SubHeadericon from '../../../../CustomComponent/SubHeadericon';
const Account = ({navigation}) => {
    const [number,setnumber]=useState('');
  return (
    <View>
        <SubHeadericon name="arrow-left" des="Change Number " navigation={navigation}/>

       <View style={{justifyContent:'center',alignItems:'center' , marginTop:50}}>

<Text style={{alignSelf:'flex-start',paddingLeft:30}}>Current Number +92331-4113737</Text>

        <View
                  style={{
                    
                    flexDirection: 'row',
                    width: 300,
                    marginTop:35,
                    backgroundColor: 'white',
                    borderBottomColor: '#C4C4C4',
               
               
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      padding: 4,
                      fontWeight: 'bold',
                      textAlignVertical: 'center',
                    }}>
                    +92
                  </Text>
                  <TextInput
                    style={{
                      width: 200,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                    keyboardType="numeric"
                    placeholder="New Number"
                    autoFocus={true}
                   value={number}
                    onChangeText={(e)=>setnumber(e)}
                    maxLength={10}
                  />
                </View>
       <Button
                title="Change my number"
                 disabled={number.length===10 ? false : true}
                buttonStyle={{backgroundColor: 'black',  height:50}}
                containerStyle={{
                  marginTop: 30,
               
                  width: 310,
             }}
                titleStyle={{color: 'white', marginHorizontal: 20}}
                onPress={()=>  {setnumber('')
                       navigation.navigate('Confirm', {number: number,confirm: 'object',where:'ChangeNumber',})}
                    
                    } 
                
                
                />

    
</View>

    </View>
  )
}

export default Account

const styles = StyleSheet.create({

})