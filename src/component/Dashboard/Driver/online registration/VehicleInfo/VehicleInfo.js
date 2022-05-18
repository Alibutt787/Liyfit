import { StyleSheet, Text, View ,SafeAreaView,ScrollView,Image,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SubHeadericon from '../../../../CustomComponent/SubHeadericon'

const VehicleInfo = ({navigation}) => {
  return (<SafeAreaView>
      <ScrollView>
          <View>
          <SubHeadericon name="arrow-left" des="Vehicle Info" navigation={navigation}/>
          
        <View style={styles.card}>
        <TouchableOpacity       onPress={()=>{navigation.navigate('VehicleBasicInfo')}}>
        <View  style={styles.Item}>
       <Text style={styles.size}>Vehical Basic info</Text>
        <Icon name='chevron-right' size={25} color="green"  />
        </View>
        </TouchableOpacity>
      
        <TouchableOpacity       onPress={()=>{navigation.navigate('VehiclePhoto')}}>
        <View  style={styles.Item}>
       <Text style={styles.size}>Photo of Vehicle</Text>
        <Icon name='chevron-right' size={25} color="green"  />
        </View>
        </TouchableOpacity>
      
        <TouchableOpacity       onPress={()=>{navigation.navigate("VehicleCertificate")}}>
        <View  style={styles.ItemLast}>
       <Text style={styles.size}>Certificate of the Vehicle registration</Text>
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
            
         
          </View>
      
      </ScrollView>
  </SafeAreaView>
 
  )
}

export default VehicleInfo

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