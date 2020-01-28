const initialState={
    logedin:sessionStorage.getItem('logedin')?sessionStorage.getItem('logedin'):false,
    // logedin:false,
    userName:sessionStorage.getItem('userId')?sessionStorage.getItem('userId'):''
}
export const loginReducer = (state=initialState,action)=>{
    
    if(action.type==='LOGIN_SUCCESS'){
        sessionStorage.setItem('logedin',true)
        
        return{
            logedin:true,
            userName:action.userName
        }
    }
    return state
}


