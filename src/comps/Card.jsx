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
    bottom: '-35px',
    left:'15px',
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

const CardItem = () => {
  const classes = useStyles();

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
              badgeContent={<StyledBadge alt="badge" src="https://reactjs.org/logo-og.png" />}
            >
              <Avatar className={classes.avatar} alt="avatar-image" src="https://reactjs.org/logo-og.png" />
            </Badge>
            <div className={classes.readCircle}/>
          </Grid>
          <Grid item container className={classes.rightSide} xs={9} sm={10} direction="column">
            <Grid item container justify="space-between" className={classes.cardInfo}>
              <Grid item>
                <Typography noWrap>
                  site
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  date
                </Typography>
              </Grid>
            </Grid>
              <Grid item xs={12}>
                <Typography display="block" noWrap className={classes.cardTitle}>
                  title Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quidem, debitis necessitatibus eius aspernatur quis quibusdam odio sed deleniti facere!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.cardDescription}>
                  description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, molestiae et quia architecto minima nobis consectetur accusamus odit. At deleniti sed error, suscipit molestiae aliquid sint dignissimos! Minima inventore beatae voluptatibus adipisci sed sequi, id exercitationem nihil non iusto quibusdam, enim nobis voluptatem asperiores, hic praesentium unde delectus veritatis deserunt!
                </Typography>
              </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default CardItem;
