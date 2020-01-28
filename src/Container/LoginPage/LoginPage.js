import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux'
import Register from './Register/Register'
import {userAction} from '../../Actions/userActions'
import { stat } from 'fs';

class LoginPage extends Component{

    state={
        openRegisterDialog:false,
        userName:'',
        password:''
    }
    closeRegisterDialog=()=>{
        this.setState({openRegisterDialog:false})
    }
    getUserName=(props)=>{
        this.setState({userName:props.target.value})
    }
    getPassword=(props)=>{
        this.setState({password:props.target.value})
    }
    clickedLogin=(event)=>{
        event.preventDefault()
        this.props.onLogin(this.state.userName,this.state.password)
    }
    render(){
        // console.log(this.props.logedin)
        return(
            <div style={{textAlign:'center',marginTop:'20%'}}>
                <div>
                    <TextField label="username" variant="outlined" onChange={this.getUserName}/>
                </div>
                <div>
                    <TextField label="password" type='password' variant="outlined" onChange={this.getPassword}/>
                </div>
                <Button variant="contained" size="large" color="primary" onClick={this.clickedLogin}>
                    Login
                </Button>
                <Button variant="contained" size="large" color="primary" onClick={()=>this.setState({openRegisterDialog:true})} >
                    New Here
                </Button>
                <Register open={this.state.openRegisterDialog} closeRegisterDialog={this.closeRegisterDialog}></Register>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return {
        logedin:state.loginReducer.logedin,
        userName:state.loginReducer.userName
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onLogin:(userName,password)=>dispatch(userAction.login(userName,password))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);