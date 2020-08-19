import React from 'react';
import {View,Text} from 'react-native';
import {IonIcon}   from '../../components/IonIcon';
import {Card} from '../Card';
import styles from './styles'; 


export function OrderDone (props) {
    const {onHandler} = props;
    return (
        <Card style= {styles.container}>
            <IonIcon name='checkmark-circle-outLine' style={styles.icon}/>
            <Text style={styles.orderDoneText}>Congrates</Text>
            <Text style={styles.orderDoneText}>Your Order is Done</Text>
            <Text style={styles.okText} onPress={onHandler}>Ok</Text>
        </Card>
    );
}

