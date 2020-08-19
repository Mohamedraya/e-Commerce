import {ScaledSheet} from 'react-native-size-matters';
import {TINT_COLOR} from '../../utils/colors';

const styles = ScaledSheet.create({

    container: {
       alignItems: 'center',
       backgroundColor: 'white',
       paddingHorizontal: '40@s',
       paddingVertical: '10@s'
    },

    icon:{
        color: TINT_COLOR,
        fontSize: '64@s'
    },
    congratesText: {
        fontSize: 20,
        marginVertical: '10@vs'
    },
    orderDoneText:{
        marginVertical: '10@vs'
    },
    okText: {
        color: TINT_COLOR,
        marginVertical: '10@vs'
    }
});

export default styles;