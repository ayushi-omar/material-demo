import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from "@material-ui/icons/Share";
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme=>({
  imgCardBg: {
    backgroundColor: props => (props.odd ? "pink": "red")
  },
  imgCardColor: props => {
    return {
      // color: props.odd ? "black": "white",
      backgroundColor: props.odd ? "pink": "red",
      [theme.breakpoints.up("sm")]: {
        color: "green",
        padding: "10px"
      }
      }
    }
  }
));

export default function CoffeeCard(props) {
  const classes = useStyles(props);
  const {avatarSrc, title, subTitle, description, imageSrc} = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarSrc}/>}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />
      <CardMedia
        className={classes.imgCardColor}
        style={{ height: "150px" }}
        image={imageSrc}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
}