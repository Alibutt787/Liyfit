import { StyleSheet, Text, View ,SafeAreaView,ScrollView,Image,Dimensions,Alert} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import SubHeadericon from '../../../CustomComponent/SubHeadericon';


const ViewProfilePhoto = ({route,navigation}) => {
  
  const win = Dimensions.get('window')
  const uri =route.params.uri.uri;
  return (
    <SafeAreaView >
    <View  style={{backgroundColor:'black', width: win.width,height: win.height,}}> 
    <SubHeadericon name="arrow-left" des="Driver photo " navigation={navigation}/>
    <View >
    <Image
            style={{

              padding:40,
              marginTop:70,
              width: win.width-20,
              height: 400,
             resizeMode:'stretch',
             alignSelf: "center",
           
             // borderRadius: 20,
            }} 
          source={uri ? {uri} :require('../../../../assets/dr.png')}
        /> 
        

    </View>
    </View>
    </SafeAreaView>
  )
}

export default ViewProfilePhoto

const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})