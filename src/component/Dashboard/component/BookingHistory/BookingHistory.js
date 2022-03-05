import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Modal, 
         View, TextInput, Dimensions ,Text} from "react-native";
import { Button} from 'react-native-elements';
import Headericon from "../../../CustomComponent/Headericon";


const { width } = Dimensions.get("window");
  
export default function BookingHistory({navigation}) {
    
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
         {/* open drawer button */}
         
<Headericon name="bars" des="Ride history" navigation={navigation}/>
      
            {/**  We are going to create a Modal with Text Input. */}
            <Text style={{margin:90,textAlign:'center'}}>Booking MGT History</Text>
            <Button title="Show Modal" onPress={toggleModalVisibility} />
  
            {/** This is our modal component containing textinput and a button */}
            <Modal animationType="slide" 
                   transparent visible={isModalVisible} 
                   
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                        <TextInput placeholder="Enter something..." 
                                   value={inputValue} style={styles.textInput} 
                                   onChangeText={(value) => setInputValue(value)} />
  
                        {/** This button is responsible to close the modal */}
                        <Button title="Close" onPress={toggleModalVisibility} />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
  
// These are user defined styles
const styles = StyleSheet.create({
  
    viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }],
        height: 180,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
    },
});