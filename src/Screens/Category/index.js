import React, { useEffect, useState, useCallback } from 'react';
import {View,Text,FlatList} from 'react-native';
import {fetchChildrenCategories,fetchCategoryProducts, selectedAddress} from '../../Redux/Actions';
import {useDispatch,useSelector} from 'react-redux';
import {ChildrenCategory} from '../../components/ChildrenCategory';
import {ProductsList} from '../../components/ProductsList';
import styles from './styles';

function renderChildrenCategory (item,selectedCategory,setSelectedCategory) {
    return <ChildrenCategory category= {item} selectedCategory= {selectedCategory}
                             setSelectedCategory={setSelectedCategory}/>
} 

const keyExtractor = item => item._id;

function renderChildrenCategories (childrenCategories,selectedCategory,setSelectedCategory) {
    const renderItem = useCallback(({item}) => renderChildrenCategory(item,selectedCategory,setSelectedCategory)
    ,[selectedCategory,setSelectedCategory]);

    return <FlatList data= {childrenCategories} renderItem={renderItem}
                     horizontal keyExtractor= {keyExtractor}/>
}

export function CategoryScreen (props)  {

    const {category} = props.route.params;
    const {selectedCategory,setSelectedCategory} = useState(category);
    const {childrenCategories} = useSelector(state => state.home.childrenCategories[category._id]||[]);
    const dispatch = useDispatch();
    const Products = useSelector(state => state.home.categoryProducts[selectedCategory._id],)||[];
    const isFetchingProducts = useSelector(state => state.home.isFetchingCategoryProducts[selectedCategory._id]);

    useEffect(() => {
      childrenCategories.length === 0 && dispatch(fetchChildrenCategories(category._id));
      
    } , []);

    useEffect(() => {
        childrenCategories.length === 0 &&  dispatch(fetchCategoryProducts(selectedCategory));
    } , [setSelectedCategory]);

    return (
        <View style={styles.container}>
            {renderChildrenCategories([category,...childrenCategories],
                selectedCategory,setSelectedCategory)}
            <Text style={styles.headerText}>Products</Text>
            <ProductsList data= {Products} onEndReachedThreshold={0.5} 
                          onEndReached={() => dispatch(fetchCategoryProducts(category))}
                          isLoading = {isFetchingProducts}/>
        </View>
    );
};