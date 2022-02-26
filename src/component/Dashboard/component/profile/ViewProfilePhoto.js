import { StyleSheet, Text, View ,SafeAreaView,ScrollView,Image,Dimensions} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';


const ViewProfilePhoto = ({route,navigation}) => {
  
  const win = Dimensions.get('window')
  console.log('hy',route.params.uri.uri);
  const uri =route.params.uri.uri;
  return (
    <SafeAreaView >
    <ScrollView>
    <View style={{width:win.width,height:win.height}}> 
     
     <View style={{flexDirection:'row',backgroundColor:'grey'}}>
    <Icon name="arrow-left" size={25} color="black"      onPress={()=>{navigation.goBack()}} style={{paddingTop:20,paddingLeft:15,paddingRight:20}}/>
    <Text style={{padding:15,marginLeft:'0%',marginTop:9,fontSize:22,color:'black'}}>Photo</Text>
    </View>
    <View  style={{marginTop:90}}>
    <Image
            style={{
              width: win.width/1,
              height: win.width+50,
              resizeMode: "contain",
              alignSelf: "center",
              borderWidth: 1,
              borderRadius: 20,
            }} 
          source={uri ? {uri} :null}
        /> 
        
    </View>
    <Icon name="trash" size={25}  color='red'     onPress={()=>{navigation.goBack()}} style={{position:'absolute',bottom:0,right:0}}/>
   
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default ViewProfilePhoto

const styles = StyleSheet.create({})