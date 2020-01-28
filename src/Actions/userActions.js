import {fetchUsers} from '../services/fetchAllusers'
export const userAction={
    login,
    logout
}
function login(userId,password){
    // console.log('loginaction')
    return dispatch=>{
        
            fetchUsers.fetchAllUsersList().then(res=>{
                
                if(res.data.hasOwnProperty(userId)){
                    if(res.data[userId][userId]===password){
                        sessionStorage.setItem('userId',userId)
                        dispatch({type:'LOGIN_SUCCESS',userId})
                    }
                    else alert('Password is incorrect')
                }else alert('UserName does not exist')
                
            })
       
    }
}
function logout(){
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('logedin')
    window.location.reload()
    return dispatch=>{dispatch({type:'LOGOUT'})}
}