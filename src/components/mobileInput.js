import React from 'react';
import {Grid, Card, Paper, TextField, Typography, InputLabel, Select, MenuItem, InputBase, NativeSelect} from "@material-ui/core";
import { makeStyles, fade, withStyles } from "@material-ui/core/styles";

const countryCodes = [
    {
      label: 'India (IND)',
      value: '+91',
    },
    {
      label: 'United States (USA)',
      value: '+1',
    },
    {
      label: 'Afganishan (AFG)',
      value: '+93',
    },
    {
      label: 'Albania(ALB)',
      value: '+355',
    },
    {
      label: 'Algeria(DZA)',
      value: '+213',
    },
    {
      label: 'American Samoa(ASM)',
      value: '+1',
    },
    {
      label: 'Andorra (AND)',
      value: '+376',
    },
  ];

const useStylesMobile = makeStyles((theme) => ({
    root: {
        backgroundColor: "pink",
        "& div.MuiInputBase-input":{
        backgroundColor: "yellow",
            paddingLeft: "10px",
            // marginLeft: "20px"
            // "& .MuiInputBase-input":{
                // paddingLeft: "20px"
            // }
        },
    },
    dropdownStyle: {
        // borderBottom: "1px solid black",
        // boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 1px`,
        borderRadius: "2%",
        backgroundColor:'#fff',
        width: "26.5%",
        [theme.breakpoints.down("xs")]:{
            width: "78%"
        },
        // marginTop: "50px !important",
        
        "& ul": {
            paddingTop: "0px",
            // backgroundColor: "#cccccc",
        },
        "& li": {
            marginTop: "0px",
            backgroundColor:'#fff',
            // fontSize: 12,
        },
        '&:hover': {
            backgroundColor: '#fff',
          },
      },
      margin: {
        // margin: theme.spacing(1),
        display: "flex",
        padding: "12px"
      },
  }));
  

  function RedditMobileField(props) {
    const classes = useStylesMobile();
    const [countryCode, setCountryCode] = React.useState('+91');

    const handleChange = (event) => {
        setCountryCode(event.target.value);
      };
    return (
        <form  className={classes.margin}>
        {/* <div className={classes.margin}> */}
        <Select
          id="demo-simple-select"
        // id="demo-simple-select-outlined"
          style={{backgroundColor:'#fff'}}
          className={{root: classes.root}}
          value={countryCode}
          onChange={handleChange}
          renderValue={(value) => `${value}`}
          MenuProps={{
          classes: { paper: classes.dropdownStyle },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          getContentAnchorEl: null 
        }}
          disableUnderline
        >
          {countryCodes.map((option) => (
            <MenuItem key={option.value} value={option.value} id="menu-list-grow" className={classes.menuItem}>
              <span style={{flex: 10}}>{option.label}</span>
              <span style={{flex: 1, paddingLeft: "5px"}}>{option.value}</span>
            </MenuItem>
          ))}
        </Select>
        <RedditTextField
            placeholder="Enter Mobile Number" 
            variant="filled"
            id="reddit-input"
            style={{width: "100%"}}
        />
    </form>

    );
  }

  const useStylesReddit = makeStyles((theme) => ({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
      "& input":{
          padding: "19px 12px"
      }
    },
  }));
  
  function RedditTextField(props) {
    const classes = useStylesReddit();
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props}/>;
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    typographyStyles:{
        fontWeight: "bold"
    },
    paperContainer: {
        // padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "100%",
        height: "100%",
    },
  }));

const MobileInput = ()=> {
  const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item xs={false} sm={4} variant/>
            <Grid item container direction="column" xm={12} sm={4}>
            <Paper className={classes.paper}>
                <Grid item>
                    <Typography variant="h6" gutterBottom className={classes.typographyStyles}>Please enter your mobile number</Typography>
                </Grid>
                <Grid item style={{backgroundColor: "#eee", height: "400px"}}>
                    {/* <form style={{padding: "10px", backgroundColor: "red", height: "400px", }}> */}
                    <RedditMobileField/>
                    {/* </form> */}
                    {/* <RedditTextField
                        placeholder="Enter Mobile Number" 
                        className={classes.margin}
                        // defaultValue="react-reddit"
                        variant="filled"
                        id="reddit-input"
                    /> */}
                </Grid>
                </Paper>
            </Grid>
            <Grid item xs={false} sm={4}/>
        </Grid>
    )
}



export default MobileInput;