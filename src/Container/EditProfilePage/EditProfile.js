import React,{Component} from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import  Button  from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider/Divider';
import api from 'axios'
import classes from './EditProfile.css'
import {editProfileService} from '../../services/editProfileService'
class EditProfile extends Component{
    state={
        disabledEditProfile:true,
        imageUrl:null,
        myData:{
            firstName:'',
            lastName:'',
            email:'',
            location:'',
            age:'',
            mobile:'',
            price:'',
            hobbies:'',
            games:'',
            imageUrl:null,
            aboutYou:''
        }
    }
    changedDetails=(event)=>{
        let mydata=this.state.myData
        switch(event.target.id){
            case 'firstName':
                mydata[event.target.id]=event.target.value
                break;
            case 'lastName':
                mydata[event.target.id]=event.target.value
                break;
            case 'email':
                mydata[event.target.id]=event.target.value
                break;
            case 'age':
                mydata[event.target.id]=event.target.value
                break;
            case 'location':
                mydata[event.target.id]=event.target.value
                break;
            case 'mobile':
                mydata[event.target.id]=event.target.value
                break;
            case 'price':
                mydata[event.target.id]=event.target.value
                break;
            case 'newPassword':
                mydata[event.target.id]=event.target.value
                break;
            case 'confirmPassword':
                mydata[event.target.id]=event.target.value
                break;
            case 'hobbies':
                mydata[event.target.id]=event.target.value
                break;
            case 'games':
                mydata[event.target.id]=event.target.value
                break;
            case 'aboutYou':
                mydata[event.target.id]=event.target.value
                break;
        }
        this.setState({myData:mydata})

    }
    editPhoto=(event)=>{
        // let url=URL.createObjectURL(event.target.value)
        console.log(event.target.files)
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            let myData=this.state.myData
            myData.imageUrl=reader.result
            this.setState({imageUrl:reader.result,myData:myData})
        }
        reader.readAsDataURL(file)
    }
    componentDidMount=()=>{
        editProfileService.fetchMyDetails().then(res=>{
            this.setState({myData:res.data})
        })
    }
    postMyDetails=()=>{
        editProfileService.postMyDetails(this.state.myData).then(res=>{
            alert('Details Updated')
            window.location.reload();
        })
    }
    uploadPhoto=()=>{
        editProfileService.postMyDetails(this.state.myData).then(res=>{
            alert('photo Uploaded')
            window.location.reload();
        })
    }

    render(){
        
        return(
            <div className={classes.root}>
                <div className={classes.divLeftSide}>
                    <div style={{height:300,width:300}}>
                        {this.state.myData.imageUrl?
                        <img style={{borderRadius:'50%',height:'100%',width:'100%'}} src={this.state.myData.imageUrl    }></img>:
                        <img style={{borderRadius:'50%',height:'100%',width:'100%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI6D9KPMLRDF-5iiqfz7fpiczzbTqGKcvsMyQslzy5PJp9NOED'></img>
                        }
                    
                    </div>
                    <div style={{display:'flex'}}>
                            <input accept="image/gif,image/jpeg" type='file' onChange={this.editPhoto}></input>
                            {/* <input type='file'></input> */}
                            <Button variant='outlined' color='primary' onClick={this.uploadPhoto}>Upload</Button>
                    </div>
                    <TextField style={{width:'80%',marginTop:10}} id='aboutYou' variant='outlined' multiline label="Something About You" rows='6' value={this.state.myData.aboutYou} disabled={this.state.disabledEditProfile} onChange={this.changedDetails}></TextField>
                    {/* <Button style={{width:'80%',marginTop:10,color:'red'}} variant='contained'>Post</Button> */}

                </div>
                <div className={classes.divRightSide}>
                    <div style={{marginLeft:'10%',display:'flex'}} onClick={()=>this.setState({disabledEditProfile:false})}>
                        <EditIcon></EditIcon><Typography style={{marginLeft:'5%',fontSize:18}}>Edit Details</Typography>
                    </div>
                    <div style={{marginTop:20}}>
                    <TextField onChange={this.changedDetails} label="First Name" id='firstName' value={this.state.myData.firstName} disabled={this.state.disabledEditProfile} variant="outlined" style={{width:'40%',marginLeft:'10%'}}></TextField>
                    <TextField onChange={this.changedDetails} label="Last Name" id='lastName' value={this.state.myData.lastName} disabled={this.state.disabledEditProfile} variant="outlined" style={{width:'40%',marginLeft:'10%'}}></TextField>
                    </div>
                    <div >
                    <TextField onChange={this.changedDetails} label="Email" id='email' value={this.state.myData.email} disabled={true} variant="outlined" style={{width:'90%',marginLeft:'10%',marginTop:20}}></TextField>
                    </div>
                    <div style={{marginTop:20}}>
                    <TextField onChange={this.changedDetails} label="Age" id='age' value={this.state.myData.age} disabled={this.state.disabledEditProfile} variant="outlined" style={{width:'40%',marginLeft:'10%'}}></TextField>
                    <TextField onChange={this.changedDetails} label="Location" id='location' value={this.state.myData.location} disabled={this.state.disabledEditProfile} variant="outlined"  style={{width:'40%',marginLeft:'10%'}}></TextField>
                    </div>
                    <div style={{marginTop:20}}>
                    <TextField onChange={this.changedDetails} label="Mobile No" id='mobile' value={this.state.myData.mobile} disabled={this.state.disabledEditProfile} variant="outlined" style={{width:'40%',marginLeft:'10%'}}></TextField>
                    <TextField onChange={this.changedDetails} label="Price/Hr" id='price' value={this.state.myData.price} disabled={this.state.disabledEditProfile} variant="outlined"  style={{width:'40%',marginLeft:'10%'}}></TextField>
                    </div>
                    <div style={{marginTop:20}}>
                    <TextField onChange={this.changedDetails} label="New Password" id='newPassword' disabled={this.state.disabledEditProfile} type='password' variant="outlined" style={{width:'40%',marginLeft:'10%'}}></TextField>
                    <TextField onChange={this.changedDetails} label="Confirm Password" id='confirmPassword' disabled={this.state.disabledEditProfile} type='password' variant="outlined"  style={{width:'40%',marginLeft:'10%'}}></TextField>
                    </div>
                    <Divider style={{marginLeft:'10%',marginTop:20}}></Divider>
                    <Typography style={{marginTop:10,marginLeft:'10%'}}>Below Fields can have multiple values Seperated by commas</Typography>
                    <div >
                    <TextField onChange={this.changedDetails} label="Hobbies" id='hobbies' value={this.state.myData.hobbies} disabled={this.state.disabledEditProfile} variant="outlined"  style={{width:'90%',marginLeft:'10%',marginTop:10}}></TextField>
                    </div>
                    <div >
                    <TextField onChange={this.changedDetails} label="Games You Liked" id='games' value={this.state.myData.games} disabled={this.state.disabledEditProfile} variant="outlined" style={{width:'90%',marginLeft:'10%',marginTop:20}}></TextField>
                    </div>
                    <div style={{marginTop:20,marginLeft:'10%'}}>
                    <Button variant='contained' disabled={this.state.disabledEditProfile} color='primary' onClick={this.postMyDetails}>Save</Button>
                    <Button  variant='contained' disabled={this.state.disabledEditProfile} color='secondary' style={{marginLeft:'10%'}} onClick={()=>this.setState({disabledEditProfile:true})}>Reset</Button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    console.log(state)
    return{
        data:state,
    }
}
export default connect(mapStateToProps)(EditProfile);