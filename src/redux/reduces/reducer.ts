
import { EcomAction } from "../../constants/actionconstants";
import Action from "../../types/action";
import Reducer from "../../types/reducer";

 const initialState:Reducer = {
    isLoading: false,
    data: [],
    error: false,
};


export const reducer=(state=initialState,action:Action)=>{

    switch (action.type) {

        case EcomAction.BEST_SELLINGS_LOADING:
            console.log(1)
            return{
                ...state,
                isLoading:true,
                data:[]
            }
        case EcomAction.BEST_SELLINGS_LOADED:
            console.log(2)
            return{
                ...state,
                isLoading:false,
                data:action.payload
            }   
        case EcomAction.BEST_SELLINGS_LOADING_ERROR:
                return{
                    ...state,
                    isLoading:false,
                    error:true
                }  

        default:
            return state;
    }

}