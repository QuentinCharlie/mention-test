import React from "react";
import { Avatar, Badge, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import StyledBadge from './StyledBadge';

const useStyles = makeStyles({
  root: {
    width: '90%',
    maxWidth: '600px',
    border: '1px solid #282c34'
  },
  paper: {
    padding: '20px',
  },
  leftSide: {
    height: '40px',
    position: 'relative'
  },
  avatar: {
  },
  readCircle: {
    position: 'absolute',
    bottom: '-35px', left:'15px',
    width: '13px',
    height: '13px',
    borderRadius: '50px',
    backgroundColor: '#259ADB'
  },
  rightSide: {
    paddingLeft: '20px',
  },
  cardInfo: {
    color: '#A2ADB7',
    fontSize: '.8rem'
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#444444',
    cursor: 'pointer'
  },
  cardDescription: {
    color: '#8797A5',
    height: '3rem',
    overflow: 'auto'
  }
});

const CardItem = ({
  avatar,
  site,
  date,
  title,
  description
}) => {
  const classes = useStyles();
  const smallDate = new Date(date);

  const getHostname = (url) => {
    return new URL(url).hostname;
  }

  return (
    <div className={classes.root}>
      <Paper square className={classes.paper}>
        <Grid container>
          <Grid item container className={classes.leftSide} xs={2} sm={1}>
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={<StyledBadge alt="badge-image" src="https://reactjs.org/logo-og.png" />}
            >
              <Avatar onClick={() => console.log(description)} alt="avatar-image" src={avatar} className={classes.avatar}/>
            </Badge>
            <div className={classes.readCircle}/>
          </Grid>
          <Grid item container className={classes.rightSide} xs={9} sm={10} direction="column">
            <Grid item container justify="space-between" className={classes.cardInfo}>
              <Grid item>
                <Typography noWrap>
                  {getHostname(site)}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  {smallDate.getDate()} {smallDate.toLocaleString('en-EN', { month: 'short' })}
                </Typography>
              </Grid>
            </Grid>
              <Grid item xs={12}>
                <Typography display="block" noWrap className={classes.cardTitle}>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.cardDescription}>
                  {description}
                </Typography>
              </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default CardItem;
