import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import SubHeadericon from '../../../../CustomComponent/SubHeadericon';

const Account = ({navigation}) => {
  return (
    <View>
        <SubHeadericon name="arrow-left" des="Account " navigation={navigation}/>
        <TouchableOpacity       onPress={()=>{navigation.navigate('ChangeNumber')}}>
  <View  style={styles.Item}>
 <Text style={styles.size}> <Icon name='mobile' size={25} color="grey"  />  Change Number</Text>
  <Icon name='chevron-right' size={25} color="green"  />
  </View>
  </TouchableOpacity>
  <TouchableOpacity       onPress={()=>Alert.alert(
        "Delete Account",
        "Press Yes to send request to delete account ?",
        [
        
          {
            text: "Cancel",
            onPress: () => alert("Cancel Pressed"),
            style: "cancel"
          },
          { text: "yes", onPress: () =>Alert.alert("\n Request Send successfully", " The admin let u soon!"
          
          ) }
        ]
      )} >
  <View  style={styles.Item}>
 <Text style={styles.size}> <Icon name='trash' size={25} color="red"  />  Request to Delete Account</Text>
 
  </View>
  </TouchableOpacity>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({

  Item:{flexDirection:'row',justifyContent:"space-between",alignItems:'center',padding:20}
 , size:{fontSize:18,fontFamily:'serif'},
})