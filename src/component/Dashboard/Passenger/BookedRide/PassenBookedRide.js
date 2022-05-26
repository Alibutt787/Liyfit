import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableHighlight,FlatList} from 'react-native';
import Headericon from '../../../CustomComponent/Headericon';
const DATA = [
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',},]
    
  const dataContent={pic:'https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg'
  ,name:'Usama',email:'usama786@hmail.com',number:'03314113737'}
  const Item = ({navigation}) => (
       <TouchableHighlight
        onPress={()=>navigation.navigate('PassenBookedRideView',{dataContent})}
        // onPress={ () => Actions.chat({
        //   title: chatContent.name,
        //   contactName: chatContent.name,
        //   contactEmail: chatContent.email
        // }) }
        style={{ flex: 1, backgroundColor: '#eee4dc', padding: 10 }}
      > 
      <View style={{  flexDirection: 'row', paddingBottom: 5, borderBottomWidth: 1, borderColor: "#b7b7b7" }}>
      {/* <Image source={{uri: chatContent.profileImage }} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
   
        <Image source={require('../../../../assets/cht.webp')} style={{ width: 50, height: 50, borderRadius: 50 }} />
          <View style={{ marginLeft: 15 }}>
            {/* <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{ chatContent.name }</Text> */}
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Driver Usama</Text>
            {/* <Text style={{ fontSize: 13 }}>{ chatContent.lastMessage }</Text> */}
            <Text style={{ fontSize: 10 }}>sun 29 may 2:00 pm</Text>
          </View>
      </View>
      </TouchableHighlight>
 
  );
export default  function PassenBookedRide({navigation}) {
    const renderItem = () => (
        <Item  navigation={navigation} />
      );
    return (
      <View style={{ flex: 1, marginTop: 0, backgroundColor: '#eee4dc' }}>
               <Headericon name="arrow-left" des="Passener's booking " navigation={navigation}/>
     
     <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
      </View>
    )
  
}

// mapStateToProps = state => {

//   const conversation = _.map(state.ListConversation, (val, uid) => {
//     return { ...val, uid };
//   })

//   console.log(conversation);

//   return ({
//     conversation,
//     message: state.AppReducer.message
//   })
// }

// export default connect(mapStateToProps, { changeMessage, sendMessage, fetchMessages })(Chat);
