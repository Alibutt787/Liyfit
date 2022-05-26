import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,SafeAreaView} from 'react-native'
import { Avatar } from 'react-native-elements';
import SubHeadericon from '../../../CustomComponent/SubHeadericon';
const {width, height} =Dimensions.get('window')

const PassenBookedRideView = ({route,navigation}) => {
  const { pic,name,email,number} = route.params.dataContent;
  // JSON.stringify(data)
  console.log(route);
  const [uri, setUri] = useState(null);

  return (
    <SafeAreaView >

<View style={styles.container}> 
<SubHeadericon name="arrow-left" des="Driver Profile " navigation={navigation}/>

  <View  style={styles.loginbox}> 
  <Avatar
              size={64}
              rounded
              source={{uri:`${pic}`}}
                       icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={{marginBottom:20, backgroundColor: 'green',width:150,height:150,borderRadius:100,alignSelf:'center' }} 
            avatarStyle={{width:150,height:150,borderRadius:90}} ></Avatar>      

            <View>
   
   <Text style={styles.sty}>Driver Name:  <Text style={styles.text}> {name}   </Text>  </Text>
   <Text style={styles.sty}>Email:  <Text style={styles.text}> {email}</Text> </Text>
   <Text style={styles.sty}>Number:  <Text style={styles.text}> {number}  </Text> </Text>



</View>

<Text style={{textAlign:'center',marginTop:60}}>From liyfit</Text>

            </View>                         
          </View>
</SafeAreaView>

  )
}

export default PassenBookedRideView;
const styles = StyleSheet.create({
    container: {
  
      backgroundColor: '#C4C4C4'
      ,width:width,
      height:height
    
    },
    loginbox:{marginTop:30,padding:15,margin:12,backgroundColor:'white',borderRadius:10},
  login:{alignItems:'center',flexDirection:'row',marginTop:20},
  text:{paddingBottom:10,fontSize:15},
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




