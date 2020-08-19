import React, { useCallback } from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {EmptyList} from '../../components/EmptyList';
import {Product} from '../Product';

function renderProduct ({item}) {
    return <Product product= {item}/>;
}

export function ProductsList (props) {
    const {isLoading} = props;
    const loading = useCallback(() => (isLoading  ? <ActivityIndicator/> : null ),
    [isLoading]);
    const Empty   = useCallback(() => (!isLoading  ? <EmptyList/> : null ),
    [isLoading]);

    return <FlatList  renderItem={renderProduct} numColumns={2}
                     ListFooterComponent={loading} ListEmptyComponent={Empty}
                     {...props}/>;
}