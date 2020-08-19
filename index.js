import 'react-native-gesture-handler';
if(__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
  }
import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {configureAxios,configureApiRequestBoilerplateActions} from './src/utils/helperfunction';
import store from './src/Redux/store';
import {Provider} from 'react-redux';
import Reactotron from './ReactotronConfig';

global.r = Reactotron;// اعملها جلوبال عشان استخدمها ف اي مكان بدل ما اعملها ايمبورت كل شويه


const connectedApp = () => {
     <Provider store = {store}>
         <App/>
     </Provider>
};


configureAxios();
configureApiRequestBoilerplateActions();

AppRegistry.registerComponent(appName, () => connectedApp);
