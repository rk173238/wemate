import {fetchUsers} from '../services/fetchAllusers'
export const dataAction={
    fetchAllUsers,
}
function fetchAllUsers(){
    // console.log('action')
    return dispatch=>{
        fetchUsers.fetchAllusers().then(res=>{
            dispatch({type:'SUCCESS',res})
            console.log('fetch')
        })
    }
}