import React, { useState,useEffect,useCallback } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { View, Text, TextInput, Image, TouchableHighlight,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { changeMessage, sendMessage, fetchMessages } from '../actions/AppActions';

const DATA = [
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',},]
const Item = ({messages}) => (
    
   <View style={{flex:2, paddingBottom: 0 }}>
      <Text style={{alignSelf: 'center',padding:10,backgroundColor:'#d3d3d3',
      borderRadius:20,padding:10,margin:5}}>{'Welcome to liyfit chat  \n Message are end-to-end are save'}</Text>
       {messages?.map((ind,val)=>{return <View key={val} style={{alignSelf: 'flex-end',
       padding:12,backgroundColor:'#50ee98',borderRadius:10,padding:10,marginBottom:2}}><Text>
         {ind.text}</Text>

        <View style={{fontSize:5,paddingTop:5}}>
        <Text style={{fontSize:3,textAlign:'right',paddingLeft:5,paddingRight:5}} >{ind.smsdate}</Text>
         <Text style={{fontSize:3,textAlign:'right'}}>{ind.smstime}</Text>
        </View>
         </View>
       })} 
      </View>

);
export default  function Chat({route,navigation}) {
   const{driverName}=route.params;
  const date=new Date();
     const sms=date.toDateString();
     let  time=date.toLocaleTimeString();
     const smstime =time.split("").reverse().splice(6).reverse().join(" ")+ time.split(" ").reverse().slice(0,1).reverse().join(" ")
     const  smsdate=sms.split(" ").reverse().slice(1).reverse().join(" ");
     const [saveMessages, setSaveMessages] = useState([]);
    const [Message, setMessage] = useState('');
 
    const renderItem = () => (
        
        <Item  messages={saveMessages}/>
      );
    return (
      <View style={{ flex: 1, marginTop: 0, backgroundColor: '#eee4dc', padding: 10 }}>
     <TouchableHighlight
        // onPress={ () => Actions.chat({
        //   title: chatContent.name,
        //   contactName: chatContent.name,
        //   contactEmail: chatContent.email
        // }) }
        style={{ flex: 1, marginTop: 0, backgroundColor: '#eee4dc', padding: 2 }}> 
      <View style={{  flexDirection: 'row', padding: 5,marginBottom:5, borderBottomWidth: 1,
       borderColor: "#b7b7b7" }}>
      {/* <Image source={{uri: chatContent.profileImage }} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
      <Icon
        name="arrow-back"
        size={30}
        color="black"
        style={{ marginTop: 10,marginRight:20}}
        onPress={() => navigation.goBack()}/>
        <Image source={require('../../../../assets/cht.webp')} style={{ width: 50, height: 50,
           borderRadius: 50 }} />
      
          <View  style={{ marginLeft: 15 }}>
            {/* <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{ chatContent.name }</Text> */}
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {driverName}</Text>
            {/* <Text style={{ fontSize: 13 }}>{ chatContent.lastMessage }</Text> */}
            <Text style={{ fontSize: 10 }}>online</Text>
          </View>
      </View>
      </TouchableHighlight>
<View style={{flex:9}}>
<FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
</View>
    

      <View style={{ flexDirection: 'row', height: 50 }}>
        <TextInput
          value={Message.text}
       onChangeText={ text => setMessage({text,smsdate,smstime}) }
          underlineColorAndroid='transparent'
          style={{ flex: 3, backgroundColor: '#fff', fontSize: 15, borderRadius: 30 }}
        />

        <TouchableHighlight
    //    onPress={ this._sendMessage.bind(this) }
       onPress={()=>{saveMessages.push(Message),setMessage('')} }
          underlayColor='#fff'>
        
          <Image source={require('../../../../assets/ic_button_send_sms.png')} style={{ width: 50, height: 50, marginLeft: 5 }} />
        </TouchableHighlight>
      </View>

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