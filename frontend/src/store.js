import { createStore } from 'redux';

// Define your initial state
const initialState = {
    myVariable: '',
};

// Define your reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VARIABLE':
            return {
                ...state,
                myVariable: action.payload,
            };
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
