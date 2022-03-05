import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headericon from '../../CustomComponent/Headericon'

const BookedRide = ({navigation}) => {
  return (
    <View>
        
<Headericon name="bars" des="Booked ride" navigation={navigation}/>
      <Text>BookedRide</Text>
    </View>
  )
}

export default BookedRide

const styles = StyleSheet.create({})