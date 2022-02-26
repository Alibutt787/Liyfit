import { StyleSheet, Text, View ,SafeAreaView,ScrollView,Image,Dimensions,Modal,Pressable} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';


const ViewProfilePhoto = ({route,navigation}) => {
  
  const win = Dimensions.get('window')
  console.log('hy',route.params.uri.uri);
  const uri =route.params.uri.uri;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView >
    <ScrollView>
    <View  style={{backgroundColor:'black', width: win.width,
              height: win.height,}}> 
     
     <View style={{flexDirection:'row',backgroundColor:'white'}}>
    <Icon name="arrow-left" size={25} color="black"      onPress={()=>{navigation.goBack()}} style={{paddingTop:20,paddingLeft:15,paddingRight:20}}/>
    <Text style={{padding:15,marginLeft:'0%',marginTop:9,fontSize:22,color:'black'}}>Photo</Text>
    <Icon name="trash" size={25}  color='red'     onPress={()=>{setModalVisible(true)}} style={{position:'absolute',bottom:13,right:18}}/>
   
    </View>

    <View >
    <Image
            style={{

              padding:40,
              marginTop:70,
              width: win.width,
              height: 420,
            //  resizeMode:'stretch',
             alignSelf: "center",
           
             // borderRadius: 20,
            }} 
          source={uri ? {uri} :null}
        /> 
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      ><View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text >Are u sure u want to delete the Profile photo</Text>
       <View style={{flexDirection:'row',marginTop:30}}>
       <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>cancel</Text>
        </Pressable>
    
        <Pressable
          style={[styles.button, styles.buttonClose]}
          // onPress={() => navigation.goBack()} EditProfile
          onPress={() => navigation.goBack()} 
        >
          <Text style={styles.textStyle}>Delete</Text>
        </Pressable>
       </View>
       
      </View>
    </View>
  </Modal>
    </View>
    </View>
    </ScrollView>
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