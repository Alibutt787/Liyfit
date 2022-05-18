// Get Started screen
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import {Button} from 'react-native-elements';
import SVGImg from '../../../assets/istockphoto-1138578799-170667a (1).svg';
import UseGetstarted from './UseGetstarted';
const GetStarted = ({navigation}) => {
  const {width, height} = Dimensions.get('window'); 
const  [  requestPhonePermission    ]= UseGetstarted();
requestPhonePermission();
  return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <View style={{marginTop: 50}}>
      <Text style={{padding: 20, fontSize: 40}}>Liyfit </Text>
      </View>
      <View style={{height: height / 4}}>
      <SVGImg width={width+20} height={290} />
      </View>
      <View style={{marginTop: 70, fontSize: 30}}>
      <Text style={{fontSize: 30}}>Move with Safety</Text>
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
        onPress={() =>{ navigation.navigate('Number', {name: 'Janee'})}}
      />
    </View>
  );
};

export default GetStarted;

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
