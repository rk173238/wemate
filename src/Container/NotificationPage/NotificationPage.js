import React,{Component} from 'react';
import {connect} from 'react-redux'
import Notification from './Notification/Notification'
import { Typography } from '@material-ui/core';
class NotificationPage extends Component{
    state={
        notification:[]
    }
    notification=(props)=>{
        let notification=[]
        if(props.allNotification){
            Object.keys(props.allNotification).map(date=>{
                let d={}
                d[date]=props.allNotification[date]
                notification.push(d)
            })
        }
        return notification
    }
    render(){
        // console.log(this.props.allNotification,typeof(this.props.allNotification))
        return(
            <div style={{backgroundColor:' rgba(251, 241, 241, 0.931)'}}>
                {this.notification(this.props).length>0?
                this.notification(this.props).map((notification,i)=>(
                    <Notification key={i} notification={notification}></Notification>
                )):<Typography style={{marginLeft:'20%',marginTop:'50px',fontSize:30}}> No Notification Yet</Typography>}
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        allNotification:state.fetchAllNotificationReducer.data
    }
}
const mapDispatchToProps=dispatch=>{

}
export default connect(mapStateToProps,mapDispatchToProps)(NotificationPage);