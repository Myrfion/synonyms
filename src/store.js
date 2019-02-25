import {createStore} from 'redux';
import rootReducer from './reducers';

const initialState = {
    query: "refuse",
    loading: false,
    list :[
        
    ],
    saved: [
        
    ]
}

const store = createStore(rootReducer,initialState);

export default store;
