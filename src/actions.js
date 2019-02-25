import store from './store';

const {dispatch} = store;

const fetchDataSucccess = (payload) =>{
    return{
        type: "FETCH_DATA_SUCCESS",
        payload
    }
}

const fetchProductsFailure = () => {
    return{
        type: "FETCH_PRODUCTS_FAILURE"
    }
}

const fetchStart = () => ({
    type: "FETCH_START"
})

const addItem = (payload) => ({
    type: "ADD_ITEM",
    payload
}) 

const fetchPostsWithRedux = (word) => {
    dispatch(fetchStart());
    fetch("https://api.datamuse.com/words?ml=" + word + "&max=10",{ method: 'GET'})
        .then(( response ) => {
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            let response = [];
            data.map((value)=>{
                response.push(value.word);
            })
            console.log(response);
            dispatch(fetchDataSucccess(response))
        })
        .catch(err=>{
            console.log(err);
        })
}

export {fetchPostsWithRedux,addItem};