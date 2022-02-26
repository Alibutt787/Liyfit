import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button} from 'react-native-elements';

const Home = ({navigation}) => {
  return (
    <View>
  <View style={{flexDirection:'row',backgroundColor:'white'}}>
        <Button
                icon={{
                  name: 'bars',
                  type: 'font-awesome',
                  size: 30,
                  color: 'black'}}
                iconLeft
                iconContainerStyle={{ color:'black',  }}
                buttonStyle={{
                backgroundColor: 'white',
                width:70,
                height:55, 
                backgroundColor:'white',
               
               
                }}
                containerStyle={{
             
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                onPress={()=>{navigation.openDrawer()}}
              />
             

<Text style={{padding:18,marginLeft:'15%',fontSize:20}}>Welcome</Text>
</View>
    <View style={styles.container}>
    <Text style={styles.title}>Travel only if necessary</Text>
    <Text style={styles.text}>
      Upgrading this package often requires the font files linked to your projects to be updated as well. If the automatic linking works for you, running this again should update the fonts.
    </Text>
    <Text style={styles.learnMore}>Learn more</Text>
  </View>
  <Text style={{textAlign:'center',marginTop:50}}>Welcome to LiyFit Dashboard</Text>
  

<View style={{padding:20}}>
<Button   
           color="#F88533"
           title="Explore the Ride "
           onPress={()=>{navigation.openDrawer()}}
          /> 

</View>

  
  </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1065e9',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#bed9ff',
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  }
});