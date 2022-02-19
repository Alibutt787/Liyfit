import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";

const {width, height} =Dimensions.get('window')
export default function Front (){
   
	

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: height}}>
		<View style = {stylesheet._First_Screen}>
			<View style = {[stylesheet._Liyfit, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Liyfit, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: -50}],}]}>
				Liyfit
			</Text>
			</View>
            <Image  style = {stylesheet._UberX_1}
          source={require('../assets/UberX.png')}
        />
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_First_Screen: {
		position: "relative",
		width: width,
		height: height,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(249, 122, 30, 0.8999999761581421)",
	},
	_Liyfit: {
		position: "absolute",
		width: 246,
		height: 108,
		left: 57,
		right: "auto",
		top: 180,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "bold",
		textDecorationLine: "none",
		fontSize: 60,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_UberX_1: {
		position: "absolute",
		width: width/2*2+50,
		height: width/2+50,
		borderRadius: 0,
		opacity: 1,
		left: 25,
		right: "auto",
		top: 200,
		bottom: "auto",
		transform: [
			{translateX: -20},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
});







