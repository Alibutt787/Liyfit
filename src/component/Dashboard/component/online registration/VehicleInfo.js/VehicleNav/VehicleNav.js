import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VehicleInfo from '../VehicleInfo';
import VehicleCertificate from '../Vehicle Certificate/VehicleCertificate';
import VehicleBasicInfo from '../VehicleBasicInfo/VehicleBasicInfo';
import VehiclePhoto from '../VehiclePhoto/VehiclePhoto';
;

const Stack = createNativeStackNavigator();

 const VehicleNav = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="VehicleInfo"
          component={VehicleInfo}
          options={{ title: 'Welcome',headerShown: false }}/>
          
          <Stack.Screen name="VehicleCertificate" component={VehicleCertificate}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="VehicleBasicInfo" component={VehicleBasicInfo}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="VehiclePhoto" component={VehiclePhoto}  options={{ title: 'Welcome',headerShown: false }}/>
          {/* <Stack.Screen name="Cnic" component={Cnic}  options={{ title: 'Welcome',headerShown: false }}/> */}
         
          </Stack.Navigator>
   
  );
};
export default VehicleNav;
