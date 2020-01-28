import {notificationService} from '../services/notificationService'
export const notificationAction={
    fetchAllNotification,
}
function fetchAllNotification(){
    console.log('action')
    
    return dispatch=>{
        notificationService.fetchAllNotification().then(res=>{
        dispatch({type:'FETCHED_NOTIFICATION',res})
        
        })
        
    }
       
}
