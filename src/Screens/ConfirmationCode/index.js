import React from 'react';
import { View ,Text} from 'react-native';
import styles  from './styles';
import {Input} from '../../components/input/index';
import {AppButton} from '../../components/AppButton/AppButton';
import {UseInput} from '../../utils/useInput';
import {useDispatch,useSelector} from 'react-redux';
import {confirmCode} from '../../Redux/Actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperfunction';
import {errorCodeMessageMapper} from '../../utils/errorCodes';




 function ConfirmationCodeScreen (props) {

  const {navigation} = props;

  const {phone} = props.route.params;

  const [input,changeInput] = UseInput('' , [{key:'isConfirmationCode'}]);
  const isLoading = useSelector(state => state.auth.isConfirmationCode);
  const failure     = useSelector(state => state.auth.ConfirmCodeFaliure);
  const dispatch  = useDispatch();


  useUpdateEffect(() => {
     showError(errorCodeMessageMapper[failure.errorCode]);
  } , [failure]);
 
  const doneHandler = () => {
    if (input.isValid) {
      dispatch(confirmCode(phone,input.value));
    }
    
  }
    return(
       <View style={styles.container}>
          <View style={styles.textWrapper}>
            <Text>Enter Confirmation Code</Text>
          </View> 
           <Input style={styles.input} placeholser='----' bordered
                  placeholserPosition='center' onChangeText={changeInput}
                  onSubmitEditing={doneHandler} keyboardType='numeric'/>
           <View style={styles.buttonWrapper}>
             <AppButton title ='Done' onPress={doneHandler} disabled={!input.isValid}
                        isLoading={isLoading}/>
           </View>
           
       </View>
    );
}


const mapDispatchToProps = disPatch => ({
  setToken : token => disPatch({type: 'SET_TOKEN' , payload: {token}}),
  setUser  : user  => disPatch({type: 'SET_USER'  , payload: {user}}),
});

export default connect(null, mapDispatchToProps) (ConfirmationCodeScreen);