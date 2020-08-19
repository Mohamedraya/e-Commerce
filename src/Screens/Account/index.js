import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {IonIcon} from '../../components/IonIcon';
import {PlatformTouchable} from '../../components/PlatformTouchable';
import {useSelector,useDispatch} from 'react-redux';
import {logout} from '../../Redux/Actions';
import styles from './styles';

function renderInfoSection (user,navigation,isFetchingUser) {
    return (
        <View style={styles.infoSection}>
           <IonIcon name= 'person' style={styles.personIcon}/>
           <View style={styles.verticalLine}/>
           {
               isFetchingUser ? <ActivityIndicator/> : (
           <View>
             <Text style={[styles.infoText,!user.name && styles.nameButton]}
                   onPress={() => {
                       !user.name && navigation.navigate('UpdateAccountScreen');
                   }}>{user.name || 'name'}</Text>
             <Text style={styles.infoText}>{user.phone}</Text>
           </View>
               )
           }
           
        </View>
    );
}

function renderButton (iconName , title , onPress) {
    <PlatformTouchable style={styles.wrapper} onPress={onPress}>
        <View style={styles.iconTitleWrapper}>
          <IonIcon name={iconName} style={styles.icon}/>
          <Text style={styles.title}>{title}</Text>
        </View>
     <View style={styles.horizontalLine}/>
    </PlatformTouchable>
}

function renderButtonSection(navigation,onDispatchlogout) {
    return (
        <View>
            {renderButton('person' , 'Profile', () => navigation.navigate('UpdateAccountScreen'))}
            {renderButton('locate' , 'Shipping Address', () => navigation.navigate('AddAddressScreen') )}
            {renderButton('cart' , 'Previous Order', () => navigation.navigate('OrdersScreen') )}
            {renderButton('log-out' , 'Log Out' , onDispatchlogout)}
        </View>
    );
}


 function AccountScreen (props) {

    const {navigation , user} = props;
    const user = useSelector(state => state.auth.user);
    const isFetchingUser = useSelector(state => state.auth.userDataLoading);
    const dispatch = useDispatch();

    const onDispatchlogout = () => dispatch(logout());
    
    return (
        <View style={styles.container}>
            {renderInfoSection(user,navigation,isFetchingUser)}
            {renderButtonSection(navigation,onDispatchlogout)}
        </View>
    );
}



export default  AccountScreen;