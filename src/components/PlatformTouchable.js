import React from 'react';
import {TouchableOpacity,TouchableNativeFeedback,Platform, View} from 'react-native';

class PlatformTouchable extends React.Component{
    render () {
        //const Touchable = Platform.OS === 'android'? 
                         // TouchableNativeFeedback : TouchableOpacity;
          const {style,children,...rest} = this.props;

          const Touchable = Platform.select({
              android: TouchableNativeFeedback,
              ios: TouchableOpacity
          });               
        return(
            <Touchable {...rest}>
               <View style={style}>{children}</View>
            </Touchable>
        );
    }
}

export default PlatformTouchable;