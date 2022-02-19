import { StyleSheet, Text, View,TouchableOpacity,Dimensions,ScrollView ,Image} from 'react-native'
import React from 'react'
import { Button} from 'react-native-elements';
const { width, height } = Dimensions.get('window');
const DriverViewCreatPost = ({navigation}) => {
  const objectOfPost={ date:new Date().toDateString(),time:new Date().toTimeString(),startCity:'jhelum',endCity:'Lahore', status:'Pending'}
 
  return (
    <ScrollView>
    <View>
    <View style={{flexDirection:'row',backgroundColor:"white"}}>
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
                marginTop:12,
                width:70,
                height:55, 
               }}
                containerStyle={{
             
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                onPress={() => navigation.goBack()} 
              />
             

<Text style={{padding:15,marginLeft:'0%',marginTop:9,fontSize:22,color:'black'}}>View Post</Text>
</View>

      <View >
        <Image
          source={require('../../../../assets/Liyfit.png')}
          resizeMode="cover"
          style={{width:width,height:height/3}}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{objectOfPost.date}</Text>
        <Text></Text>
        <Text>Time {objectOfPost.time}</Text>
        <Text>From City {objectOfPost.startCity}</Text>
        <Text>From City {objectOfPost.endCity}</Text>
        <Text numberOfLines={2} style={styles.cardDetails}>Status </Text>
      
     <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
     <Button
         icon={{
          name: 'edit',
          type: 'font-awesome',
          size: 20,
          color: 'black'}}
           title="edit"
           buttonStyle={{
            backgroundColor: 'grey',
          
           }}
          onPress={() =>{  navigation.navigate('PostSignin')}}
          />
          <Text>   </Text>
           <Button
           color="red"
           title="Delete"

           buttonStyle={{
            backgroundColor: 'red',
          
           }}
          onPress={() =>{  navigation.navigate('PostSignin')}}
          />
     </View>
      </View>
  
    </View>
    </ScrollView>
  )
}

export default DriverViewCreatPost

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

})