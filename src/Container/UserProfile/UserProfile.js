import React,{Component} from 'react'
import { withRouter } from 'react-router';
import {fetchProfile} from '../../services/fetchProfile'
import { Button } from '@material-ui/core';
import classes from './UserProfile.css'
import HireDialog from '../../Common Component/HireDialogs/HireDialogs'
class UserProfile extends Component{

    state={
        userId:'',
        openHireDialog:false,
        
    }
    componentWillMount=()=>{
        let userId=this.props.history.location.pathname.split('/')[3]
        // console.log(userId,this.props)
        fetchProfile(userId).then(res=>{
            this.setState({userData:res})
        })
    }
    openHireDialog=()=>{
        this.setState({openHireDialog:true})
    }
    closeHireDialog=()=>{
        this.setState({openHireDialog:false})
    }
    render(){
        return(
            <div>
                {console.log(this.state)}
                {this.state.userData?
                    <div className={classes.root} >
                        <div style={{width:300,borderStyle:'solid',borderWidth:1,boxShadow:'2px 2px 15px blue',borderRadius:10,marginTop:50}}>
                            {this.state.userData.imageUrl?
                            <img style={{borderRadius:10,height:300,width:300}} src={this.state.userData.imageUrl    }></img>:
                            <img style={{borderRadius:10,height:300,width:300}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI6D9KPMLRDF-5iiqfz7fpiczzbTqGKcvsMyQslzy5PJp9NOED'></img>
                            }
                            <div style={{textAlign:'center',fontSize:30}}>{this.state.userData.firstName+'  '+this.state.userData.firstName} </div>
                            <div style={{textAlign:'center',fontSize:22}}>{this.state.userData.email}</div>
                            <div style={{textAlign:'center',fontSize:22}}>{this.state.userData.location}</div>
                            <div style={{textAlign:'center',fontSize:22}}>{this.state.userData.mobile}</div>
                            <div style={{textAlign:'center',fontSize:22,display:'flex',justifyContent:'space-between'}}>
                                <div>{this.state.userData.age}</div><div>{this.state.userData.price}</div>
                            </div>
                            
                        </div>


                        <div style={{width:300,justifyContent:'space-between',marginTop:50}} >
                            <div style={{borderStyle:'solid',borderWidth:1,boxShadow:'2px 2px 15px blue',borderRadius:10}}>
                                <div style={{textAlign:'center',fontSize:22}}>{this.state.userData.games}</div>
                                <div style={{textAlign:'center',fontSize:22}}>{this.state.userData.hobbies}</div>
                            </div>
                            {this.props.history.location.pathname.split('/')[3]!==sessionStorage.getItem('userId')?
                            <div style={{textAlign:'center',height:100,fontSize:22,marginTop:50,borderStyle:'solid',borderWidth:1,boxShadow:'2px 2px 15px blue',borderRadius:10}}>
                                <Button variant='contained'color='primary'style={{marginTop:30}} onClick={this.openHireDialog}>Schedule</Button>
                                
                            </div>:null}
                        </div>

                    </div>
                :null}
                {this.state.userData?
                    <HireDialog data={{userId:this.props.history.location.pathname.split('/')[3],data:this.state.userData}} openHireDialog={this.state.openHireDialog} closeHireDialog={this.closeHireDialog}></HireDialog>
                :null}
            </div>
        )
    }
}

export default withRouter(UserProfile)