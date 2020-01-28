import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import classes from './HomeHeader.css'
import { Typography } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withRouter } from 'react-router';
import {connect} from 'react-redux'
import { userAction } from '../../Actions/userActions';
import { dataAction } from '../../Actions/fetchAllUsersAction';

class HomeHeader extends Component{
    state={
        anchorEl:null,
    }
    openUserMenu=(event)=>{
        this.setState({anchorEl:event.currentTarget})
    }
    closeUserMenu=()=>{
        this.setState({anchorEl:null})
    }
    render(){

        return(
            <div>
                <div style={{width:'100%',height:80,backgroundColor:'#1c6494',display:'flex'}}>
                    <MenuIcon className={classes.MenuIcon} onClick={this.props.openMenu}></MenuIcon>
                    <img style={{width:'20%',height:80,marginLeft:'5%',cursor:'pointer'}} src={require('../../assets/wematelogo.JPG')} onClick={()=>this.props.history.push({pathname:'/home/user/'})}></img>
                    <AccountCircleIcon style={{marginLeft:'60%',marginTop:20,cursor:'pointer',fontSize:50}} onClick={this.openUserMenu}></AccountCircleIcon>
                    <Menu
                        
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.closeUserMenu}>
                        <MenuItem onClick={this.closeUserMenu} onClick={()=>this.props.history.push({pathname:'/home/editprofile'})}>Edit Profile</MenuItem>
                        <MenuItem onClick={this.closeUserMenu}>My account</MenuItem>
                        <MenuItem onClick={this.closeUserMenu} onClick={()=>this.props.onLogout()}>Logout</MenuItem>
                    </Menu>

                </div>
                
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onLogout:()=>dispatch(userAction.logout()),
    }
}
const mapStateToProps=state=>{

}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomeHeader))