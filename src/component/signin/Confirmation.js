import React, {useState,useEffect} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { Button} from 'react-native-elements';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Timer from './Time';
import Icon from 'react-native-vector-icons/Ionicons';


const CELL_COUNT = 6;

const Confim = ({route,navigation }) => {
  
  const [value, setValue] = useState('');
  const [vue, setVue] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({value,setValue,});
  
  const { number, confirm } = route.params;

  async function confirmCode(code) {
    try {
     // await confirm.confirm(code);
      alert('Register Successfully')
    } catch (error) {
      alert('Error');
    }
  }
  return(
    <View > 

  <Icon name="arrow-back" size={30} color="black" style={{marginLeft:20,marginTop:25}}
onPress={() => navigation.goBack()}    
/>
<View style={{paddingLeft:30,paddingRight:30,marginTop:35}}>
    <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10,marginTop:0}}>
      Enter the 4-digit code sent to you
at 0{number}.</Text>
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
        <Button
                title="Verify"
                buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)',height:50 }}
                containerStyle={{
                  marginTop:30,
                 marginBottom:20,  }}
               
                 disabled={value.length===6 ? false : true}
                titleStyle={{ color: 'white' }}
                onPress={() => navigation.navigate('HomeScreenDrawer')}
                />
               
<View style={{flexDirection:'row'}}>
        <Text style={{ fontWeight:'bold'}}>I didn't receive a code.</Text>
        <Timer /> 
        </View>
        <Text style={{textDecorationLine: 'underline',color:'blue',fontSize:12,marginTop:12}}>Resend Code</Text>
        </View>
    </View>
  );
};

export default Confim;
const styles=StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft:30,
        paddingRight:30
        
      },
      styleLoginBtn: {
        marginTop: 20,
        alignSelf: 'flex-end',
       borderRadius:5,
       height:40,
       width:90,
        borderWidth: 2, //button background/border color
        overflow: "hidden",
        color:'red',
        marginBottom: 30,
      },
    title: {textAlign: 'center',color:'white', fontSize: 30,
    marginBottom:60, fontWeight:'bold'},
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