import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import {totalSelector} from '../Selectors';


export const fetchCartItems = () => {
    return (dispatch,getState) => {
        axios.get('cart');
    };
};

export const setAddingProductToCart   = productId => ({
    type: ActionTypes.SET_ADDING_PRODUCT_TO_CART,
    payload: {productId}
});

export const clearAddingProductToCart = productId => ({
    type: ActionTypes.CLEAR_ADDING_PRODUCT_TO_CART,
    payload: {productId}
});

export const addProductToCartError = errorCode => ({
    payload: {errorCode}
});

export const updateCartItemImmeditly = (cartItemId,action) => ({
    type:ActionTypes.UPDATE_CART_ITEM_IMMEDIATLY,
    payload: {cartItemId,action}
});

export const makeOrder = () => {
    return (dispatch,getState) => {
        const selectedAddressId = getState().auth.selectedAddressId;
        const items = getState().cart.cartItems.map(item => item._id);
        const total = totalSelector(getState());
        axios.post('/order', {paymentMethod: 1 , shippingAddress: selectedAddressId , items , totalCost: total})
    };
};

export const addToCart = (productId , cost , count) => {
    return (dispatch,getState) => {
        dispatch(setAddingProductToCart(productId));
        axios.post('cart' , {product: productId , cost , count })
        .then(res => {
            dispatch(fetchCartItems());
        })
        .catch(err => {
            dispatch(addProductToCartError(err.errorCode));
        })
        .finally(() => {
            dispatch(clearAddingProductToCart(productId));
        });
    };
};

export const updateCartItem = (cartItemId,action,count) => {
    return (dispatch,getState) => {
       dispatch(updateCartItemImmeditly(cartItemId,action)); 
       axios.put({id: cartItemId,action,count})
       .catch(err => {
           dispatch(fetchCartItems());
       });
    };
};