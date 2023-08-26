import axios from "axios";
export const GET_ALL = "GET_ALL";
export const GET_NAME = "GET_NAME";
export const ASC = "ASC";
export const DES = "DES";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const GET_DIETS = "GET_DIETS";
export const BY_FONT = "BY_FONT"
export const HEALTH_SCORE = "HEALTH_SCORE"


export function onSearch(name) {
        return async(dispatch)=>{
            try {
                const endpoint = "http://localhost:3001/recipes/?name=" + name;
                const { data } = await axios(endpoint);
                console.log(data)
                return dispatch({
                  type: GET_NAME,
                  payload: data
                })
                
            } catch (error) {
            return alert("couldnt found the name")
                
        }
      }
};


export function getAll(){
        return async(dispatch)=>{
            try {
                const endpoint = "http://localhost:3001/recipes/";
                const {data} = await axios(endpoint);
                return dispatch({
                    type: GET_ALL,
                    payload: data
                })
                
            } catch (error) {
                throw new Error("Imposible to mount")
            }
        }

};

export const ascendente = ()=>{
    return {
        type: ASC,
    }
}

export const descendiente = ()=>{
    return {
        type: DES,
    }
}
export const filterByDiet = (diet) => {
    return {
        type: FILTER_BY_DIET,
        payload: diet,
    };
};
export const getDiets = ()=>{
    return async(dispatch)=>{
        try {
            const endpoint = "http://localhost:3001/diets/"
            const { data } = await axios(endpoint);
            console.log(data)
            return dispatch({
              type: GET_DIETS,
              payload: data
            })
            
        } catch (error) {
        throw new Error("already charged")
            
    }
  }
}
export const byFont = (font)=>{
    return {
        type: BY_FONT,
        payload: font,
    };
}

export const healthScore = (score)=>{
    return {
        type: HEALTH_SCORE,
        payload: score,
    }
}