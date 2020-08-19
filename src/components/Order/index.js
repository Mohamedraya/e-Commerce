import React from 'react';
import {View,Text,Image} from 'react-native';
import {Price} from '../Price';
import {Card} from '../Card';
import styles from './styles';
import {IMAGES_URL,orderStatusMapper} from '../../utils/constants';

export function Order (props) {

    const {order} = props;
    const firstCartItem = order.items[0];
    return (
        <Card>
          <View style={styles.container}>
              <Image source={{uri: IMAGES_URL + 'products/resized'+ firstCartItem.product.images[0]}} style={styles.image}/>
              <View style={styles.wrapper}>
                <Text numberOfLines={1}>{firstCartItem.product.title}</Text>
                <Price price={order.totalCost} />
                <View style={styles.statusWrapper}>
                 <Text>{orderStatusMapper[order.status]}</Text>
                </View> 
              </View>
          </View>
        </Card>
        
    );
}