import React from 'react';
import {Grid, AppBar, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CoffeeCard from "./CoffeeCard";


const Content =()=>{
    // const classes = useHeaderStyle();
    return (
        <Grid container spacing={2}>
            <Grid item xm={12} sm ={4}>
                <CoffeeCard 
                odd
                title="Bru coffee" 
                subTitle="$44.44" 
                avatarSrc="#"
                imageSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71IeYNcBYdL._SL1280_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FJust-Flowers-Teddy-Roses-Bouquet%2Fdp%2FB07FPPGX67&tbnid=IoG1hP3sZH4PlM&vet=12ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ..i&docid=pB4wSL29_uvWAM&w=1280&h=1200&q=flower%20images&ved=2ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ"
                description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                />
            </Grid>
            <Grid item xm={12} sm ={4}>
                <CoffeeCard 
                title="Bru coffee" 
                subTitle="$44.44" 
                avatarSrc="#"
                imageSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71IeYNcBYdL._SL1280_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FJust-Flowers-Teddy-Roses-Bouquet%2Fdp%2FB07FPPGX67&tbnid=IoG1hP3sZH4PlM&vet=12ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ..i&docid=pB4wSL29_uvWAM&w=1280&h=1200&q=flower%20images&ved=2ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ"
                description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                />
            </Grid>
            <Grid item xm={12} sm ={4}>
                <CoffeeCard 
                odd
                title="Bru coffee" 
                subTitle="$44.44" 
                avatarSrc="#"
                imageSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71IeYNcBYdL._SL1280_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FJust-Flowers-Teddy-Roses-Bouquet%2Fdp%2FB07FPPGX67&tbnid=IoG1hP3sZH4PlM&vet=12ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ..i&docid=pB4wSL29_uvWAM&w=1280&h=1200&q=flower%20images&ved=2ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ"
                description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add with the mussels, if you like."
                />
            </Grid>
            <Grid item xm={12} sm ={4}>
                <CoffeeCard 
                title="Bru coffee" 
                subTitle="$44.44" 
                avatarSrc="#"
                imageSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71IeYNcBYdL._SL1280_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FJust-Flowers-Teddy-Roses-Bouquet%2Fdp%2FB07FPPGX67&tbnid=IoG1hP3sZH4PlM&vet=12ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ..i&docid=pB4wSL29_uvWAM&w=1280&h=1200&q=flower%20images&ved=2ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ"
                description="This impressive paella is a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                />
            </Grid>
            <Grid item xm={12} sm ={4}>
                <CoffeeCard 
                odd
                title="Bru coffee" 
                subTitle="$44.44" 
                avatarSrc="#"
                imageSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71IeYNcBYdL._SL1280_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FJust-Flowers-Teddy-Roses-Bouquet%2Fdp%2FB07FPPGX67&tbnid=IoG1hP3sZH4PlM&vet=12ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ..i&docid=pB4wSL29_uvWAM&w=1280&h=1200&q=flower%20images&ved=2ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ"
                description="This impressive paella is meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                />
            </Grid>
            <Grid item xm={12} sm ={4}>
                <CoffeeCard 
                title="Bru coffee" 
                subTitle="$44.44" 
                avatarSrc="#"
                imageSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71IeYNcBYdL._SL1280_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FJust-Flowers-Teddy-Roses-Bouquet%2Fdp%2FB07FPPGX67&tbnid=IoG1hP3sZH4PlM&vet=12ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ..i&docid=pB4wSL29_uvWAM&w=1280&h=1200&q=flower%20images&ved=2ahUKEwjouqyZqM7uAhWPW30KHec8C6UQMygVegUIARD-AQ"
                description="This impressive paella is a perfect party guests. Add 1 cup of frozen peas along with the mussels, if you like."
                />
            </Grid>
        </Grid>
    
    )
}

export default Content;