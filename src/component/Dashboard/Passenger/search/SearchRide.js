import React , { useState } from 'react';
import { SafeAreaView, View,TextInput,ScrollView ,Dimensions, StyleSheet, Text,TouchableOpacity, StatusBar } from 'react-native';
import StarRating from './RatingStar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Headericon from '../../../CustomComponent/Headericon';
import { Avatar} from 'react-native-elements';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get("window");

const SearchRide = ({navigation}) => {
  const Postdata = useSelector((state) => state.counter.post);
  const [uri, setUri] = useState('');
const array=[1,2,3,4,5,6,7,8,9,10];
return (
    <SafeAreaView >
      <ScrollView>
       {/* Open drawer screen */}
 <Headericon name="bars" des="Search Ride" navigation={navigation} />
{/* Search ride field */}
           <View style={styles.searchBox}>
        <TextInput 
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          autoFocus={true}
          style={{flex:1,padding:0}}
        />
        <Ionicons name="ios-search" size={25} />
      </View>

      {Postdata?.map((data,ind)=>{
        return  <TouchableOpacity  key={ind}   
        onPress={() =>{navigation.navigate('ViewSearchPost', {Postdata:data})}}
 
        >
    <View style={styles.card}>
    <Text  style={{position:'absolute',top:80,right:10}}> <Ionicons name="chevron-forward" color="green" size={35} /></Text>
      <View  style={{borderBottomColor:'grey',borderBottomWidth:2}}>
     
      <Text style={{fontSize:20,marginBottom:5}} >  <Icon name="currency-brl"  size={25} /> 
      <Text style={{color:'red'}}>{data.fare} </Text> for {data.passenger}  passengers</Text>
      
        <View >
      
        <View>
          <Text > <Icon name="calendar-month"  size={25} /> {data.date} </Text>
          <Text > <Icon name="alpha-a-circle" color='blue' size={25} />  {data.initialPoint} </Text>
        <Text  > <Icon name="alpha-b-circle" color='green' size={25} />  {data.finalPoint}  </Text>
       <View style={{flexDirection:'row',paddingLeft:5,marginTop:8}}>
        <Icon name="comment-text-outline"  size={25}  />
        <Text   numberOfLines={2} >{data.comment}   </Text>
        </View>
        <Text   style={{fontSize:9,padding:5}} >  <Icon name="clock-check-outline"  size={10} /> Published 30 min ago</Text>
        </View>
       <View>
       
       </View>
        </View>

      </View>
      <View style={{padding:10,paddingTop:8,flexDirection:'row',alignItems:'center'}}>
     <Avatar
              size={30}
              rounded
              source={uri ? {uri} :{ uri: data.photo }}
              title="Ali"
              containerStyle={{ backgroundColor: 'grey',width:50,height:50,borderRadius:100 }} 
              // onPress={()=>{navigation.navigate('ViewProfilePhotoScreen', {uri:{uri}})}}
            avatarStyle={{width:50,height:50,borderRadius:100}} >
            </Avatar>
           
            <StarRating style={{paddingLeft:12}} ratings={data.rating} reviews={data.driverName} />
     </View>
    </View>
  </TouchableOpacity>

     })}
 
            </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },  searchBox: { 
     marginTop: Platform.OS === 'ios' ? 15 : 15, 
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
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

export default SearchRide;