import { StyleSheet, Text, View ,Dimensions,Image} from 'react-native'
import React from 'react'
import { Button} from 'react-native-elements';
import { ImageSlider } from "react-native-image-slider-banner";
const {width, height} = Dimensions.get('window'); 
const Home = ({navigation}) => {
  return (
    <View>
  <View style={{flexDirection:'row',backgroundColor:'white'}}>
        <Button
                icon={{
                  name: 'bars',
                  type: 'font-awesome',
                  size: 30,
                  color: 'black'}}
                iconLeft
                iconContainerStyle={{ color:'black',  }}
                buttonStyle={{
                backgroundColor: 'white',
                width:70,
                height:55, 
                backgroundColor:'white',
                }}
                containerStyle={{
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                onPress={()=>{navigation.openDrawer()}}
              />
<Text style={{padding:18,marginLeft:'15%',fontSize:20}}>Welcome</Text>
</View>
 
<View style={{width:width,height:height}}>
<ImageSlider 
    data={[
      {img: 'https://images.unsplash.com/photo-1482029255085-35a4a48b7084?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031'}, 
      {img: 'https://images.unsplash.com/photo-1653287606739-087b7e6a0843?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032'},
        {img: 'https://images.unsplash.com/photo-1509815963-90cab26a868f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=573'},
       {img:'https://disrupt-africa.com/wp-content/uploads/2016/12/Gawana.jpg'}  ]}
    autoPlay={true}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
    caroselImageContainerStyle={{height:height-80}}
    caroselImageStyle={{
      resizeMode: 'contain'}}

    
/>
</View>  
</View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.7,
    backgroundColor:'grey',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,height:200


    
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#bed9ff',
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  }
});