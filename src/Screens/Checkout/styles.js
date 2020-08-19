import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({

    container: {
        flex: 1,
        padding: '10@s',
        justifyContent: 'space-between'
    },
 
    addressSection: {
       borderWidth: 1,
       borderRadius: 10,
       padding: '10@s',
      
    },

    shiptoText: {
        fontSize: '20@s',
        fontWeight: 'bold'
    },

    updateWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    updateText: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: '16@s'
    },

    horizontalLine: {
        height: 1,
        backgroundColor: '#bbb',
        marginVertical: '5@vs'
    },

    orderCostRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

   

    key: {
        fontSize: '16@s'
    },

    value: {
        fontSize: '15@s'
    },

    successWrapper: {
        Position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '@eeeeee80',
        top: 0,
        bottom:0,
        right: 0,
        left: 0
    }

});

export default styles;