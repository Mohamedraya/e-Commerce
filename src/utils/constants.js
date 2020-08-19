import {Dimensions} from 'react-native';

const TESTING_DEVICE_WIDTH  = 411;

export const rem = Dimensions.get('window').width / TESTING_DEVICE_WIDTH;

export const CURRENCY = '$';

export const TOKEN_KEY = 'Hossam.keys.TOKEN';

export const USER_KEY  = 'Hossam.keys.USER';

export const BASE_URL  = 'https://api.github.com';

export const SELECTED_ADDRESS_ID_KEY = 'Hossam.keys.SELECTED_ADDRESS_ID';

export const IMAGES_URL = 'http://HossamProject.com/uploads/';

export const orderStatusMapper = {
    0: 'REVIEW',
    1: 'PROCESSING',
    2: 'SHIPPED',
    3: 'DELIVERED',
    4: 'REVIEW FOR RETURN',
    5: 'RETURNED',
    6: 'NOT RETURNED'
};