import api from 'axios';
import {fetchUsers} from './fetchAllusers'
export const sendHireRequest={
    hire
}
function hire(data,time){
    let me=sessionStorage.getItem('userId')
    let hireData={}
    hireData[time]=me;
    let requestData={}
    requestData[time]=data['userId']
    // console.log(hireData,requestData)
    return hireRequest(data,time).then(res=>{
        if(res.status===200){
            return sentRequest(data,time).then(res=>{
                return res;
            })
        }
    })
}
function sentRequest(data,time){
    let data1={}
    data1[data['userId']]='pending'
    let me=sessionStorage.getItem('userId')
    return api.put("https://wemate-cd9b2.firebaseio.com/sentRequest/"+me+"/"+time+"/"+".json",data1)
}
function hireRequest(data,time){
    let me={}
    me[sessionStorage.getItem('userId')]='pending'
    return api.put("https://wemate-cd9b2.firebaseio.com/hireRequest/"+data['userId']+"/"+time+".json",me)
}