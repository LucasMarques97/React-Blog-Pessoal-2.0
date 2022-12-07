import { Action } from "./action";

interface TokenState {
    tokens: string;
};



const initialState = {
    tokens: ''
}
/* essa parte é sempre assim */
export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_TOKEN": {
            return{tokens: action.payload}
        }
        default:
            return state 
    }
}

export default TokenState