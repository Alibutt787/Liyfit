import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import SubHeadericon from '../../../../CustomComponent/SubHeadericon';


const DATA = [
  { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',}]

const Item = () => (
  <View style={{padding:15,marginBottom:80}}>
<Text style={styles.text}>

<Text style={styles.head}>How does Liyfit work?</Text>{'\n'}{'\n'}
Uber is a technology platform. Our smartphone apps connect driver-partners and riders.
{'\n'}
In cities where Liyfit operates, use your rider app to request a ride. When a nearby driver-partner accepts your request, your app displays an estimated time of arrival for the driver-partner heading to your pickup location. Your app notifies you when the driver-partner is about to arrive.
{'\n'}
Your app also provides info about the driver-partner with whom you will ride, including first name, vehicle type, and license plate number. This info helps the two of you connect at your pickup location.
{'\n'}
Use your app to enter your preferred destination anytime before or during the ride. If you have a preferred route, it's helpful to talk through the directions together.
{'\n'}
When you arrive at your destination and exit the vehicle, your trip ends. Your fare is automatically calculated and charged to the payment method you've linked to your Uber account.
{'\n'}
In some cities, Uber allows you to pay your fare in cash. This option must be selected before you request a ride.
{'\n'}
Immediately after a trip ends, your app will ask you to rate your driver from 1 to 5 Stars. Driver-partners are also asked to rate riders. Uber's feedback system is designed to foster a community of respect and accountability for everyone.
{'\n'}
Learn more about how Uber works by exploring other Help Center topics. You can search for specific questions and answers too.

</Text>
 
  </View>
);
const AppInfo = ({navigation}) => {
  const renderItem = () => (
    <Item />
  );
  return (
    <View>
       <SubHeadericon name="arrow-left" des="App Info" navigation={navigation}/>
     
       <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     
    </View>
  )
}

export default AppInfo

const styles = StyleSheet.create({
  text:{textAlign:'justify'}
  ,head:{fontSize:20}
})