import React,{Component} from 'react'
import { Button } from '@material-ui/core'
import { th } from 'date-fns/esm/locale'
import {notificationService} from '../../../services/notificationService'
import {withRouter} from 'react-router'
import classes from './Notification.css'
class Notification extends Component{

    state={

    }
    componentWillMount=()=>{
        let date=Object.keys(this.props.notification)[0]
        let requester=Object.keys(this.props.notification[date])[0]
        let status=this.props.notification[date][requester]
        this.setState({status,requester,date})
        // console.log(date,requester,status)
    }
    accepted=()=>{
        notificationService.acceptOrRejectNotification(this.state.date,this.state.requester,'accepted').then(res=>{
            console.log(res)
            window.location.reload();
        })
    }
    rejected=()=>{
        notificationService.acceptOrRejectNotification(this.state.date,this.state.requester,'rejected').then(res=>{
            console.log(res)
            window.location.reload();
        })
    }
    render(){
        console.log(this.state)
        return(
            
            <div>
                <div className={classes.root}>
                    
                    <div className={classes.contentText}>
                        {this.state.requester} has requested for your time as date:-{(this.state.date).split('&')[0]} and Time:-
                        {this.state.date.split('T')[1]}
                    </div>
                    {this.state.status==='pending'?
                    <div className={classes.pendingButtonsDiv}>
                        <Button color='primary' variant='contained' className={classes.pendingButton} onClick={this.accepted}>Accept</Button>
                        <Button color='secondary' variant='contained' className={classes.rejectButton} onClick={this.rejected}>Reject</Button>
                    </div>
                    :this.state.status==='rejected'?
                    <div style={{width:'30%',display:'flex'}}>
                        <Button color='primary' variant='contained' disabled style={{height:40,marginTop:30,marginLeft:'30%'}}>Rejected</Button>
                    </div>
                    :this.state.status==='accepted'?
                    <div style={{width:'30%',display:'flex'}}>
                        <Button color='primary' variant='contained' disabled style={{height:40,marginTop:30,marginLeft:'30%'}}>Accepted</Button>
                    </div>
                    :this.state.status==='expired'?
                    <div style={{width:'30%',display:'flex'}}>
                        <Button color='primary' variant='contained' disabled style={{height:40,marginTop:30,marginLeft:'30%'}}>Expired</Button>
                    </div>:
                    null}
                


                </div>
            </div>
        )
    }
}
export default withRouter(Notification)