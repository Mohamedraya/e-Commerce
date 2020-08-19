import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen        from '../Screens/Account';
import {AddAddressScreen}     from '../Screens/AddAddressScreen';
import {UpdateAccountScreen}  from '../Screens/UpdateAccount';
import {OrdersScreen}         from '../Screens/Orders';


const Stack = createStackNavigator();

export function AccountStack (props) {
    return(
        <Stack.Navigator>
            <Stack.Screen    name='AccountScreen'       component={AccountScreen}
                             options={{headerShown: false, headerBackTitleVisible:false}}/>
            <Stack.Screen    name='AddAddressScreen'    component={AddAddressScreen}
                             options={{headerBackTitleVisible: false,title: 'Add Address'}}/>
            <Stack.Navigator name='UpdateAccountScreen' component={UpdateAccountScreen}
                             options={{headerBackTitleVisible: false}}/>
            <Stack.Navigator name='OrdersScreen'        component={OrdersScreen}
                             options={{headerBackTitleVisible: false}}/>
        </Stack.Navigator>
    );
}