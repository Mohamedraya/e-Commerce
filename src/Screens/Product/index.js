import React, { useEffect, useState } from 'react';
import {View,Image,Text,SafeAreaView,ScrollView} from 'react-native';
import {AddToCartButton} from '../../components/AddToCartButton';
import {Price} from '../../components/Price';
import { dummyProduct1} from '../../utills/dummyData';
import {IonIcon} from '../../components/IonIcon';
import {useDispatch,useSelector} from 'react-redux';
import {fetchProduct} from '../../Redux/Actions';
import {IMAGES_URL} from '../../utils/constants';
import {getActualPrice} from '../../utils/helperfunction';
import styles from './styles';

// هعمل فونكشن تجيب البرودوكت اوبجيكت م البرودوكت اي دي
function getProduct(productId) {
    return dummyProduct1;
}

export function ProductScreen (props) {
    const {productId} = props.router.Params;
    const {navigation} = props;
    const {product,setProduct} = useState();
    const dispatch = useDispatch();

    const reduxProduct = useSelector(state => state.home.products);

    useEffect(() => {

      if (reduxProduct && reduxProduct._id === productId) {
        setProduct(reduxProduct);
      }
    } , [reduxProduct]);

    useEffect(() => {
       dispatch(fetchProduct(productId));
    } , []);
    return product ? (
        <SafeAreaView style={styles.container}>
          <ScrollView>
           <View>
            <Image source={{uri: IMAGES_URL+'/products'+ images[0]}} style={styles.image}/>
              <View style={styles.icontitleWrapper}>
              <IonIcon name={'-arrow-back'} style={styles.backIcon}
                       onPress= {() => navigation.goBack()}/>
              <View style={styles.titleWrapper}>
               <Text style={styles.productTitle}>{product.title}</Text>
              </View>
          </View>
            </View>          
          <View style={styles.wrapper}>
           <Price price={product.price} discount={product.discount}/>
           <Text>Description</Text>
           <Text>{product.details}</Text>
           
          </View>
          </ScrollView>
          <View style={styles.buttonWrapper}>
            <AddToCartButton productId= {productId} cost={getActualPrice(product.Price,product.discount)} 
                             count={product.increaseCount}/>
           </View>
        </SafeAreaView>
    ) : null;
}