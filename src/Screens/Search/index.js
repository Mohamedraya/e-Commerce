import React, { useState } from 'react';
import {View, SafeAreaView} from 'react-native';
import {Input} from '../../components/input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector,useDispatch} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {ProductsList} from '../../components/ProductsList';
import styles from './styles';
import { searchForProduct } from '../../Redux/Actions/searchActionCreator';

function renderSearchIcon () {
    <Icon name='Search' style={styles.searchIcon}/>
}

export function SearchScreen (props) {

    const [input,setInput] = useState('');
    const [products , setProducts] = useState([]);
    const dispatch = useDispatch();
    const reduxProducts = useSelector(state => state.search.products);
    const isFetchingProducts = useSelector(state => state.search.fetchSearchProductsLoading);

    useUpdateEffect(() => {
       setProducts(products.concat(reduxProducts));
    } , [reduxProducts]);

    const fetchProducts = () => {
        dispatch(searchForProduct(input,true));
    }

    const continueFetchProducts = () => {
        dispatch(searchForProduct(input));
    }

    useUpdateEffect(() => {
        setProducts([]);
        input && fetchProducts();
    } , [input]);

    return (
        <SafeAreaView style={styles.outerContainer}>
        
           <Input placeholder= 'Type Here...' bordered  onChangeText={setInput}
                  renderIconRight={renderSearchIcon()}  wrapperStyle={styles.input}/>
        
        {
            input ?  <ProductsList data={products} onEndReachedThreshold={0.5} 
            onEndReached={continueFetchProducts} isLoading={isFetchingProducts}/>:
            null
        }
       
        </SafeAreaView>
        
    );
}