import React ,{useState, useEffect} from 'react';
import {Text, View,StyleSheet,TextInput,Button, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {TOKEN_KEY,USER_KEY,SELECTED_ADDRESS_ID_KEY} from './src/utils/constants';
import {AppContainer} from './src/Navigation/index';
import {useSelector , useDispatch} from 'react-redux';
import {setToken ,setUser,getUserData,selectAddress,
 fetchCartItems} from './src/Redux/Actions';
import Reactotron from './ReactotronConfig';
import axios from 'axios';
import SplashScreen from 'react-native-splash-screen'





 function App (props) {

  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);

  
  useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY).then(val => {
       dispatch(setToken(val));
       SplashScreen.hide();
       if(val) {
        axios.defaults.headers.Authorization = 'Bearer' + val;
        dispatch(fetchCartItems());
        AsyncStorage.getItem(USER_KEY).then(user => {
           dispatch(setUser(JSON.parse(user)));
           dispatch(getUserData());
        });
       }
       
    });
  } , [token]);

  useEffect(() => {
    AsyncStorage.getItem(SELECTED_ADDRESS_ID_KEY)
    .then(addId => {dispatch(selectAddress(addId))});
  } ,[]);

  return token !== '' && <AppContainer isAuthenticated= {!!token}/>
     
  
}

const styles = StyleSheet.create({

  container : {
    flex: 1,
    justifyContent: "center"
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10
  }
});


export default App;

//01271145673

