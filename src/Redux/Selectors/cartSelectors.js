import {getActualPrice} from '../../utils/helperfunction';


export function totalSelector (state) {
     const {cartItems} = state.cart;

     const total = cartItems.reduce((acc , item) => {
         return acc + cartItems.count * getActualPrice(item.product.price , item.product.discount)
     } , 0);

     return total.toFixed(2);
}