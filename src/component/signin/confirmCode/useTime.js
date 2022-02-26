import React from 'react'
import { useState, useEffect } from 'react';

const useTimer = () => {
    const [ minutes, setMinutes ] = useState(1);
    const [seconds, setSeconds ] =  useState(59);
   
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
      
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                   
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

    return  [ minutes ,seconds]
    
}

export default useTimer;