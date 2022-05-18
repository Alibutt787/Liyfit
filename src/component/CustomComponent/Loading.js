import { StyleSheet,  View ,ActivityIndicator} from 'react-native';
import React from 'react';
import { height, width } from './Dimensions';

const Loading = () => {
  return (
    
        <View style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          opacity: 0.7,
          backgroundColor:'grey',
          justifyContent: 'center',
          alignItems: 'center',
          width:width,height:height
      }}><ActivityIndicator  color="blue" size="large"/></View>
  )
}

export default Loading

const styles = StyleSheet.create({})