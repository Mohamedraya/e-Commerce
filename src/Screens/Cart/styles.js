import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
        flex: 1
    },

    wrapperWrapper: {
       flex: 1,
       justifyContent: 'flex-end'
    },

    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10@s'
    },

    text: {
        fontSize: '18@s'
    },

    checkouttitle: {
        fontSize: '18@s'
    }
});

export default styles;
