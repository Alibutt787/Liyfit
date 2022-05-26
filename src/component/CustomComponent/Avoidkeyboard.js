import { StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React from 'react'

const Avoidkeyboard = ({children}) => {
  return (
    <TouchableWithoutFeedback  onPress={()=>Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )
}

export default Avoidkeyboard

const styles = StyleSheet.create({})