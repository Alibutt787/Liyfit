import React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView, Dimensions,TouchableOpacity,TouchableHighlight } from 'react-native';
import { Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iccon from 'react-native-vector-icons/Ionicons';
const PostHome = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const objectOfPost={ date:new Date().toDateString(),time:new Date().toTimeString(),startCity:'jhelum',endCity:'Lahore', status:'Pending'}
  return (
    <SafeAreaView   style={{}}>
  <View>
 

<View style={{flexDirection:'row',backgroundColor:'white'}}>
        <Button
                icon={{
                  name: 'arrow-left',
                  type: 'font-awesome',
                  size: 20,
                  color: 'black'}}
                iconLeft
                iconContainerStyle={{ color:'black',  }}
                buttonStyle={{
                backgroundColor: 'white',
                marginTop:7,
                width:70,
                height:55, 
               }}
                containerStyle={{
             
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                onPress={()=>{navigation.openDrawer()}} 
              />
             

<Text style={{marginTop:23,fontSize:18,color:'black'}}>All Ride Post</Text>
</View>

<Icon name="plus" size={40} color="black" style={{position:'absolute',top:'4%',right:'8%'}}
onPress={() => navigation.navigate('CreatePostForm')}    
/>



 
<TouchableOpacity           onPress={() =>{  navigation.navigate('DriverViewCreatPost')}}>
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <Image
          source={require('../../../assets/Liyfit.png')}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{objectOfPost.date}</Text>
        <Text></Text>
        <Text>Time {objectOfPost.time}</Text>
        <Text>From City {objectOfPost.startCity}</Text>
        <Text>From City {objectOfPost.endCity}</Text>
        <Text numberOfLines={2} style={styles.cardDetails}>Status </Text>
      </View>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() =>{  navigation.navigate('DriverViewCreatPost')}}>
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <Image
          source={require('../../../assets/Liyfit.png')}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{objectOfPost.date}</Text>
        <Text></Text>
        <Text>Time {objectOfPost.time}</Text>
        <Text>From City {objectOfPost.startCity}</Text>
        <Text>From City {objectOfPost.endCity}</Text>
        <Text numberOfLines={2} style={styles.cardDetails}>Status </Text>
      </View>
    </View>
  </TouchableOpacity>
  </View>
    </SafeAreaView>
  );
};

export default PostHome;

const styles = StyleSheet.create({
 
  card: {
    height: 120,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
