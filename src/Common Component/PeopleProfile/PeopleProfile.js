import React, { Component } from 'react'
import { Divider, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import classes from './PeopleProfile.css';
import HireDialog from '../HireDialogs/HireDialogs'
import { withRouter } from 'react-router';

class PeopleProfile extends Component{
    state={
        openHireDialog:false,
    }
    openHireDialog=()=>{
        this.setState({openHireDialog:true})
    }
    closeHireDialog=()=>{
        this.setState({openHireDialog:false})
    }
    render(){
        // console.log(this.props.data)
        return(
            <div className={classes.root} >
                <div style={{width:'100%',height:200,}}>
                    <img style={{borderRadius:'50%',height:'100%',width:'100%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI6D9KPMLRDF-5iiqfz7fpiczzbTqGKcvsMyQslzy5PJp9NOED'></img>
                </div>
                <Divider/>
                <div style={{width:'100%',height:200}}>
                    <div style={{display:'flex'}}>
                        <Typography style={{fontSize:20,marginLeft:5,width:'80%'}}>{this.props.data.userId}</Typography>
                        <Typography align='right' style={{fontSize:30,width:'20%'}}>300</Typography>
                    </div>
                    <div style={{display:'flex'}}>
                        <Typography style={{fontSize:10,marginLeft:5,width:'60%'}}>KOLKATA</Typography>
                        <Typography align='right' style={{fontSize:30,width:'40%'}}>*****</Typography>
                    </div>
                    <div style={{marginTop:-20,marginLeft:0,display:'flex'}}>
                        <Typography style={{fontSize:18,width:'70%'}}>ABOUT ME</Typography>
                        <Button variant="contained" size="large" color="primary" style={{width:'30%'}} onClick={()=>this.props.history.push({pathname:'/home/profile/'+this.props.data.userId})}>
                            Profile
                        </Button>
                    </div>
                    <Typography>somelkndauijdsnf,shn  SGFAHSGDFAHDYQGDHASGFDGAHG ASDGAJHSG </Typography>
                    <div style={{marginLeft:0,display:'flex'}}>
                        <Typography style={{fontSize:18,width:'70%'}}>HOBBIES</Typography>
                        <Button variant="contained" size="large" color="primary" style={{width:'30%'}} onClick={this.openHireDialog}>
                            Schedule
                        </Button>
                    </div>
                    <Typography>somelkndauijdsnf,shn  </Typography>
                    <HireDialog data={this.props.data} openHireDialog={this.state.openHireDialog} closeHireDialog={this.closeHireDialog}></HireDialog>
                    <div></div>

                </div>

            </div>
        )
    }
}

export default withRouter(PeopleProfile)