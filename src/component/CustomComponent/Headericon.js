import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
const Headericon = ({name,des,navigation}) => {
    return (
    <View style={{flexDirection:'row',backgroundColor:"white"}}>
<Icon name={name} size={25} color="black"      onPress={()=>{navigation.openDrawer()}} style={{paddingTop:20,paddingLeft:15,paddingRight:20}}/>
<Text style={{padding:15,marginLeft:'0%',marginTop:9,fontSize:22,color:'black'}}>{des}</Text>
</View>
  )
}

export default Headericon

const styles = StyleSheet.create({})