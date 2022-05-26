import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,Keyboard,Alert} from 'react-native';
import {Button} from 'react-native-elements';
import useTimer from './useTime';
import RNOtpVerify from 'react-native-otp-verify';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../../CustomComponent/Loading';
import { useDispatch ,useSelector} from 'react-redux';
import {userr,term} from '../../Redux/UserReducer'
// number of verification cell
const CELL_COUNT = 6;
const Confim = ({confirmationToken, number,navigation}) => {
  //custom hook of time
    const [minutes, seconds] = useTimer();
  //value of the verification code
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  dispatch(term(true));
  //confirm function
  function confirmCode(code) {
    // try {
    //   await confirmationToken?.confirm(code)
    //   setLoading(false);
    // } catch (error) {
    //   console.log('Invalid code.');
    // }
     setLoading(false);
    navigation.navigate('NameSc');
//     confirmationToken?.confirm(code).then((result) => {
//     setLoading(false);
//     // const userDocument = firestore().collection('Users').doc(number);
//     // User signed in successfully.
// //     const usersCollection = firestore().collection('Users');
// //     const userDocument =  firestore()
// //     .collection('Users')
// //     .add({
// //     number: number,
// // })
// // .then(() => {
// //   console.log('User added!');
// // });
//   }).catch((error) => {
//     Alert.alert('Wrong Opt used',error);
//   });
} 
  // useEffect(() => {
  //   RNOtpVerify.getOtp()
  //       .then((p) => {
  //           RNOtpVerify.addListener((message) => {
               
  //                   if (!!message && message !== 'Timeout Error') {
  //                       const otp = /(\d{6})/g.exec(message)[1];
  //                       if (otp.length === 6) {
  //                           setValue(otp); 
  //                           RNOtpVerify.removeListener();
  //                           Keyboard.dismiss();
                            
  //                       }
  //                   } else {
  //                       alert( 'OTPVerification: RNOtpVerify.getOtp - message=>', message );
  //                   }
               
  //           });
  //       })
  //       .catch((error) => {
  //           alert(error);
  //       })
  //       return () => {
  //         RNOtpVerify.removeListener();
  //         // removeOtpListener();
  //     };
  // }, []);

 
  return (
    <View>
       <Icon
        name="arrow-back"
        size={30}
        color="black"
        style={{marginLeft: 20, marginTop: 25}}
        onPress={() => navigation.goBack()}
      />
      {/* text of confirmation code sent */}
      <View style={{paddingLeft: 30, paddingRight: 30, marginTop: 35}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: '20%',
            marginTop: 0,
          }}>
          Enter the 4-digit code sent to you at 0{number}.
        </Text>
        {/* verification otp code cell */}
        {minutes === 0 && seconds === 0 ? (
          <Text style={{textAlign: 'center', padding: 50}}>
            <Icon
              name="refresh-circle"
              size={60}
              style={{marginLeft: 20, marginTop: 25}}
            />
          </Text>
        ) : (
          <View>
            <CodeField
              ref={ref}
              {...propss}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />

            {/* button of  verify the otp code */}
            <Button
              title="Verify"
              buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)', height: 50}}
              containerStyle={{
                marginTop: '25%',
                marginBottom: 20,
              }}
              disabled={value.length === 6 ? false : true}
              titleStyle={{color: 'white'}}
              onPress={() => { confirmCode(value)}}
            />
          </View>
        )}

        {/* time show */}
        <Text style={{fontWeight: 'bold'}}>
          I didn't receive a code ({`${minutes}:${seconds}`}){' '}
        </Text>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: 'blue',
            fontSize: 12,
            marginTop: 12,
          }}>
          Resend Code
        </Text>
      </View>
      {isLoading?<Loading />:<></>}
    </View>
  );
};

export default Confim;
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
    borderBottomWidth: 4,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
