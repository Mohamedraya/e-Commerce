import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen}     from '../Screens/Cart';
import {ProductScreen}  from '../Screens/Product';
import {CheckoutScreen} from '../Screens/Checkout';
import {AddAddressScreen} from '../Screens/AddAddressScreen';


const Stack = createStackNavigator();

export function CartStack (props) {
    return(
        <Stack.Navigator>
            <Stack.Screen name='CartScreen'        component={CartScreen}
                          options={{headerShown: false}}/>
            <Stack.Screen name='ProductScreen'     component={ProductScreen}/>
            <Stack.Screen name='CheckoutScreen'    component={CheckoutScreen}/>
            <Stack.Screen name='AddAddressScreen'  component={AddAddressScreen}/>
        </Stack.Navigator>
    );
}