
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackDrawer from './StackDrawer';
import NameSc from '../../TermsCondition/NameSc/NameSc';
import TermsConditionPage from '../../TermsCondition/terms/TermsConditionPage';
import TermConditions from '../../TermsCondition/terms/TermConditions';
import { useSelector } from 'react-redux';
import { AuthTerm } from '../../Redux/UserReducer';
import GetStarted from '../../signin/Getstarted/GetStarted';
import { LoginNumber } from '../../signin/Login/LoginNumber';
import Confim from '../../signin/confirmCode/Confirmation';
const Stack = createNativeStackNavigator();

export const DrawerNavigation = () => {


return (<>
 <NavigationContainer>
         
      <Stack.Navigator> 
                <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ title: 'Welcome',headerShown: false }}/>
     <Stack.Screen name="Number" component={LoginNumber}  options={{ title: 'Welcome',headerShown: false }}/>
     <Stack.Screen name="confirm" component={Confim}  options={{ title: 'Welcome',headerShown: false }}/>
     <Stack.Screen name="NameSc" component={NameSc}  options={{ title: 'Welcome',headerShown: false }}/>
     <Stack.Screen name="TermConditions" component={TermConditions}  options={{ title: 'Welcome',headerShown: false }}/>
     <Stack.Screen name="TermsConditionPage" component={TermsConditionPage}  options={{ title: 'Welcome',headerShown: false }}/>
     <Stack.Screen name="WelcomeHomeScr" component={StackDrawer}  options={{ title: 'Welcome',headerShown: false }}/> 
     </Stack.Navigator>  
   
           </NavigationContainer> 
 </> );
};

