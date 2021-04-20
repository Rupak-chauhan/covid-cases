const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    firstState:0
};

//reducer

const rootReducer = (state = initialState, action) =>{
    if(action.type==='Inc'){
        return{
            ...state,
            firstState:state.firstState + 1
        }
    }
    if(action.type==='Add'){
        return{
            ...state,
            firstState:state.firstState + action.value
        }
    }
    return state;
}






//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscriptions
store.subscribe(()=>{
    console.log('[subscription]', store.getState());
});

//actions
store.dispatch({type: 'Inc'});
store.dispatch({type: 'Add', value:10});
console.log(store.getState());







