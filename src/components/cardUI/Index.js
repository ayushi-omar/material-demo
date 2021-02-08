import React from 'react';
import {Grid, AppBar, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Content from "./Content";

// const useHeaderStyle = makeStyles(()=>({
//     typographyStyles:{
//         flex: 1
//     }
// })); 

const CardUI = ()=> {
    return (
        <Grid container direction="column">
            <Grid item><Header/></Grid>
            <Grid item container>
                <Grid item xs={false} sm={2}/>
                <Grid item xm={12} sm={8}>
                    <Content/>
                </Grid>
                <Grid item xs={false} sm={2}/>
            </Grid>

        </Grid>
    )
}



export default CardUI;