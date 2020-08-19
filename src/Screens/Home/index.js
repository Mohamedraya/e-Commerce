import React, { useEffect } from 'react';
import {View,Text,FlatList, ActivityIndicator} from 'react-native';
import {Category}  from '../../components/Category';
import {ProductsList} from '../../components/ProductsLists';
import {useSelector,useDispatch} from 'react-redux';
import {fetchHomeData} from '../../Redux/Actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperfunction';


function renderCategory ({item}) {
    return <Category category={item}/>
}

function renderCategoriesList (categories,isFetchingCategories) {
    return isFetchingCategories ? <ActivityIndicator/> : (
        <FlatList data={categories} renderItem={renderCategory} horizontal={true}/>
    );
}

export function HomeScreen (props)  {

    const dispatch = useDispatch();
    const categories      = useSelector(state => state.home.home.categories);
    const products        = useSelector(state => state.home.home.productes); 
    const CategoriesError = useSelector(state => state.home.fetchHomeCategoriesError);
    const ProductsError   = useSelector(state => state.home.fetchHomeProductsError);
    const isFetchingCategories = useSelector(state => state.home.getHomeCategoriesLoading);
    const isFetchingProducts = useSelector(state => state.home.getHomeProductsLoading);

    useUpdateEffect(() => {
        showError(CategoriesError.errorCode);
    } , [CategoriesError]);

    useUpdateEffect(() => {
        showError(ProductsError.errorCode);
    } , [ProductsError]);

    useEffect(() => {
       dispatch(fetchHomeData());
    } , []);

    return (
        <View>            
            <Text>Categories</Text>
            {isLoading && <ActivityIndicator/>}
            {renderCategoriesList(categories,isFetchingCategories)}
            <Text>Products</Text>
            {isFetchingProducts ? <ActivityIndicator/> : <ProductsList data={products}/>}
        </View>
    );
};