import React, { useEffect, useCallback } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import {Order} from '../../components/Order';
import styles from './styles';
import {getOrders} from '../../Redux/Actions';
import {useDispatch,useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperfunction';
import {EmptyList} from '../../components/EmptyList';

function renderOrder ({item}) {
    return <Order order= {item}/>;
}

function keyExtractor(order) {
    return order._id;
}

function renderOrders (Orders , isFetchingOrders,Empty) {
    
    return <FlatList data={Orders} renderItem={renderOrder} keyExtractor={keyExtractor}
                     ListEmptyComponent= {Empty} contentContainerStyle={styles.list}/>;
}


export function OrdersScreen (props) {

    const dispatch = useDispatch();
    const error    = useSelector(state => state.auth.getOrdersError);
    const isFetchingOrders = useSelector(state => state.auth.getOrdersLoading);
    const orders   = useSelector(state => state.auth.orders);
    const Empty = useCallback(() => (!isFetchingOrders ? <EmptyList/> : null)
                              ,[isFetchingOrders]);

    useEffect(() => {
        dispatch(getOrders());
    } ,[]);

    useUpdateEffect(() => {
        showError(error.errorCode);
    },[error]);

    return (
        <View style={styles.container}>
           { isFetchingOrders ? <ActivityIndicator/> : renderOrders(orders,isFetchingOrders,Empty)}
        </View>
    );
}