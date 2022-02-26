// Get Started screen
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';
const Message = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      {/* Name of the app */}
      <View style={{marginTop: 10}}>
        <Text style={{padding: 40, fontSize: 30}}>Liyfit</Text>
      </View>
      {/* Picture of the app  */}
    
      <View style={{marginTop: 50, fontSize: 30}}>
        <Text style={{fontSize: 35}}>Move with Safety</Text>
      </View>
      {/* button of next screen  */}
      <Button
        title="Get Started"
        icon={{
          name: 'arrow-right',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        iconRight
        iconContainerStyle={{}}
        titleStyle={{width: 250}}
        buttonStyle={{
          backgroundColor: 'black',
          justifyContent: 'space-between',
          height: 50,
        }}
        containerStyle={{
          position: 'absolute',
          bottom: 30,
          width: 300,
          flex: 1,
          justifyContent: 'center',
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate('Number', {name: 'Janee'})}
      />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'black',
    height: 45,
    width: 300,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
