import {createStore ,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Reactotron from '../../ReactotronConfig';
import appReducer from './Reducers';


// createStore : دي عشان احط فيها الريديوسر او مجموعة ريديوسر واعملهم كامبين ف ريديوسر واحد بس
const store = createStore(appReducer , 
    composeWithDevTools(applyMiddleware(thunk,logger),
    Reactotron.createEnhancer(),
    ),
    );

export default store;