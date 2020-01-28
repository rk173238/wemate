const initialState={
    data:{}
    
}
export const fetchAllNotificationReducer = (state=initialState,action)=>{
    console.log(action)
    if(action.type==='FETCHED_NOTIFICATION'){
        // console.log(action)
        
        return{
            data:action.res.data
        }
    }
    return state
}


