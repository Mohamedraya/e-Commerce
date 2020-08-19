import React from 'react';
import {Card} from '../Card';
import {useNavigation} from '@react-navigation/native';
import {PlatformTouchable} from '../PlatformTouchable';
import {IMAGES_URL} from '../../utils/constants';
import {cutLongName} from '../../utils/helperfunction';
import styles from './styles';

export function Category (props) {
    const {category} = props;
    const navigation = useNavigation();
    return (
        <PlatformTouchable style={styles.container} onPress={() => navigation.navigate('CategoryScreen',{category})}>
            <Card>
             <Image source={{uri: IMAGES_URL +'cat/thumbs/resized/'+category.image}} style={styles.image}/>
            </Card>
            
            <Text style={styles.title}>{cutLongName(category.name)}</Text>
        </PlatformTouchable>
    );
}