import {ScaledSheet} from 'react-native-size-matters';
import { TINT_COLOR } from '../../utils/colors';

const styles = ScaledSheet.create({

    container: {
       flex: 1,
       padding: '10@s'
    },
      
    infoSection: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    personIcon: {
        fontSize: '40@s'
    },

    verticalLine: {
        width: 1,
        backgroundColor: '#bbb',
        
    },

    infoText: {
        fontSize: '20@s'
    },

    horizontalLine: {
        height: 1,
        backgroundColor: '#bbbbbb80'
    },

    iconTitleWrapper: {
        flexDirection: 'row'
    },

    icon: {
        fontSize: '24@s',
        marginEnd: '10@s'
    },

    title: {
        fontSize: '16@s'
    },

    wrapper: {
        marginVertical: '10@s'
    },

    nameButton: {
        color: TINT_COLOR,
        textDecorationLine: 'underline'
    }
});

export default styles;