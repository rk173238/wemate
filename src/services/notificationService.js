import api from 'axios'
import { func } from 'prop-types'

export const notificationService={
    fetchAllNotification,
    acceptOrRejectNotification
}
function fetchAllNotification(){
    console.log('service')
    let me=sessionStorage.getItem('userId')
    return api.get('https://wemate-cd9b2.firebaseio.com/hireRequest/'+me+'.json')
}


function acceptOrRejectNotification(date,requester,option){
    if(option==='accepted' || option==='rejected'){
        return postToUser(date,requester,option).then(res=>{
            return postToRequester(date,requester,option).then(res=>{
                return res
            })
        })
    }
        
    
}

function postToUser(date,requester,option){
    let data={}
    data[requester]=option
    let me=sessionStorage.getItem('userId')
    return api.put('https://wemate-cd9b2.firebaseio.com/hireRequest/'+me+'/'+date+'.json',data)
}
function postToRequester(date,requester,option){
    let data={}
    
    let me=sessionStorage.getItem('userId')
    data[me]=option
    return api.put('https://wemate-cd9b2.firebaseio.com/sentRequest/'+requester+'/'+date+'.json',data)
}
