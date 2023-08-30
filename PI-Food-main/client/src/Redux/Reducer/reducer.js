import {GET_ALL, GET_NAME, ASC, DES, FILTER_BY_DIET, GET_DIETS, BY_FONT, HEALTH_SCORE, CREATE_RECIPE, GET_DETAIL} from "../Actions/actions"


const initialState= {
    recipes: [],
    copyRecipes: [],
    diets: [],
    detail: {
        diets:[]
    }
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
        case ASC:
            return {
                ...state, recipes: state.recipes.slice().sort((a,b)=>a.title.localeCompare(b.title))
            }
        case DES:
            return {
                ...state, recipes: state.recipes.slice().sort((a,b)=>b.title.localeCompare(a.title))
            }
        case FILTER_BY_DIET:
            let filteredRecipes = state.copyRecipes.filter(recipe => {
            return recipe.diets.includes(action.payload);
                });
            if(action.payload === "all"){filteredRecipes = state.copyRecipes}
    
            return {
                ...state, recipes: filteredRecipes
            };
        case GET_DIETS:
            return {
                ...state, diets: action.payload
            }
        case BY_FONT:
            let filtered = []
            if(action.payload === "originales"){filtered = state.copyRecipes.filter((e)=>e.id === Number(e.id))}
            if(action.payload === "mis recetas"){filtered = state.copyRecipes.filter((e)=>e.id !== Number(e.id))}
            if(action.payload === "all"){filtered = state.copyRecipes}
            return{
                ...state, recipes: filtered
            }
        case HEALTH_SCORE:
            let scores = []
            if(action.payload === "ascendente"){scores = state.recipes.slice().sort((a,b)=>a.healthScore - b.healthScore)}
            if(action.payload === "descendente"){scores = state.recipes.slice().sort((a,b)=>b.healthScore - a.healthScore)}
            if(action.payload === "all"){scores = state.recipes}
            return{
                ...state, recipes: scores
            }
        case CREATE_RECIPE:
            const newRecipe = action.payload;
    
            return {
                ...state,
                recipes: [...state.recipes, newRecipe]
            }  
        case GET_DETAIL:
            return {
                ...state, detail: action.payload
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;