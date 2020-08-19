import React from 'react';
import {View,Text,Image} from 'react-native';
import {IMAGES_URL} from '../../utils/constants';
import {cutLongName} from '../../utils/helperfunction';
import {PlatformTouchable} from '../../components/PlatformTouchable';
import styles from './styles';

export function ChildrenCategory (props) {
    const {category,selectedCategory,setSelectedCategory} = props;

    return <PlatformTouchable style= {styles.wrapper}
                        onPress= {() => setSelectedCategory(category)}> 
             <Image source={{uri: IMAGES_URL+'cat-thumbs/resized/'+category.image}}
                    style= {styles.image}/>

             <View style={styles.titleWrapper}>
                <Text style= {[styles.title,category._id === selectedCategory._id? styles.selectedTitle:null]}>{category.parentId ? cutLongName(category.name):'All'}</Text>
             </View>                   
           </PlatformTouchable>   
}