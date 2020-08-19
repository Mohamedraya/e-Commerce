import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
         flex:1,
         paddingTop: '50@vs',
         paddingHorizontal: '20@s'
     },
     textWrapper:{
       alignItems: 'center'
     },
    text: {
        fontSize:'20@s',
    },
    icon: {
        fontSize:24
    },
    input: {
        paddingBottom: '10@vs'
    },
    buttonWrapper: {
        flex:1,
        justifyContent: 'flex-end',
        marginBottom:'20@vs'
    } 
});

export default styles;