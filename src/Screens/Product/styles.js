import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const imgDim = width;

const styles = ScaledSheet.create({

    container: {
        flex: 1
    },

    image: {
       width: imgDim,
       height: imgDim
    },

    icontitleWrapper: {
        position: 'absolute',
        flexDirection: 'row'
    },

    backIcon: {
      fontSize: '32@s',
      color: '#fff',
      paddingStart:'10@s',
      paddingVertical: '10@s'
    },

    titleWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    productTitle: {
        fontSize: '18@s',
        color: '#fff'
    },

    buttonWrapper: {
        justifyContent:'center',
        marginBottom: '20@s',
        paddingHorizontal: '20@s',
        paddingVertical: '5@s'
    },

    wrapper: {
        flex: 1,
        padding: '10@s'
    }
});

export default styles;