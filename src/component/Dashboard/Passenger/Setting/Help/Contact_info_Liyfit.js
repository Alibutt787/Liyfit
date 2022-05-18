import { StyleSheet, Text, View,Linking} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'react-native-elements'
import SubHeadericon from '../../../../CustomComponent/SubHeadericon';
const Contact_info_Liyfit= ({navigation}) => {
  return (
    <View>
       <SubHeadericon name="arrow-left" des="Contact Us " navigation={navigation}/>
      <View >
      <View style={styles.card} >
      <View style={{flexDirection:'row',marginBottom:10}}><Avatar  
              size={64}
              rounded
              source={require('../../../../../assets/ic_launcher.png')}
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={{ backgroundColor: 'white',width:70,height:70,borderRadius:100
          ,resizeMode:'contain' }} 
             
            avatarStyle={{width:70,height:70,borderRadius:200,resizeMode:'contain'}} >
            </Avatar>
            <Text style={{alignSelf:'center',fontSize:25,padding:10,color:"black"}}>Ride using Liyfit {'\n'}By Team </Text>
            </View>
           
  <View  style={styles.Item}>
  <Icon name='google' size={25} color="grey"  />
  <View>

 <Text style={{color: 'blue',fontSize:20,fontFamily:'serif',paddingLeft:10,paddingBottom:20}}
      onPress={() => Linking.openURL('https://aqibalibutt.netlify.com')}>
   View Website{'\n'}
 <Text style={{fontSize:10,paddingLeft:10,color:'black'}}>https://Liyfit.com</Text>
</Text>
  </View>
  </View>
      </View>
<View  style={styles.card}>
    <Text>Follow Me to Stay Updated !</Text>
  <View  style={styles.Item}>
  <Icon name='github' size={25} color="grey"  />
  <View>
  <Text style={{fontSize:20,fontFamily:'serif',paddingLeft:10}}
      onPress={() => Linking.openURL('https://github.com/Alibutt787')}>
   Github{'\n'}
 </Text>
  </View>
  </View>
  <View  style={styles.Item}>
  <Icon name='instagram' size={25} color="grey"  />
  <View>
  <Text style={{fontSize:20,fontFamily:'serif',paddingLeft:10}}
      onPress={() => Linking.openURL('https://www.instagram.com/')}>
   Instagram{'\n'}
</Text>
  </View>
  </View>
  <View  style={styles.Item}>
  <Icon name='twitter' size={25} color="grey"  />
  <View>
  <Text style={
    {fontSize:20,fontFamily:'serif',paddingLeft:10}}
      onPress={() => Linking.openURL('https://twitter.com/')}>
   Twitter{'\n'}
</Text>
  </View>
  </View>
 </View>
  </View>
<Text  style={{alignSelf:'center',marginTop:'30%'}}>
  From Liyfit
</Text>
</View>
  )
}

export default Contact_info_Liyfit

const styles = StyleSheet.create({
  card: {
     // height: 250,
    margin:10,paddingBottom:2,
    borderRadius:10,
    padding:20,
    marginVertical: 10,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor:'white',
  },
   Item:{flexDirection:'row',padding:10}
  ,ItemLast:{flexDirection:'row',justifyContent:"space-between",alignItems:'center',padding:20}
  ,size:{fontSize:20,fontFamily:'serif'},
   Link:{color:'green',textDecorationLine:'underline'}
})