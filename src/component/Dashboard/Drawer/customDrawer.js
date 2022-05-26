import React,{useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Switch
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {

  // const [isEnabled, setIsEnabled] = useState(false);
  
  const toggleSwitch = () => props.hy[1](previousState => !previousState);
  
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView  
        {...props}
        contentContainerStyle={{backgroundColor: 'black'}}>
          {props.hy[0]? <ImageBackground   
          source={require('../../../assets/dan-gold-kARZuSYMfrA-unsplash.jpg')}
          style={{padding: 25}}>
        <Image  
            source={require('../../../assets/gilles-lambert-pb_lF8VWaPU-unsplash.jpg')}
            style={{height: 80, width: 80, borderRadius: 40,opacity:.8  }}
          />
          <Text 
            style={{
              color: 'white',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
         Driver  </Text>
          {/* <Text style={{position:'absolute',top:50,right:10}}> */}
          {/* <Ionicons name="chevron-forward" color="black" size={35} /> */}
            {/* </Text>  */}
        </ImageBackground> 
          :
        
        <ImageBackground   
          source={require('../../../assets/mariel-rodriguez-lRAOnXGGoN0-unsplash.jpg')}
          style={{padding: 25}}>
        <Image  
            source={require('../../../assets/cht.webp')}
            style={{height: 80, width: 80, borderRadius: 40,opacity:.8 }}
          />
          <Text 
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
              color:'white'
              // ,alignSelf:'flex-end'
            }}>
          Afaq sherazi</Text>
          {/* <Text style={{position:'absolute',top:50,right:10}}> */}
          {/* <Ionicons name="chevron-forward" color="black" size={35} /> */}
            {/* </Text>  */}
        </ImageBackground>}
       
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
          <View style={{paddingLeft:20}}>
        {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={props.hy[0] ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={props.hy[0]}
      /> */}
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={{padding:10, borderTopWidth: 1, borderTopColor: '#ccc'}}>
      <Button
                 title={props.hy[0]?'Driver Mood':'Passenger Mood'}
                buttonStyle={{
                  backgroundColor: 'white',
                  borderWidth: 2,
                  borderColor: 'green',
                  borderRadius: 30,height:60,
                }}
                containerStyle={{
                  alignSelf:'center',
                  width: 230,
                  // marginHorizontal: 50,
                  marginVertical: 0,
                }}
                titleStyle={{ fontWeight: 'bold',color:'green' }}
                onPress={toggleSwitch}/>
      </View>
    </View>
  );
};

export default CustomDrawer;