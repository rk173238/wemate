import api from 'axios'

export const fetchUsers={
    fetchAllusers,
    fetchAllUsersList,
}

function fetchAllUsersList(){
    return api.get('https://wemate-cd9b2.firebaseio.com/usersList.json')
}

function fetchAllusers(){
    // console.log('fetchalluser')

    return api.get('https://wemate-cd9b2.firebaseio.com/usersData.json')
}