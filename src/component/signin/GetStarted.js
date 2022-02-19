import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity,TouchableHighlight } from 'react-native';
import { Button} from 'react-native-elements';
const GetStarted = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  return (
    <View   style={{flex:1,alignItems:'center',backgroundColor:'white'}}>
      <View style={{marginTop:10,}}>
      <Text style={{padding:40,fontSize:30}}>Liyfit</Text>
      </View>
      <View style={{height:height/4}}>
        <Image
          style={{ width: width-30, height:197 }}
          source={require('../../assets/getstarted.jpg')}
        />
      </View>
      <View style={{marginTop:50,fontSize:30}} >
          <Text style={{fontSize:35,}}>
            Move with Safety
          </Text></View>
<Button
                title="Get Started"
                icon={{
                  name: 'arrow-right',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
             
                 
                }}
                iconRight
                iconContainerStyle={{   }}
                titleStyle={{ width:250,
                }}
                buttonStyle={{
                  backgroundColor: 'black',
              justifyContent:'space-between',
              height:50
               
                }}
                containerStyle={{
                  position:'absolute',
                  bottom:30,
                 width:300,
                  flex:1,
                 justifyContent:'center',
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                onPress={() => navigation.navigate('Number', { name: 'Janee' })}
              />


    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
 
  button: {
    flex:1,
    flexDirection:'row',
    position:'absolute',
    bottom:20,
    backgroundColor: 'black',
    height: 45,
    width: 300,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },
});
