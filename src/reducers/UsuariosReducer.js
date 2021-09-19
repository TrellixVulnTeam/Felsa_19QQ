import { TRAER_TODAS } from "../types/actions/index";



 const reducer = (state , action) =>{
    switch(action.type){
        case TRAER_TODAS:
            return {
                ...state,
                usuarios: action.payload,
                
            //  usuarios: state.usuarios + action.payload
      
            };
            break;
        default:
            return state;
     
        
        
    }
}
export  default reducer