import React from 'react';
import {View,Text,Image} from 'react-native';
import {Price} from '../Price';
import {AddToCartButton} from '../AddToCartButton';
import {PlatformTouchable} from '../PlatformTouchable';
import {useNavigation} from '@react-navigation/native';
import {IMAGES_URL} from '../../utils/constants';
import {Card} from '../Card';
import styles from './styles';
import { getActualPrice } from '../../utils/helperfunction';

export function CartItem (props) {

    const {CartItem} = props;
    const navigation = useNavigation();
    return (
        <Card style={styles.outerContainer}>
          <PlatformTouchable style={styles.container} onPress={() => navigation.navigate('ProductScreen')}>
             <Image source={{uri: IMAGES_URL+'products/resized/'+ CartItem.product.images[0]}} style={styles.image}/>
              <View style={styles.wrapper}>
                <Text numberOfLines={1}>{CartItem.product.title}</Text>
                <Price price={CartItem.product.price} discount={CartItem.product.discount}
                       count={CartItem.count}/>
                <AddToCartButton productId={CartItem.product._id} 
                                 cost={getActualPrice(CartItem.product.price,CartItem.product.discount)} 
                                 count={CartItem.product.increaseCount}/>
              </View>
          </PlatformTouchable>
        </Card> 
    );
}