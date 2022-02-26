import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import useTimer from './useTime';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Icon from 'react-native-vector-icons/Ionicons';

// number of verification cell
const CELL_COUNT = 6;

const Confim = ({route, navigation}) => {

    //custom hook of time
    const [minutes, seconds] = useTimer();
  //value of the verification code
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const {number, confirm} = route.params;

  //propos that snd from number enter screen
  // function of the confirmation
  async function confirmCode(code) {
    console.log('confir',confirm);
    try {
     //  await confirm.confirm(code);
      alert('Register Successfully');
    } catch (error) {
      alert('Error');
    }
  }

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
            marginBottom: 15,
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
                marginTop: 30,
                marginBottom: 20,
              }}
              disabled={value.length === 6 ? false : true}
              titleStyle={{color: 'white'}}
              onPress={() => { confirmCode(value),navigation.navigate('NameSc')}}
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
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
