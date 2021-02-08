import React from 'react';
import {AppBar, Toolbar, Typography, TextField, Grid, Dialog, DialogContent} from "@material-ui/core";
import AcUnitRounded from "@material-ui/icons/AcUnitRounded";
import { makeStyles } from "@material-ui/core/styles";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';



const useHeaderStyle = makeStyles((theme)=>({
    typographyStyles:{
        flex: 1
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        color: "#fff"
      },
      input:{
        color:'red'
    }
})); 

const Header =()=>{
    const classes = useHeaderStyle();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-09-01T21:11:54'));
    const [dialogOpen, setDialogOpen] = React.useState(false);


    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AppBar position="static" style={{marginBottom: 10}} color="transparent">
            <Toolbar>
                <Typography 
                // className={classes.typographyStyles}
                classes = {{root: classes.typographyStyles}} // its applies more specific than className
                >Hello Ayushi,</Typography>

                {/* <Dialog open={dialogOpen} onClose={()=>setDialogOpen(false)}> */}
                    <KeyboardDatePicker 
                    format="MM/dd/yyyy" 
                    value={selectedDate} 
                    onChange={(newDate)=>setSelectedDate(newDate)}
                    InputProps={{ className: classes.input }}
                    />

                {/* </Dialog> */}



                {/* <TextField
                    id="date"
                    label="Select Date"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    // color='secondary'
                    InputLabelProps={{
                        shrink: true,
                        // classes: {
                        //     input: classes.multilineColor
                        // }
                        // className: classes.multilineColor
                    }}
                /> */}

                {/* <AcUnitRounded/> */}
                
            </Toolbar>
        </AppBar>
        </MuiPickersUtilsProvider>
    )
}

export default Header;