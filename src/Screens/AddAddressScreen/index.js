import React, { useState, useEffect } from 'react';
import { View ,ScrollView, ActivityIndicator} from 'react-native';
import {Input} from '../../components/input';
import {AppButton} from '../../components/AppButton';
import styles from './styles';
import {addAddress} from '../../Redux/Actions';
import {useDispatch,useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperfunction';
import {Address} from '../../components/Address';



export function AddAddressScreen (props) {

    const [inputs,setInputs]     = useState();
    const [isValid , setisValid] = useState(false);
    const isAddingAddress = useSelector(state => state.auth.addAddressloading);
    const success   = useSelector(state => state.auth.addAddresssuccess);
    const error     = useSelector(state => state.auth.addAddressError);
    const isFetchingUser = useSelector(state => state.auth.userDataLoading);
    const user      = useSelector(state => state.auth.user);
    const dispatch  = useDispatch();


    useUpdateEffect(() => {
       setInputs({});
    } ,[success]);

    useUpdateEffect(() => {
       showError(error.erorrCode);
    } ,[error]);

    //  دي فونكشن بترجع فونكشن تانيه
    // وانا ببعتلها الكيي وهي بترجعلك فونكشن تقدر تعمل ابديت لأنبوت موجود ف الأنبوتس 
    // من خلال الكيي بتاعه وهنا الفونكشن اللي بترجعها بتستقبل فالييو وبتحط الفالييو دي 
    // للكيي اللي جالها 
    
    
    const highOrderSetInput = key => {
        return value => {
            setInputs({...inputs , [key]: value });
        };
    };

    useEffect(() => {
       setisValid( inputs.name && inputs.phone  && inputs.city &&
                   inputs.Area && inputs.street && inputs.Building);
    } , [inputs]);

    return (
        <View style={styles.container}>
            <ScrollView>
             <Input placeholder= 'name'     stacked style={styles.input}
                    onChangeText={highOrderSetInput('name')}
                    value= {inputs.name || ''}/>
             <Input placeholder= 'Phone'    stacked style={styles.input}
                    onChangeText={highOrderSetInput('Phone')}
                    value= {inputs.phone || ''}/>
             <Input placeholder= 'City'     stacked style={styles.input}
                    onChangeText={highOrderSetInput('City')}
                    value= {inputs.city || ''}/>
             <Input placeholder= 'Area'     stacked style={styles.input}
                    onChangeText={highOrderSetInput('Area')}
                    value= {inputs.Area || ''}/>
             <Input placeholder= 'street'   stacked style={styles.input}
                    onChangeText={highOrderSetInput('street')}
                    value= {inputs.street || ''}/>
             <Input placeholder= 'Building' stacked style={styles.input}
                    onChangeText={highOrderSetInput('Building')}
                    value= {inputs.Building || ''}/>

                <Text style={styles.titleheader}>Added Addresses</Text>    

                {
                    isFetchingUser ? <ActivityIndicator/> : null
                }    

                {user.Addresses.map(address => {
                  return <Address address={address}/>
            })}
            </ScrollView>

           <AppButton title= 'Add' onPress= {() => {
               dispatch(addAddress(inputs));
           }}  isLoading={isLoading} disabled= {!isValid}/>
        </View>
    );
}