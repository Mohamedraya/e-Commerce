import React, { useState } from 'react';
import { View } from 'react-native';
import {Input} from '../../components/input';
import {AppButton} from '../../components/AppButton';
import styles from './styles';
import {updateUserName} from '../../Redux/Actions';
import {useDispatch,useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperfunction';
import {errorCodeMessageMapper} from '../../utils/errorCodes';


export function UpdateAccountScreen (props) {

    
    const {navigation} = props;
    const dispatch  = useDispatch();
    const isLoading = useSelector(state => state.auth.changeNameLoading);
    const success   = useSelector(state => state.auth.updateNameSuccess);
    const error     = useSelector(state => state.auth.changeNameError);
    const user      = useSelector(state => state.auth.user);
    const [input,setInput] = useState({value: user.name ||'' , isValid:false});

    const updateInput = value => {
         setInput({
             value,
             isValid: value !== '' && value !== user.name
         });
    };

    useUpdateEffect( () => {
       navigation.goBack();
    } , [success]);

    useUpdateEffect( () => {
        showError(errorCodeMessageMapper[error.errorCode]);
     } , [error]);

    return (
        <View style={styles.container}>
            <View>
             <Input placeholder= 'name'   stacked style={styles.input}
                    onChangeText={updateInput} value={input.value}/>
            </View>
           
           <AppButton title= 'Save' onPress= {() => dispatch(updateUserName(input.value))}
                      isLoading = {isLoading} disabled= {!input.isValid}/>
        </View>
    );
}