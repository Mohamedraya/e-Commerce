import React from 'react';
import {View,Text} from 'react-native';
import {getActualPrice} from '../../utills/helperfunction';
import styles from './styles';
import {CURRENCY} from '../../utills/constants';

export function Price (props) {

    const {price,discount,count} = props;
    const actualCount = count || 1;
    return (
        <View style={styles.container}>
            <Text style={styles.price}>{CURRENCY}{(actualCount * getActualPrice(price,discount)).toFixed(2)}</Text>
           {discount ? <Text style={styles.oldPrice}>{CURRENCY}{(actualCount * price.toFixed(2))}</Text>:null} 
        </View>
    );
}