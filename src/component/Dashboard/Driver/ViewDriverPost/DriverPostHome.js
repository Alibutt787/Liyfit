import React,{useState,useCallback} from 'react';
import { StyleSheet, Text, View, Animated,SafeAreaView,TouchableOpacity,Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import Headericon from '../../../CustomComponent/Headericon'
import {Swipeable} from 'react-native-gesture-handler';

const renderRightActions = () => {
  return (
    <View style={{alignSelf:'center',padding:15}}>
      <Animated.View   style={{flexDirection:'row'}} >
       
      <TouchableOpacity   style={{margin:10}} onPress={()=>Alert.alert(
                "Edit",
                "you want to edit the Post ?",
                [ 
                  {
                    text: "No",
                    onPress: () => alert("Cancel Pressed"),
                  },
                  { text: "Yes", onPress: () => {alert("OK Pressed")
                
                } }
                ]
              )}>
          <Text style={styles.deleteButtonText}><FontIcon name="edit" color="blue" size={35} /></Text>
          <Text>edit</Text>
        </TouchableOpacity>
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
                  { text: "confirm", onPress: () => alert("OK Pressed") }
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
};





const DriverPostHome = ({ navigation }) => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore,setLengthMore] = useState(false);
  const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
  }
  
  const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >=4); //to check the text is more than 4 lines or not
  
  },[]);
  return (
    <SafeAreaView   >
      <ScrollView>
  <View  >
 
<Headericon name="bars" des="Created Post" navigation={navigation}/>
<TouchableOpacity>
           <Swipeable renderRightActions={renderRightActions}>
    <View style={styles.card}>
    <Text  style={{position:'absolute',top:80,right:10}}> 
    
    <Icon name="gesture-swipe-left"  size={45} />
    </Text>
      <View  >
     
      <Text style={{fontSize:20,marginBottom:5}} >  <Icon name="currency-brl"  size={25} /> <Text style={{color:'red'}}>1500 </Text> for 3 passengers</Text>
      
        <View >
      
        <View>
          <Text > <Icon name="calendar-month"  size={25} /> Sun 27 Feb 3:00 </Text>
          <Text > <Icon name="alpha-a-circle" color='blue' size={25} />  Jhelum </Text>
        <Text  > <Icon name="alpha-b-circle" color='green' size={25} />  Lahore {'\n'} </Text>
        <Text  style={{fontSize:12}}>  Status    <Text style={{fontSize:11}}>
        <Icon name="checkbox-blank-circle" color='green' size={10} />  Active {'\n'}</Text> </Text>
       
        
        <Text 
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 5}
              style={{ lineHeight: 21 }}> <Icon name="comment-text-outline"  size={20}style={{padding:20}}  /> ctetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! ProvidentDescription: dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! ProvidentDescription: dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! ProvidentDescription: dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quasrovidentDescription: dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum</Text>

              {
                  lengthMore ? <Text
                  onPress={toggleNumberOfLines}
                  style={{ lineHeight: 21, marginTop: 10 }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                  :null
              }
        <Text   style={{fontSize:9,padding:5}} >  <Icon name="clock-check-outline"  size={10} /> Published 30 min ago</Text>
        </View>
       <View>
       
       </View>
        </View>

      </View>

    </View>
    </Swipeable>
  </TouchableOpacity>

  </View>
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
