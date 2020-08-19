import {config} from 'api-request-biolerplate-actions';
import axios from 'axios';
import store from '../Redux/store';
import {BASE_URL} from './constants';
import {errorCodeMessageMapper} from '../utils/errorCodes';

export const formateTimer = totalSeconds => {

    const seconds = totalSeconds % 60;
    const minutes = (seconds - totalSeconds) / 60;
    return appendZero(minutes) + ':' + appendZero(seconds);
};

const appendZero = val => {
    if (val >= 0 && val <= 9) {
        return '0' + val;
    }

    return val;
};

export const getActualPrice = (price,discount) => {

    if(discount) {
        return price - price * discount; // discount = 0.2
    }

    return price;
};

export const configureAxios = () => {
    axios.defaults.baseURL = BASE_URL;
};

export const configureApiRequestBoilerplateActions = () => {
      config(store.dispatch , BASE_URL);
};

export const showError = errorCode => {
    alert(errorCodeMessageMapper[errorCode]);
};

export const cutLongName = (name , maxChar= 12) => {

    if (name.Length > maxChar) {
       return name.slice(0 , maxChar - 3) + '...';
    }
    return name;
};