import React from 'react';
import {View,Text, FlatList, ActivityIndicator} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {CartItem} from '../../Components/CartItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {totalSelector} from '../../Redux/Selectors';
import {EmptyList} from '../../components/EmptyList';
import {IonIcon} from '../../components/IonIcon';
import styles from './styles';

function EmptyCart() {
     return <EmptyList renderIcon={() =><IonIcon name='cart'/>} renderText={() =><Text>Empty cart</Text>}/>
}


function rendercartItem ({item}) {
    return <CartItem cartItem = {item}/>
}

function renderCartItems (cartItems,isFetchingItems) {
    return isFetchingItems ? <ActivityIndicator/> : (
           <FlatList data={cartItems} renderItem={rendercartItem}
                     ListEmptyComponent={EmptyCart}/>
    ); 
}

export function CartScreen (props) {

    const {navigation} = props;
    const cartItems = useSelector(state => state.cart.cartItems);
    const isFetchingItems = useSelector (state => state.cart.fetchCartItemsLoadinf);
    const total     = useSelector(totalSelector());
    return (
        <SafeAreaView style={styles.container}>
            {renderCartItems(cartItems,isFetchingItems)}
           
             <View style={styles.wrapper}>
               <Text style={styles.text}>Total = {total} $</Text>
               <AppButton title= 'Checkout' titleStyle={styles.checkouttitle}
                          onPress={() => {navigation.navigate('CheckoutScreen');}}
                          disabled = {cartItems.length === 0}/>
             </View>                     
        </SafeAreaView>
    );
}