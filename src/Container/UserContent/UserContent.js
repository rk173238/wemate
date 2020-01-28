import React,{Component} from 'react'
import PeopleProfile from '../../Common Component/PeopleProfile/PeopleProfile';
import classes from './UserContent.css'
import {connect} from 'react-redux'

import { thisExpression } from '@babel/types';
class UserContent extends Component{

    state={
        allUsers:[]
    }
    computeAllUsers=(props)=>{
        var allId=Object.keys(props.allUsers)
        allId=allId.filter(id=>id!==sessionStorage.getItem('userId'))
        var users=[]
        for(let i=0;i<allId.length;i=i+3){
            // if(allId[i]===sessionStorage.getItem('userId')||allId[i+1]==='n'||allId[i+2]==='n') {continue}
            // console.log(allId[i])
            let threeUsers=[]
            let userId=allId[i]
            let user={userId:userId,data:props.allUsers[userId]}
            threeUsers.push(user)
            if(i+1<allId.length){
                let userId=allId[i+1]
                let user={userId:userId,data:props.allUsers[userId]}
                threeUsers.push(user)
            }
            if(i+2<allId.length){
                let userId=allId[i+2]
                let user={userId:userId,data:props.allUsers[userId]}
                threeUsers.push(user)
            }
            users.push(threeUsers)
        }
        return users;
    }
    
    render(){
        
        // console.log(this.state.usersNames)
        return(
            <div className={classes.root}>
                
                {this.computeAllUsers(this.props).map((data,i)=>(
                    <div key={i} className={classes.profilesInRow}>
                        <div className={classes.peopleProfile}><PeopleProfile data={data[0]}></PeopleProfile></div>
                        {data[1]?<div className={classes.peopleProfile}><PeopleProfile data={data[1]}></PeopleProfile></div>:null}
                        {data[2]?<div className={classes.peopleProfile}><PeopleProfile data={data[2]}></PeopleProfile></div>:null}
                    </div>
                ))}
                {/* <HireDialog></HireDialog> */}
            </div>
        )
    }
}
const mapStateToprops=(state)=>{
    return {
        allUsers:state.fetchAllUsersReducer.data
    }
}
const mapDispatchToProps=()=>{
    return{
        a:1
    }
}
export default connect(mapStateToprops,mapDispatchToProps)(UserContent);