import React from 'react';
import {Text} from 'react-native';
import {selectAddress} from '../../Redux/Actions';
import {useDispatch,useSelector} from 'react-redux';
import styles from './styles';

export function Address (props) {

    const {address} = props;
    const selectedAddressId = useSelector(state => state.auth.selectedAddressId);
    const dispatch = useDispatch();
    return (
        <Text 
            onPress= {() => {dispatch(selectAddress(address._id))}}
            style= {address._id === selectedAddressId ?
            styles.selectedAddress:{}}
            >{`
         name    : ${address.name}
         phone   : ${address.phone}
         city    : ${address.city}
         area    : ${address.area}
         street  : ${address.street}
         Building: ${address.Building}
         `}
         </Text>
    );
}