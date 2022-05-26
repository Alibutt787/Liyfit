import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnlineRegistration from './OnlineRegistration';
import License from './License/License';
import Idconfirm from './Idconfirm/Idconfirm';
import Cnic from './Cnic/Cnic';
import VehicleNav from './VehicleInfo/VehicleNav/VehicleNav';
import BasicInfo from './BasicInfo/BasicInfo';
import DriverTermsConditionPage from './DriverTerm/DriverTermsConditionPage';


const Stack = createNativeStackNavigator();


 const OnlineRegistrationNav = () => {
  return (

      <Stack.Navigator>
        {/* <Stack.Screen
          name="OnlineRegistration"
          component={OnlineRegistration}
          options={{ title: 'Welcome',headerShown: false }}/> */}
          <Stack.Screen name="BasicInfo" component={BasicInfo}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="DriverTermsConditionPage" component={DriverTermsConditionPage}  options={{ title: 'Welcome',headerShown: false }}/>
          {/* <Stack.Screen name="License" component={License}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="Idconfirm" component={Idconfirm}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="Cnic" component={Cnic}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="VehicleNav" component={VehicleNav}  options={{ title: 'Welcome',headerShown: false }}/> */}
          </Stack.Navigator>
        
  );
};
export default OnlineRegistrationNav;
