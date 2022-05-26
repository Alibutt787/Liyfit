import { StyleSheet, Text, View,TouchableOpacity,Alert,Share} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iconn from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import Headericon from '../../../CustomComponent/Headericon';
const Setting = ({navigation}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
       title: 'App link',
       message: 'Please install this app and stay safe , AppLink :https://aqibalibutt.netlify.app/', 
       url: 'https://aqibalibutt.netlify.app/'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View >
      
<Headericon name="arrow-left" des="setting" navigation={navigation}/>

  <View >

  <TouchableOpacity  style={styles.Item}  onPress={()=>{navigation.navigate('ProfileNavigation')}}>
  <View  style={styles.ItemDes}>
  <Iconn name='profile' size={25} color="grey"  />
  <View>
  <Text style={styles.size}>  Profile</Text>
 <Text style={{fontSize:10,paddingLeft:10}}>change photo, edit profile</Text>
  </View>
  </View>
  <Icon name='chevron-right' size={25} color="green"  />
  </TouchableOpacity>


 
<TouchableOpacity style={styles.Item}  onPress={()=>{navigation.navigate('AccountSetting')}}>
  <View  style={styles.ItemDes}>
  <Icon name='user-cog' size={25} color="grey"  />
  <View>
  <Text style={styles.size}>  Account</Text>
 <Text style={{fontSize:10,paddingLeft:10}}>change number, Delete account?</Text>
  </View>
  </View>
  <Icon name='chevron-right' size={25} color="green"  />
  </TouchableOpacity>




  <TouchableOpacity  style={styles.Item}     onPress={()=>{navigation.navigate('HelpSetting')}}>
  <View  style={styles.ItemDes}>
  <Icon name='hands-helping' size={25} color="grey"  />
  <View>
  <Text style={styles.size}>  Help</Text>
 <Text style={{fontSize:10,paddingLeft:10}}>contact us, Terms and privacy policy, App info</Text>
  </View>
  </View>
  <Icon name='chevron-right' size={25} color="green"  />
  </TouchableOpacity>


  <TouchableOpacity      onPress={onShare}>
  <View  style={styles.Item}>
 <Text style={styles.size}> 
 <Ionicons name="share-social-outline" size={22} />
 {' '} {' '}Invite a friend
 </Text>
  </View>
  </TouchableOpacity>


  <TouchableOpacity     style={{marginTop:60}}  onPress={()=>Alert.alert(
        "",
        "Are you sure to LogOut?",
        [
        
          {
            text: "Cancel",
            onPress: () =>alert("Cancel Pressed"),
            style: "cancel"
          },
          { text: "confirm", onPress: () => {auth()
          .signOut()
          .then(() => alert('User signed out!'))} }
        ]
      )} >
  <View  style={styles.Item}>
 <Text style={styles.size}  > 
 <Ionicons name="exit-outline" size={22} />
 {' '}{' '}Sign Out
 </Text>
  </View>
  </TouchableOpacity>

 
        
      
 
  </View>
<Text  style={{alignSelf:'center',marginTop:'30%'}}>
  From Liyfit
</Text>
      
   
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  card: {
     // height: 250,
    margin:10,paddingBottom:2,
    borderRadius:10,
    marginVertical: 30,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor:'white'
  },
  Item:{flexDirection:'row',justifyContent:"space-between",alignItems:'center',padding:20},
  ItemDes:{flexDirection:'row'}
  ,ItemLast:{flexDirection:'row',justifyContent:"space-between",alignItems:'center',padding:20}
, size:{fontSize:20,fontFamily:'serif'},
Link:{color:'green',textDecorationLine:'underline'}
})