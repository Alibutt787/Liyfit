import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Dashboard = () => {
    return (
        <View style={styles.container}>
            
      <Text style={{textAlign:'center',fontSize:25, color:'#EA0B8C', fontWeight:'900'}}>Welcome In LIYFIT
      DashBoard 😊😊😊😊




      
      </Text>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },})



// import React,{ Component } from 'react';
// import { StyleSheet, View, Text, Button } from 'react-native';
// import firebase from './database/firebase';

// export default class Dashboard extends Component {
//   constructor() {
//     super();
//     this.state = { 
//       uid: ''
//     }
//   }

//   signOut = () => {
//     firebase.auth().signOut().then(() => {
//       this.props.navigation.navigate('Login')
//     })
//     .catch(error => this.setState({ errorMessage: error.message }))
//   }  

//   render() {
//     this.state = { 
//       displayName: firebase.auth().currentUser.displayName,
//       uid: firebase.auth().currentUser.uid
//     }    
//     return (
//       <View style={styles.container}>
//         <Text style = {styles.textStyle}>
//           Hello, {this.state.displayName}
//         </Text>

//         <Button
//           color="#3740FE"
//           title="Logout"
//           onPress={() => this.signOut()}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 35,
//     backgroundColor: '#fff'
//   },
//   textStyle: {
//     fontSize: 15,
//     marginBottom: 20
//   }
// });
