import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from '../Screens/SignIn';
import ConfirmationCodeScreen from '../Screens/ConfirmationCode';
// createStackNavigator ودي وظفتها ان هيا تعملنا استاك

const Stack = createStackNavigator();

export function AuthStack (props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SignInScreen' component={SignInScreen}
                          options={{headerShown: false}}/>
            <Stack.Screen name='ConfirmationCodeScreen' component={ConfirmationCodeScreen}/>
        </Stack.Navigator>
    );
}