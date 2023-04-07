import {createStore} from 'react-redux'

const reducerFn = (state = {increment:0}, action) => {
    if (action.type === "INC"){
        return {increment:state.increment+1}

    }
    return state;
    

}

const store = createStore(reducerFn)
