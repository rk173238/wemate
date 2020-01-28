import React,{Component} from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import HomeHeader from '../../Common Component/HomeHeader/HomeHeader'
import {Route,Redirect,Switch} from 'react-router';
import { withRouter } from 'react-router';
import UserContent from '../UserContent/UserContent';
import NotificationPage from '../NotificationPage/NotificationPage'
import {connect} from 'react-redux'
import { dataAction } from '../../Actions/fetchAllUsersAction';
import {notificationAction} from '../../Actions/fetchAllNotificationAction'
import { stat } from 'fs';
import EditProfile from '../EditProfilePage/EditProfile'
import Typography from 'material-ui/styles/typography';
import UserProfile from '../UserProfile/UserProfile'
class Home extends Component{
    state={
        openMenu:false,
        pendingNotification:0,
    }
    closeMenu=()=>{
        this.setState({openMenu:false})
    }
    openMenu=()=>{
        this.setState({openMenu:true})
    }
    clickedMenuItem=(menu)=>{
        this.props.history.push({pathname:'/home/'+menu})
        this.closeMenu()
    }
    // componentWillReceiveProps=props=>{
    //     let notification=[]
    //     Object.keys(props.allNotification).map(date=>{
    //         let requester = Object.keys(props.allNotification[date])
    //         notification.push(props.allNotification[date][requester])
    //     })
    //     let pendingNotification=notification.filter(notification=>notification==='pending')
    //     this.setState({pendingNotification:pendingNotification.length})
    // }
    countPendingNotification=(props)=>{
        if(props.allNotification){
            let notification=[]
            Object.keys(props.allNotification).map(date=>{
            let requester = Object.keys(props.allNotification[date])
            notification.push(props.allNotification[date][requester])
            })
            let pendingNotification=notification.filter(notification=>notification==='pending')
            return pendingNotification.length;
        }
        return 0;
        // this.setState({pendingNotification:pendingNotification.length})
    }
    componentDidUpdate=()=>{
        console.log('updated')
    }
    componentDidMount=()=>{
        if(!this.state.openMenu){
            this.props.onFetchAllusers()
            this.props.onFetchAllNotifications()
        }
    }
    render(){
        
        return(
            <div style={{width:'100%',height:550}}>
                <HomeHeader openMenu={this.openMenu}></HomeHeader>
                
                <Drawer open={this.state.openMenu} onClose={this.closeMenu}>
                    <List>
                        <ListItem button  onClick={()=>this.clickedMenuItem('Profile/'+sessionStorage.getItem('userId'))}>
                            <ListItemText primary='Profile' />
                        </ListItem>
                        <ListItem button  onClick={()=>this.clickedMenuItem('Notification')} style={{display:'flex'}}>
                             <div>Notification </div>
                             {this.countPendingNotification(this.props)>0?
                                <div style={{color:'white',backgroundColor:'red',marginLeft:'10px',borderRadius:50}}> {' '+this.countPendingNotification(this.props)}</div>:null}
                        </ListItem>
                        <ListItem button  onClick={()=>this.clickedMenuItem('History')}>
                            <ListItemText primary='History' />
                        </ListItem>
                        <ListItem button onClick={()=>this.clickedMenuItem('Setting')}>
                            <ListItemText primary='Setting' />
                        </ListItem>
                    </List>
                </Drawer>
                <Switch>
                    <Route path='/home/' exact render={()=>(<Redirect to='/home/user'></Redirect>)}></Route>
                    <Route path='/home/user' render={()=>(<UserContent></UserContent>)}></Route>
                    {/* <Route path='/home/user' render={()=>(<div>content</div>)}></Route> */}
                    <Route path='/home/setting' exact render={()=>(<div>setting</div>)}></Route>
                    <Route path='/home/profile' render={()=>(<UserProfile></UserProfile>)}></Route>
                    <Route path='/home/notification' exact render={()=>(<NotificationPage></NotificationPage>)}></Route>
                    <Route path='/home/history' exact render={()=>(<div>hidtory</div>)}></Route>
                    <Route path='/home/editprofile' exact render={()=>(<EditProfile></EditProfile>)}></Route>
                </Switch>

            </div>
        )
    }
}
const mapStateToProps=state=>{
    console.log(state)
    return {
        allNotification:state.fetchAllNotificationReducer.data
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onFetchAllusers:()=>dispatch(dataAction.fetchAllUsers()),
        onFetchAllNotifications:()=>dispatch(notificationAction.fetchAllNotification())
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))