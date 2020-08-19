import {StyleSheet} from 'react-native';

const buttonColor = 'black';
const textColor = 'white';

const styles = StyleSheet.create({
    wrapper: {
        minWidth: 200,
        minHeight: 50,
        
    },

    button: {
        flex: 1
    },

    increaseDecreaseContainer: {
        flexDirection: 'row',
        backgroundColor: '#bbb',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#bbb'
    },

    text: {
        fontSize: 20
    },


    minPlus: {
        padding: 10
    }
});

export default styles;