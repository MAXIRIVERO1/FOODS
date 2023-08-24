import {GET_ALL, GET_NAME} from "../Actions/actions"


const initialState= {
    recipes: [],
    copyRecipes: []
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case GET_NAME:
            return {
                ...state, recipes: action.payload
            }
        case GET_ALL:
            return {
                ...state, recipes: action.payload, copyRecipes: action.payload
            }
    
        default:
            return {
                ...state
            }
    }
};

export default reducer;