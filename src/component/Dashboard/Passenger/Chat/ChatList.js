import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { View, Text, TextInput, Image, TouchableHighlight,FlatList} from 'react-native';
import Headericon from '../../../CustomComponent/Headericon';
// import { changeMessage, sendMessage, fetchMessages } from '../actions/AppActions';


const DATA = [
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',},
]
  const driverName ='Usama'
  const Item = ({navigation}) => (
   
       <TouchableHighlight
       onPress={()=>navigation.navigate('ChatScreen',{driverName})}
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
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Usama</Text>
            {/* <Text style={{ fontSize: 13 }}>{ chatContent.lastMessage }</Text> */}
            <Text style={{ fontSize: 10 }}>Liyfit Driver</Text>
          </View>
      </View>
      </TouchableHighlight>
 
  );
export default  function ChatList({navigation}) {
    const renderItem = () => (
        <Item  navigation={navigation} />
      );
    return (
      <View style={{ flex: 1, marginTop: 0, backgroundColor: '#eee4dc' }}>
               <Headericon name="arrow-left" des="Chat " navigation={navigation}/>
     
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
