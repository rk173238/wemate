import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
// import DatePicker from 'material-ui/DatePicker';
// import TimePicker from 'material-ui/TimePicker';
import Typography from '@material-ui/core/Typography';
import { DialogContent } from '@material-ui/core';
import {sendHireRequest} from '../../services/sendHireRequest'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';


class HireDialogs extends Component{

    state={
        selectedDate:new Date(),
        openNotificationSentDialog:false,
        
    }
    handleDateChange=(date)=>{
        this.setState({selectedDate:date})
    }
    clickedSchedule=()=>{
        let time=this.state.selectedDate.getDate()+'-'+(+this.state.selectedDate.getMonth()+1)+'-'+this.state.selectedDate.getFullYear()
            +'&'+'T'+this.state.selectedDate.getHours()+':'+this.state.selectedDate.getMinutes()
        sendHireRequest.hire(this.props.data,time)
        .then(res=>{
            this.setState({openNotificationSentDialog:true})
            this.props.closeHireDialog()
        })
        
    }
    render(){
        return(
            <div>{console.log(this.props.data)}
               <Dialog open={this.props.openHireDialog} onClose={this.props.closeHireDialog} style={{width:'100%'}}>
                   <DialogTitle>Please Provide Date And Time</DialogTitle>
                   {/* <DatePicker></DatePicker> */}
                   {/* <KeyboardDatePicker></KeyboardDatePicker> */}
                   <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <div style={{display:'flex',textAlign:'center'}}>
                        <Button color='primary' variant='contained' style={{width:'55%',marginLeft:'5%'}} onClick={this.clickedSchedule}>Ok</Button>
                        <Button color='secondary' variant='contained' style={{width:'30%', marginLeft:'5%'}} onClick={this.props.closeHireDialog}>Cancel</Button>
                    </div>
               </Dialog>
               <Dialog open={this.state.openNotificationSentDialog} onClose={()=>this.setState({openNotificationSentDialog:false})}> 
                        <DialogTitle>
                            Request has been sent to {this.props.data.data.firstName+' '+this.props.data.data.lastName} <br></br>Note Sheduled Date:-<br></br>
                            {this.state.selectedDate.getDate()+'/'+(+this.state.selectedDate.getMonth()+1)+'/'+this.state.selectedDate.getFullYear()}
                            <br></br>and Time:-<br></br>
                            {this.state.selectedDate.getHours()+':'+this.state.selectedDate.getMinutes()}
                        </DialogTitle><Typography></Typography>
                        {/* {console.log(this.state.selectedDate)} */}
                </Dialog>
                {/* {console.log(this.props)} */}
            </div>
        )
    }
}
export default HireDialogs;