
import * as React from 'react';
import { View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screens
import Login from '../../screens/SignIn/Login';
import SignUp from '../../screens/SignUp/Signup';
import ResetPassword from '../../screens/ResetPassword/ResetPassword';
import VerifyCode from '../../screens/VerifyCode/VerifyCode';
import UpdatePassword from '../../screens/UpdatePassword/UpdatePassword';
import CreateProfile from '../../screens/CreateProfile/CreateProfile';

const Stack = createNativeStackNavigator();

function AuthNav() {
  return (
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
        options={{
        headerShown: false,
        }} />
       <Stack.Screen name="SignUp" component={SignUp}
        options={{
        headerShown: false,
        }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword}
        options={{
        headerShown: false,
        }} />
         <Stack.Screen name="VerifyCode" component={VerifyCode}
        options={{
        headerShown: false,
        }} />
         <Stack.Screen name="UpdatePassword" component={UpdatePassword}
        options={{
        headerShown: false,
        }} />
             <Stack.Screen name="CreateProfile" component={CreateProfile}
        options={{
        headerShown: false,
        }} />
      </Stack.Navigator>

  );
}

export default AuthNav;