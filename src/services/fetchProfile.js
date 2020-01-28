import api from 'axios'

// export const editProfileService={
//     fetchMyDetails,
//     postMyDetails,
// }

// function fetchMyDetails(){
//     let me=sessionStorage.getItem('userId')
//     return api.get('https://wemate-cd9b2.firebaseio.com/usersData/'+me+'.json')
// }
// function postMyDetails(data){
//     let me=sessionStorage.getItem('userId')
//     return api.put('https://wemate-cd9b2.firebaseio.com/usersData/'+me+'.json',data)
// }
// // function uploadPhoto(data){
// //     let data={imageUrl:this.state.imageUrl}
// //     return api.put('https://wemate-cd9b2.firebaseio.com/profileimages.json',data)
    
// // }
export function fetchProfile(userId){
    return api.get('https://wemate-cd9b2.firebaseio.com/usersData/'+userId+'.json').then(res=>res.data)
}