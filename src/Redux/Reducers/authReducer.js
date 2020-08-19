import * as ActionTypes from '../Actions/ActionTypes';
import {highOrderReducer} from 'api-request-biolerplate-actions';


const initialState = {
    token: '',
    user: null,
    orders: [],
    isSigningIN : false,
    signinSuccess: null,
    signinFaliure: null,
    isConfirmationCode : false,
    ConfirmCodeSuccess: null,
    ConfirmCodeFaliure: null,
    updateNameSuccess : null,
    addAddressSuccess : null,
    selectedAddressId : null,
    getOrdersSuccess  : null,
    userDataLoading: null
};

function authReducer (state = initialState , action) {
    switch (action.type) {
        case ActionTypes.SET_TOKEN:
            return {...state , token: action.payload.token};
            break;

        case ActionTypes.SET_USER:
            return {...state , user: action.payload.user};
            break;  
            
        case ActionTypes.SIGNIN_START: 
             return {...state , isSigningIN: true};
             break;
             
        case ActionTypes.SIGNIN_SUCCESS:
            return {...state , isSigningIN: false ,signinSuccess:{} };
            break;
            
        case ActionTypes.SIGNIN_FAILURE:
             return {...state , isSigningIN: false ,
                      signinFaliure:{errorCode: action.payload.errorCode}};
             break;
             
        case ActionTypes.CONFIRM_CODE_START: 
             return {...state , isConfirmationCode: true};
             break;
             
        case ActionTypes.CONFIRM_CODE_SUCCESS:
            return {...state , isConfirmationCode: false ,ConfirmCodeSuccess:{}};
            break;
            
        case ActionTypes.CONFIRM_CODE_FAILURE:
             return {...state , isConfirmationCode: false ,
                     ConfirmCodeFaliure:{errorCode: action.payload.errorCode}};
             break;

        case 'SUCCESS_' +  'userData' :
            return {...state , userDataLoading: {}};
             break;     
             
        case 'SUCCESS_' +  'changeName' :
            return {...state , updateNameSuccess: {}};
            break;

        case 'SUCCESS_' +  'addAddress' :
            return {...state , addAddressSuccess: {}};
            break;
            
        case ActionTypes.ADDRESS_SELECTED:
            return {...state , selectedAddressId: action.payload.addressId};
            
        case 'SUCCESS_' +  'getOrders' :
            return {...state , Orders: action.payload.data.orders};
            break;    
            
        default:
         return state;
    }
    
}

export default highOrderReducer (initialState,[{
    requestEndPoint:'/user/get-data',
    baseActionType: 'userData'
 },

 {
    requestEndPoint:'/user/change-name',
    baseActionType: 'changeName'
 },

 {
    requestEndPoint:'address',
    baseActionType: 'addAddress'
 },

 {
    requestEndPoint:'order',
    requestMethod: 'get',
    baseActionType :'getOrders'
 }

 ]
 ,authReducer);

 