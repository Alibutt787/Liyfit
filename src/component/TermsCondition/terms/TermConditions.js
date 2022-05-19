
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import IIcon from 'react-native-vector-icons/Foundation';
import { CheckBox } from 'react-native-elements';
const TermConditions = ({navigation}) => {
  const [check1, setCheck1] = useState(false);
  // const [valid, setvalid] = useState(check1);
  return (
    <View >
      <Icon
        name="arrow-back"
        size={35}
        color="black"
        style={{marginLeft: 20, marginTop: 25}}
        onPress={() => navigation.goBack()}
      />
      {/* text of confirmation code sent */}
      <View style={{paddingLeft: 5, paddingRight: 5}}>
        <View style={{flexDirection:'row'}}>
{/* 
        <SVGImg width={130} height={250} /> */}
        <IIcon
        name="page-edit"
        size={95}
        color="black"
        style={{marginTop: 25,color:'#243c64'}}
        onPress={() => navigation.goBack()}
      />
        <Text style={{fontSize:28,overflow:'hidden',lineHeight:45,padding:20}}> 
          Accept Liyfit's {"\n"}
          Terms & Rewiew {"\n"}
          Privacy Notice 
        </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            padding:10,
            marginBottom: 5,
            marginTop: 10,
            textAlign:'justify'
          }}> 
          By Selecting "I Agree" blew, I have reviewed and
          acknowledge the i am at
           atleast 18 years of age.
           and agree to the 
           <TouchableOpacity       onPress={()=>{navigation.navigate('TermsConditionPage')}}>
           <Text style={{color:'blue',textAlign:'justify'}}>Term of Policy</Text>
           
           </TouchableOpacity>

        </Text>
        <Text
                  style={{
                    marginTop:200,
                    marginBottom:20,
                    width: '80%',
                 marginLeft:40,
                 marginRight:20,
                    borderBottomWidth: 2,
                    borderBottomColor: 'black',
                  }}></Text>
        <CheckBox
        iconRight
        containerStyle={{backgroundColor:'transparent'}}
        uncheckedColor='grey'
        checkedColor='green'
        wrapperStyle={{justifyContent:'space-between'}}
        title="I Agree"
        checked={check1}
        onPress={() => setCheck1(!check1)}
      />

         <Button
              title="Continue"
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)', height: 50,width:150,alignSelf:'flex-end'}}
              containerStyle={{
                marginRight:10,
                marginTop: 30,
                marginBottom: 20,
                
              }}
              disabled={!check1}
              titleStyle={{color: 'white'}}
            //  onPress={handleSubmit}
               onPress={() => { navigation.navigate('WelcomeHomeScr')}}
            />
   
      </View>
    </View>
  );
};

export default TermConditions;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  styleLoginBtn: {
    marginTop: 20,
    alignSelf: 'flex-end',
    borderRadius: 5,
    height: 40,
    width: 90,
    borderWidth: 2, //button background/border color
    overflow: 'hidden',
    color: 'red',
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    marginBottom: 60,
    fontWeight: 'bold',
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
