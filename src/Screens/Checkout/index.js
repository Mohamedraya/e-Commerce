import React, { useState } from 'react';
import { View , Text} from 'react-native';
import {AppButton}    from '../../components/AppButton';
import {CURRENCY}     from '../../utills/constants';
import {Address}      from '../../components/Address';
import {totalSelector} from '../../Redux/Selectors';
import {useSelector,useDispatch}  from 'react-redux';
import {PlatformTouchable} from '../../components/PlatformTouchable';
import {makeOrder} from '../../Redux/Actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {OrderDone} from '../../components/OrderDone';
import styles from './styles';

function renderAddressSection (address,navigation) {
    return(
       <PlatformTouchable style={styles.addressSection} onPress={()=>{
           navigation.navigate('AddAddressScreen');
        }}>
           <Text style={styles.shiptoText}>Ship to</Text>
           {address ? <Address address={address}/> : <Text>Select Address</Text>}
           <View style={styles.updateWrapper}>
            <Text >Update</Text>
           </View>  
       </PlatformTouchable>
    );
}

function renderCostOrderRow (key,value) {
    return (
        <View style={styles.orderCostRow}>
            <Text style={styles.key}>{key}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

function renderOrderCostSection (total) {
    return(
        <View>
            {renderCostOrderRow('Subtotal' , CURRENCY + total)}
            {renderCostOrderRow('Shipping' , 'free')}
            <View style={styles.horizontalLine}/>
            {renderCostOrderRow('total'    , CURRENCY + total)}
        </View>
    );
}

function renderButton (address,dispatch) {
    return(
        <AppButton title= 'Buy' disabled={!address} 
                   onPress={() => {dispatch(makeOrder())}}/>
    );
}

export function CheckoutScreen (props) {

    const {navigation} = props;
    const [shouldShowsuccess,setShouldShowSuccess] = useState(false); 
    const dispatch  = useDispatch();
    const addresses = useSelector(state => state.auth.user.addresses);
    const selectedAddressId = useSelector(state => state.auth.selectedAddressId);
    
    const address = addresses.find(item => item._id === selectedAddressId);
    const total   = useSelector(totalSelector());
    const success = useSelector(state => state.cart.makeOrderSuccess);
 
    useUpdateEffect(() => {
        setShouldShowSuccess(true);
    } , [success]);
    return (
        <View style={styles.container}>  
          {renderAddressSection(address,navigation)}
          {renderOrderCostSection(total)}
          {renderButton(address,dispatch)}
          {shouldShowsuccess && (
              <View style= {styles.successWrapper}>
                  <OrderDone okHandler={() => {setShouldShowSuccess(false)}}/>
              </View>
          )}
        </View>
    );
} 