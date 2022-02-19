import React from 'react'
import { StyleSheet, Text, View ,Image ,Button, Dimensions,} from 'react-native'

const Sccreen=({navigation }) => {
    const {width, height} =Dimensions.get('window')
    return (
      <View style={{flex:1,backgroundColor:'white',justifyContent:'flex-end'}}>
        <View style={ {...StyleSheet.absoluteFill} }>
       <Image
          style={{ flex: 1,width:null, height:null}}
          source={require('../assets/thibault-penin-a8r2KKLSntA-unsplash.jpg')}
        />
        </View>
  <View style={{height:height/4, justifyContent: 'center' }}>
  <View style={styles.button}>
          <Text style={{ fontSize: 25, color:'#EA0B8C', fontWeight: '800' ,display:'flex' }}
      onPress={() =>
        navigation.navigate('Login', { name: 'Jane' })
      }>
    LOGIN TO LIYFIT
           </Text>
          </View>
          {/* <View style={{ ...styles.button, backgroundColor: '#2E71DC' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              SIGN IN WITH FACEBOOK
            </Text>
          </View> */}
         

  </View>
        </View>
    );
  };

export default Sccreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems:'center',
   justifyContent:'center'
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  }
 });

