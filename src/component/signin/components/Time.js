import React from 'react'
import { useState, useEffect } from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';

const Timer = () => {
    // const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(1);
    const [seconds, setSeconds ] =  useState(59);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <View>
        { minutes === 0 && seconds === 0
            ?  <Text style={{color:'red'}}> {minutes} : {seconds}{seconds}</Text> 
            : <Text> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</Text> 
        }
        </View>
    )
}

export default Timer;