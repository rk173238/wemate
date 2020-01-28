import React,{Component} from 'react'
import LoginPage from './LoginPage/LoginPage'
import Home from './Home/Home'
import {Route,Redirect,Switch} from 'react-router';
import { withRouter } from 'react-router';
import {connect} from 'react-redux'
class Main extends Component{
    state={
        // logedin:false,
    }

    
    render(){
        
        return(
            <div >
                <Switch>
                    <Route path='/' exact render={()=>(<Redirect to='/login'></Redirect>)}></Route>>   
                    <Route path='/login' exact render={()=>(this.props.logedin?<Redirect to='/home/user'></Redirect>
                                                            :<LoginPage ></LoginPage>)}>
                                        
                    </Route>
                    <Route path='/home/' render={()=>(this.props.logedin?
                        <Home></Home>
                        :<Redirect to='/login'></Redirect>)}>
                            {/* {console.log('route home')} */}
                    </Route>
                </Switch>
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    // console.log(state)
    return{
        logedin:state.loginReducer.logedin,
        userName:state.loginReducer.userName,
    }
}
const mapDispatchToProps=dispatch=>{
    
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);