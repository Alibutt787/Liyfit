import {  StyleSheet, Text, View ,FlatList} from 'react-native'
import React,{useState,useCallback} from 'react'
import { Button,Avatar} from 'react-native-elements';
import SubHeadericon from '../../../CustomComponent/SubHeadericon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',}]
  const Item = ({Postdata}) => {
     
const [textShown, setTextShown] = useState(false); //To show ur remaining Text
const [lengthMore,setLengthMore] = useState(false);
const toggleNumberOfLines = () => { //To toggle the show text or hide it
  setTextShown(!textShown);
}

const onTextLayout = useCallback(e =>{
  setLengthMore(e.nativeEvent.lines.length >=4); //to check the text is more than 4 lines or not

},[]);  return(
    <View style={{padding:10,marginBottom:20}}> 
    <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 4}
              style={{ lineHeight: 21,paddingTop:20 }}>
                <Icon name="comment-outline"  size={25} />
                
                     {Postdata.comment}</Text>

              {
                  lengthMore ? <Text
                  onPress={toggleNumberOfLines}
                  style={{ lineHeight: 21, marginTop: 10 }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                  :null
              }
       
        <Text   style={{fontSize:9,padding:5}} >  <Icon name="clock-check-outline"  size={10} /> Published 
         {Postdata.publishtime} ago</Text>
    </View>)}

    //main component

const ViewSearchPost = ({route,navigation}) => {

  const {Postdata} = route.params;
  const [uri, setUri] = useState('');

    const renderItem = () => (
      <Item Postdata={Postdata} />
    );
  return (
    <View>
        
<SubHeadericon name="arrow-left" des="View Ride" navigation={navigation}/>
    
    
        <View style={{marginTop:30}}>
          
        <Avatar
              size={64}
              rounded
              source={uri ? {uri} :{ uri: Postdata.photo }}
              title="Ali"
              containerStyle={{ backgroundColor: 'grey',width:150,height:150,borderRadius:100,alignSelf:'center' }} 
              // onPress={()=>{navigation.navigate('ViewProfilePhotoScreen', {uri:{uri}})}}
            avatarStyle={{width:150,height:150,borderRadius:90}} >
            </Avatar>
        </View>
        
<View style={{padding:20, lineHeight: 30}}>
<Text style={{fontSize:17,alignSelf:'center',marginBottom:15}}>Driver {Postdata.driverName}  </Text>
<View>
<Text style={{fontSize:20,marginBottom:5}} >  <Icon name="currency-brl"  size={25} /> 
<Text style={{color:'red'}}>{Postdata.fare} </Text> for {Postdata.passenger} passengers</Text>
     
          <Text > <Icon name="calendar-month"  size={25} /> {Postdata.date} </Text>
          <Text > <Icon name="alpha-a-circle" color='blue' size={25} /> {Postdata.initialPoint} </Text>
        <Text  > <Icon name="alpha-b-circle" color='green' size={25} />  {Postdata.finalPoint}  </Text>
        <Text  > <Icon name="car"  size={25} /> {Postdata.vehicle} {'\n'}</Text>
          
       <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        </View>
      
     
     
  

</View>
           
                   
         
<View  style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:80}}>
<Button
                title="Chat"
                icon={{
                  name: 'comments',
                  type: 'font-awesome',
                  size: 18,
                  color: 'white',
             
                 
                }}
                iconRight
                iconContainerStyle={{ color:'white'  }}
                titleStyle={{}}
                buttonStyle={{height:60}}
                containerStyle={{
                
                  width:150,
                 justifyContent:'flex-start',
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                onPress={() =>{alert('Book Ride')}}
              />

        <Text>  </Text>
     
        <Button
                title="Book"
                icon={{
                  name: 'car',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
             
                 
                }}
                iconRight
                iconContainerStyle={{ color:'white'  }}
                titleStyle={{}}
                buttonStyle={{
                  backgroundColor: 'green',
          
              height:60
               
                }}
                containerStyle={{
                
                  width:150,
                 justifyContent:'center',
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                onPress={() =>{alert('Book Ride')}}
              /> 
              </View>
    </View>
  )
}

export default ViewSearchPost

const styles = StyleSheet.create({info:{padding:7,fontSize:17}})