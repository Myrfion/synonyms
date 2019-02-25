const rootReducer = (state,action) => {
    switch(action.type){
        case "FETCH_DATA_SUCCESS":
            return {...state, list: action.payload, loading: false}
        case "FETCH_START":
            return {...state, loading: true};
        case "ADD_ITEM":
            return{...state, saved: [...state.saved,action.payload] }
    }
    return state;
}

export default rootReducer;