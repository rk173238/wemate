import api from 'axios';
import {fetchUsers} from './fetchAllusers'
export const registerService={
    register
}
function register(data){
    let cred={}
    cred[data['email']]=data.password
    // console.log(data[userId],userId)
    return fetchUsers.fetchAllUsersList().then(res=>{
        if(res.data.hasOwnProperty(data['email']))
            return 'DUPLICATE'
        return postToUserList(data,cred).then(res=>{
        
            if(res.status===200)
                return postToUserData(data).then(res=>{
                    return res
                })
        })
    })
    
    
    
    
    
}
function postToUserList(data,cred){
    console.log(data.password)
    return api.put("https://wemate-cd9b2.firebaseio.com/usersList/"+data['email']+".json",cred)
}
function postToUserData(data){
    return api.put("https://wemate-cd9b2.firebaseio.com/usersData/"+data['email']+".json",data)
}