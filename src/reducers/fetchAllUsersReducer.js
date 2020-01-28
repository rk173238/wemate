const initialState={
    data:{}
    
}
export const fetchAllUsersReducer = (state=initialState,action)=>{
    // console.log(action)
    if(action.type==='SUCCESS'){
        // console.log(action)
        
        return{
            data:action.res.data
        }
    }
    return state
}


