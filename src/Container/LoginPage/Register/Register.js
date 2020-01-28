import React,{Component} from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Button, TextField } from '@material-ui/core';
import {registerService} from '../../../services/registerService'
class Register extends Component{

    state={

    }
    
    changeText=(event)=>{
        switch(event.target.id){
            case 'emailid':
                this.setState({email:event.target.value})
                break;
            case 'firstname':
                this.setState({firstName:event.target.value})
                break;
            case 'lastname':
                this.setState({lastName:event.target.value})
                 break;
            case 'location':
                this.setState({location:event.target.value})
                break;
            case 'password':
                this.setState({password:event.target.value})
                break;  
        }
    }
    clickedRegister=()=>{
        
        registerService.register(this.state).then(res=>{
            console.log(res)
            if(res.status===200){
                alert('Registered Succesfully')
                this.props.closeRegisterDialog()
                return null
            }
            if(res==='DUPLICATE') {
                alert('User with these credentials allready exist')
                this.props.closeRegisterDialog()
                return null
            }
            alert('Something is wrong')
            this.props.closeRegisterDialog()
        })
        // console.log(data)
        // registerService.register(data,this.state.email)
    }

    render(){
    
        return(
            <div>
                <Dialog open={this.props.open} onClose={this.props.closeRegisterDialog}>
                    <DialogTitle>Register</DialogTitle>
                    <TextField variant='outlined' label="email Id" id='emailid' onChange={this.changeText}></TextField>
                    <TextField variant='outlined' label="First Name" id='firstname' onChange={this.changeText}></TextField>
                    <TextField variant='outlined' label="Last Name" id='lastname' onChange={this.changeText}></TextField>
                    <TextField variant='outlined' label="Location" id='location' onChange={this.changeText}></TextField>
                    <TextField variant='outlined' label="password" type='password' id='password' onChange={this.changeText}></TextField>
                    <Button onClick={this.clickedRegister}>register</Button>
                </Dialog>
            </div>
        )
    }
}

export default Register