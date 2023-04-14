import { EcomAction } from "../../constants/actionconstants";

export function getBestSellingPhones(){
    return{
        type:EcomAction.GET_BEST_SELLINGS_PHONE,
       
    }
}

export function dispatchBestSellingPhoneLoding(){
    return{
        type:EcomAction.BEST_SELLINGS_LOADING
    }
}


export function dispatchBestSellingPhoneLoaded(response:any){
    return{
        type:EcomAction.BEST_SELLINGS_LOADED,
        payload:response.data
    }
}

export function dispatchBestSellingPhoneLoadingError(){
    return{
        type:EcomAction.BEST_SELLINGS_LOADING_ERROR,
      
    }
}


