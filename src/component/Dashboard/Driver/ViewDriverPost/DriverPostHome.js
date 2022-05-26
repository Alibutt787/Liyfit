import React,{useState,useCallback, useEffect} from 'react';
import { StyleSheet,Button, Text, View, Animated,SafeAreaView,TouchableOpacity,Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import Headericon from '../../../CustomComponent/Headericon'
import {Swipeable} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const DriverPostHome = ({ navigation }) => {
 const [dataShow,setdatashow]= useState([]);
  const user = auth().currentUser;
  // firestore()
  //   .collection('Users').doc(user?.uid).collection('post')
  //   .get()
  //   .then(querySnapshot => {
  //     console.log('Total users: ', querySnapshot.size);
  //     querySnapshot.forEach(documentSnapshot => {
  //       dataShow.push(documentSnapshot.data());
  //        });
  //   });

  useEffect(() => {
    firestore()
    .collection('Users').doc(user?.uid).collection('post')
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);
      querySnapshot.forEach(documentSnapshot => {
        dataShow.push(documentSnapshot.data());
         });
    });
  } 
, []); 
console.log('dtdtd',dataShow.map((e)=>console.log(e)))
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore,setLengthMore] = useState(false);
  const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
  }
  const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >=4); //to check the text is more than 4 lines or not
  },[]);
  const [del,setdel]=useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
<Headericon name="arrow-left" des=" Driver's Posts" navigation={navigation}/>
{del? <View style={{marginTop:200}} ><Text style={{alignSelf:'center',fontSize:16}}>no post exist</Text></View>:
dataShow?.map((val,ind)=>{return <TouchableOpacity  key={ind}>
  <Swipeable renderRightActions={(progress, dragX) => {
const trans = dragX.interpolate({
inputRange: [0, 50, 100, 101],
outputRange: [-20, 0, 0, 1],
});
return (
<View style={{alignSelf:'center',padding:15}}>
<Animated.View   style={{flexDirection:'row'}} >
<TouchableOpacity style={{margin:10}}
      onPress={()=>Alert.alert(
        "Delete",
        "you want to delete the post?",
        [
        
          {
            text: "Cancel",
            onPress: () => alert("Cancel Pressed"),
            style: "cancel"
          },
          { text: "confirm", onPress: () => {alert("Post delete successfully",setdel(true))} }
        ]
      )}
>
  <View>
  <Text style={styles.deleteButtonText}><Icon name="delete" color="red" size={35} /></Text>
  <Text>Delete</Text> 
</View>
</TouchableOpacity>
</Animated.View>
</View>


);
}}
 //  onSwipeableRightOpen={()=>setdel(true)}
  >
<View style={styles.card}>
<Text  style={{position:'absolute',top:80,right:10}}> 

<Icon name="gesture-swipe-left"  size={45} />
</Text>
<View  >

<Text style={{fontSize:20,marginBottom:5}} >  <Icon name="currency-brl"  size={25} /> 
<Text style={{color:'red'}}>{val.fare} </Text> for {val.seats} passengers</Text>

<View >

<View>
 <Text > <Icon name="calendar-month"  size={25} />{val.date} </Text>
 <Text > <Icon name="alpha-a-circle" color='blue' size={25} />  {val.initialPoint} </Text>
<Text  > <Icon name="alpha-b-circle" color='green' size={25} />  {val.finalPoint} {'\n'} </Text>
{/* <Text  style={{fontSize:12}}>  Status    <Text style={{fontSize:11}}>
<Icon name="checkbox-blank-circle" color='green' size={10} />  Active {'\n'}</Text> </Text> */}


<Text 
     onTextLayout={onTextLayout}
     numberOfLines={textShown ? undefined : 5}
     style={{ lineHeight: 21 }}> <Icon name="comment-text-outline"  size={20}style={{padding:20}}  /> 
     {val.Description}
  </Text>

     {
         lengthMore ? <Text
         onPress={toggleNumberOfLines}
         style={{ lineHeight: 21, marginTop: 10 }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
         :null
     }
<Text   style={{fontSize:9,padding:5}} >  <Icon name="clock-check-outline"  size={10} /> published on {val.creationTime}</Text>
</View>
<View>

</View>
</View>

</View>

</View>
</Swipeable>
</TouchableOpacity>})
 }
  </ScrollView>
    </SafeAreaView>
  );
};

export default DriverPostHome;

const styles = StyleSheet.create({
 
  card: {
    //  height: 170,
    margin:10,padding:8,paddingBottom:0,
    borderRadius:10,
    marginVertical: 10,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor:'white',
    position:'relative'
  },
});
