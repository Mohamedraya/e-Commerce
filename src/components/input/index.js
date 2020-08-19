import React from 'react';
import {TextInput, View} from 'react-native';
import {IonIcon} from '../IonIcon';
import {TINT_COLOR} from '../../utils/colors';

export function Input (props) {

    const {underLined ,underLineColor,underLineHeight,bordered,
           borderWidth,borderColor,borderRadius,placeholderPosition,
           renderIconRight,renderIconLeft,stacked,placeholder,
           style,wrapperStyle,showValidationFeedback,isValid,touched,...rest} = props;    
    return(
        <View style={bordered ?{borderWidth:borderWidth||2,borderColor:borderColor||'green',
                    borderRadius:borderRadius||5}:null}>
          
          {stacked ?<Text>{placeholder}</Text>:null }
          <View style={{flexDirection:'row'}}>
            {renderIconLeft ? renderIconLeft:null}  
            <TextInput {...rest} style={{flex:1, textAlign:placeholderPosition||'left'}}
                       placeholder={stacked? '' : placeholder} style/>
            {renderIconRight ? renderIconRight:null}
            {showValidationFeedback && touched && (<IonIcon name={isValid ? 'checkmark':'close'}
                                          style={{color: isValid ? TINT_COLOR : 'red'}}/>)}
          </View>              
          
          {
            underLined||stacked && <View style={{height:underLineHeight||3,
                                       backgroundColor:underLineColor||'green'}}/>
          }
        </View>
        
    );
}