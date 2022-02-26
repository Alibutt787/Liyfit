import React,{useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Share,Switch
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = (props) => {

  // const [isEnabled, setIsEnabled] = useState(false);
  
  const toggleSwitch = () => props.hy[1](previousState => !previousState);
    const onShare = async () => {
        try {
          const result = await Share.share({
           title: 'App link',
      message: 'Please install this app and stay safe , AppLink :https://aqibalibutt.netlify.app/', 
      url: 'https://aqibalibutt.netlify.app/'
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'black'}}>
        {/* <ImageBackground
          source={require('../../assets/Liyfit.png')}
          style={{padding: 20}}> */}
          <Image
            source={require('../../../assets/Liyfit.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10,marginLeft:100,marginTop:40}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,marginLeft:100,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
          Ali Butt
          </Text>
          <View style={{flexDirection: 'row'}}>
            {/* <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              280 Coins
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" /> */}
          </View>
        {/* </ImageBackground> */}
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
          <View>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={props.hy[0] ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={props.hy[0]}
      />
          </View>
        </View>
      </DrawerContentScrollView>
   
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        {/* <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }} onPress={onShare} 
              >
              Tell a Friendd
            </Text>
          </View>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity> */}
<Button
                 title={props.hy[0]?'Driver Mood':'Passenger Mood'}
                buttonStyle={{
                  backgroundColor: 'white',
                  borderWidth: 2,
                  borderColor: 'green',
                  borderRadius: 30,height:60,
                }}
                containerStyle={{
                  
                  width: 250,
                  // marginHorizontal: 50,
                  marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold',color:'green' }}
                onPress={toggleSwitch}
            />
      </View>
    </View>
  );
};

export default CustomDrawer;