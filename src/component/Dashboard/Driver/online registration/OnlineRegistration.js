import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import Headericon from '../../../CustomComponent/Headericon'
import {Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
const OnlineRegistration = ({navigation}) => {
  return (
    <View>
      
<Headericon name="bars" des="Driver Registration" navigation={navigation}/>
  <View style={styles.card}>
  <TouchableOpacity       onPress={()=>{navigation.navigate('BasicInfo')}}>
  <View  style={styles.Item}>
 <Text style={styles.size}>Basic Info</Text>
  <Icon name='chevron-right' size={25} color="green"  />
  </View>
  </TouchableOpacity>

  <TouchableOpacity      onPress={()=>{navigation.navigate('License')}}>
  <View  style={styles.Item}>
 <Text style={styles.size}>Driver License</Text>
  <Icon name='chevron-right' size={25} color="green"  />
  </View>
  </TouchableOpacity>

  <TouchableOpacity       onPress={()=>{navigation.navigate('Idconfirm')}}>
  <View  style={styles.Item}>
 <Text style={styles.size}>ID Confirmation</Text>
  <Icon name='chevron-right' size={25} color="green"  />
  </View>
  </TouchableOpacity>

  <TouchableOpacity       onPress={()=>{navigation.navigate('Cnic')}}>
  <View  style={styles.Item}>
 <Text style={styles.size}>CNIC</Text>
  <Icon name='chevron-right' size={25} color="green"  />
  </View>
  </TouchableOpacity>

  <TouchableOpacity       onPress={()=>{navigation.navigate('VehicleNav')}}>
  <View  style={styles.ItemLast}>
 <Text style={styles.size}>Vehicle Info</Text>
  <Icon name='chevron-right' size={25} color="green"  />
  </View>
  </TouchableOpacity>
  </View>
  <Button
  disabled
                  title="Done"
                  buttonStyle={{height:60,width:'100%',borderRadius:200,backgroundColor:'green' }}
                  containerStyle={{    margin:10,paddingBottom:2,}}
                  titleStyle={{ color: 'white',  }}
                  onPress={() =>{  navigation.navigate('EditProfile')}} 
                 // disabled={!isValid || isSubmitting}
                  // loading={isSubmitting}
        /> 
        <View style={{justifyContent:'center',alignItems:'center',marginLeft:25,marginRight:23}}>
          <Text style={{fontSize:12,fontFamily:'serif'}}>By tapping "submit" Iagree with <Text style={styles.Link}>Term and conditions</Text>, I acknowledge and agree with processing and transfer of personal data according to conditions of 
          <Text style={styles.Link}> Privacy Policy,</Text>
          </Text>
        </View>
   
    </View>
  )
}

export default OnlineRegistration

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
  Item:{flexDirection:'row',justifyContent:"space-between",alignItems:'center',borderBottomColor:'grey',borderBottomWidth:2,padding:20}
  ,ItemLast:{flexDirection:'row',justifyContent:"space-between",alignItems:'center',padding:20}
, size:{fontSize:20,fontFamily:'serif'},
Link:{color:'green',textDecorationLine:'underline'}
})