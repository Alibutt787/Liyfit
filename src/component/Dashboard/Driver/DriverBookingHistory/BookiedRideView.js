import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,SafeAreaView} from 'react-native'
import { Avatar } from 'react-native-elements';
import SubHeadericon from '../../../CustomComponent/SubHeadericon';
const {width, height} =Dimensions.get('window')

const BookedRideView = ({route,navigation}) => {

  const [uri, setUri] = useState(null);
  const { pic,name,email,number} = route.params.dataContent;
  // JSON.stringify(data)
  return (
    <SafeAreaView >

<View style={styles.container}> 
<SubHeadericon name="arrow-left" des="Passenger Profile " navigation={navigation}/>

  <View  style={styles.loginbox}>       
  <Avatar
              size={64}
              rounded
              source={uri ? {uri:uri} :require('../../../../assets/dr.png')}
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={{ backgroundColor: 'white',width:150,height:150,borderRadius:100
              ,alignSelf:'center',resizeMode:'contain' }} 
            avatarStyle={{width:150,height:150,borderRadius:200,resizeMode:'contain'}} >
            </Avatar>

    
<View>
   
    <Text style={styles.sty}>Passenger Name:  <Text style={styles.text}>sarmad ejaz      </Text>  </Text>
    <Text style={styles.sty}>Email:  <Text style={styles.text}>sarmad786@gmail.com         </Text> </Text>
    <Text style={styles.sty}>Number:  <Text style={styles.text}>03314113737  </Text> </Text>



</View>

<Text style={{textAlign:'center',marginTop:60}}>From liyfit</Text>

            </View>                         
          </View>
</SafeAreaView>

  )
}

export default BookedRideView;
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#C4C4C4'
      ,width:width,
      height:height,
     
    },
    loginbox:{marginTop:30,padding:15,margin:12,backgroundColor:'white',borderRadius:10},
  login:{alignItems:'center',flexDirection:'row',marginTop:20},
  text:{padding:10,fontSize:15,flexShrink: 1},
    sty:{flexDirection:'row', textAlign: 'left',
    width: '100%',
   margin:10,
   paddingLeft:15,
   paddingTop:10,
   paddingRight:15,
    borderColor: 'gray',
     borderWidth: StyleSheet.hairlineWidth,
    lineHeight:20,
    borderColor: '#9E9E9E',
    borderRadius: 15,
    height:45,
     textAlignVertical: 'top', alignSelf:'center'
     }
   
  });




