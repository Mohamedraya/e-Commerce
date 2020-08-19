import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Input } from '../../components/input/index';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppButton } from '../../components/AppButton/index';
import { UseInput } from '../../utils/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../Redux/Actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import { showError } from '../../utils/helperfunction';
import {errorCodeMessageMapper} from '../../utils/errorCodes';

function renderphoneIcon() {
  return (
    <Icon name='call' style={styles.icon} />
  );
}

export function SignInScreen(props) {

  const { navigation } = props;
  const isLoading = useSelector(state => state.auth.isSigningIN);
  const success   = useSelector(state => state.auth.signinSuccess);
  const failure     = useSelector(state => state.auth.signinFaliure);
  const dispatch  = useDispatch();
 
  const [input, changeInput] = UseInput('', [{ key: 'isPhone' }]);
  
  // فكده انا عندي ايفيكت بيتنفذ ف حالة الأبديت بس
  useUpdateEffect(() => {
    navigation.navigate('ConfirmationCodeScreen' , {phone: input.value});
  } , [success]);

  useUpdateEffect(() => {
    showError(errorCodeMessageMapper[failure.errorCode]);
  } , [failure]);

  const doneHandler = () => {
    if (input.isValid) {
      dispatch(signIn(input.value));
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text>Enter Your Number</Text>
      </View>
      <Input style={styles.input}  placeholser='Phone' underLined renderIconLeft={renderphoneIcon()}
        onChangeText={changeInput} keyboardType='numeric' onSubmitEditing={doneHandler} 
        editable={!isLoading}/>
      <View style={styles.buttonWrapper}>
        <AppButton title='Done' onPress={doneHandler} disabled={!input.isValid}
          isLoading={isLoading} />
      </View>

    </View>
  );
}