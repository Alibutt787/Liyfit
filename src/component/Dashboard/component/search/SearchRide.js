import React , { useState } from 'react';
import { SafeAreaView, View,TextInput,ScrollView ,Dimensions, VirtualizedList,Image,Modal, StyleSheet, Text,TouchableOpacity, StatusBar } from 'react-native';
import StarRating from './RatingStar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button} from 'react-native-elements';
import Headericon from '../../../CustomComponent/Headericon';
import Icon from 'react-native-vector-icons/FontAwesome5';
const { width } = Dimensions.get("window");
const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index+1}`
});

  const getItemCount = (data) => 50;

const Item = ({ toggleModalVisibility}) => (
    <TouchableOpacity onPress={toggleModalVisibility}>
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
     
        <Image
          source={require('../../../../assets/Liyfit.png')}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>Ali Butt</Text>
        <StarRating ratings={3} reviews={'Going to Lahore'} />
        <Text numberOfLines={2} style={styles.cardDetails}>pakistan</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const SearchRide = ({navigation}) => {

      // This is to manage Modal State
      const [isModalVisible, setModalVisible] = useState(false);
  
      // This is to manage TextInput State
      const [inputValue, setInputValue] = useState("");
    
      // Create toggleModalVisibility function that will
      // Open and close modal upon button clicks.
      const toggleModalVisibility = () => {
          setModalVisible(!isModalVisible);
      };

  return (
    <SafeAreaView >
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
      {/* Search  result is desplay */}
      <VirtualizedList  style={{marginTop:20}}
        data={DATA}
        initialNumToRender={4}
        renderItem={() =><Item  navigation={navigation} toggleModalVisibility={toggleModalVisibility} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
{/* Model is started */}
<Modal animationType="slide" 
                   transparent visible={isModalVisible} 
                   propagateSwipe={true}
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibility}>
                
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                      <View >
{/* Back button in model */}
                
  <View style={{flexDirection:'row',backgroundColor:"white"}}   >
<Icon name="trash" size={25} color="red"  onPress={toggleModalVisibility} style={{padding:15,paddingLeft:15,paddingRight:15}}/>
</View>
              {/* image of model */}
                      <Image   style={{height:150,width:'100%'}}
          source={require('../../../../assets/Liyfit.png')}
          resizeMode="cover"
        
        />

                      </View>


{/* Other Details of the Search Post in model*/}
<View style={{paddingLeft:20,paddingRight:50,paddingTop:20, lineHeight: 30}}>
  <Text>Post By: Ali Butt</Text>
  <Text>{'\n'}Started Point: Sialkot</Text>
  <Text>{'\n'}Final Point: Lahore</Text>
  <Text>{'\n'}Vehicle: BMW Model 2019</Text>
  <Text>{'\n'}Fair charges per km</Text>
  <Text>{'\n'}Vehicle: BMW Model 2019</Text>
  <Text style={{textAlign:'justify'}}>{'\n'}Description: dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident</Text>

</View>
           
                        {/** This button is responsible to close the modal */}
                   
         
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
                    
                </View>
              
            </Modal>
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
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 22,
  }, 
  card: {
    height: 100,
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
  }, viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
},
modalView: {
   
    position: "absolute",
    top: "20%",
    left: "45%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, 
                { translateY: -100 }],
    
    width: width * 0.9,
    backgroundColor: "#fff",
    borderRadius: 7,
},

});

export default SearchRide;