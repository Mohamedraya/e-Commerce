import React, { useState } from 'react';
import { View ,Text} from 'react-native';
import {AppButton} from '../AppButton';
import {useSelector,useDispatch} from 'react-redux';
import {addToCart,updateCartItem} from '../../Redux/Actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperfunction';
import styles from './styles';

export function AddToCartButton (props) {

    const {productId , cost , count} = props;
    const dispatch = useDispatch();
    const cartItems   = useSelector(state => state.cart.cartItems);
    const matchingCartItem = cartItems.find(item => item.product._id === productId);
    const cartItemCount = matchingCartItem ? matchingCartItem.count : 0;
    const isAddingToCart = useSelector(state => state.cart.isAddingToCart[productId]);
    const error = useSelector(state => state.cart.addProductToCartError);

    useUpdateEffect(() => {
      showError(error.errorCode);
    } , [error]);

   

    renderInitialButton = () => {
      return <AppButton title='add to cart' wrapperStyle={styles.wrapper}
                        isLoading={isAddingToCart} onPress={IncrementQuantityHandler}/>;
    }

    

    IncrementQuantityHandler = () => {
        if (cartItemCount === 0) {
            dispatch(addToCart(productId,cost,count));
        }
        else {
            dispatch(updateCartItem(matchingCartItem._id,'increase',count));
        }
        
    }

    DecrementQuantityHandler = () => {
        const action = cartItemCount === 1?'delete':'decrease';
        dispatch(updateCartItem(matchingCartItem._id,action,count));
    };

    renderIncreaseDecreaseButton = () => {
       return (
           <View style={[styles.increaseDecreaseContainer,styles.wrapper]}>
               <Text style={styles.minPlus}
                     onPress={this.DecrementQuantityHandler}
               >-</Text>
               <Text style={{color: 'white'}}>{cartItemCount}</Text>
               <Text style={styles.minPlus}
                     onPress={this.IncrementQuantityHandler}
               >+</Text>
           </View>
       );
    }
    
        return (cartItemCount === 0 ? this.renderInitialButton():
                            this.renderIncreaseDecreaseButton());
 
    
}