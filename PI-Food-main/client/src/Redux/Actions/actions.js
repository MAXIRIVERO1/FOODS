import axios from "axios";
export const GET_ALL = "GET_ALL";
export const GET_NAME = "GET_NAME";


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
            throw new Error("couldnt found the name")
                
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

