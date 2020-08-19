import * as ActionTypes from '../Actions/ActionTypes';
import {highOrederReducer} from 'api-request-biolerplate-actions';


const initialState = {
    products: [],
    page: 1
};

function searchReducer (state= initialState , action) {
    switch (action.type) {
        case ActionTypes.APPEND_SEARCH_PRODUCTS:
            return {...state , products: action.payload.products};

        case ActionTypes.SET_SEARCH_PRODUCTS_PAGE:
            return {...state , page: action.payload.nextPage}    

            default:
                return state;
    }
}

export default highOrederReducer(initialState ,[
    {
        requestEndPoint: 'product/search',
        baseActionType : 'fetchSearchProducts'
    }
], searchReducer);