import React from "react";
import { Avatar, Badge, Grid, Link, makeStyles, Paper, Typography } from "@material-ui/core";
import StyledBadge from './StyledBadge';
import clsx from 'clsx';

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
  notRead: {
    color: '#259ADB'
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
  link,
  avatar,
  site,
  date,
  title,
  description,
  read
}) => {
  const classes = useStyles();
  const smallDate = new Date(date);
  const [isRead, setIsRead] = React.useState(read);

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
              <Avatar alt="avatar-image" src={avatar} className={classes.avatar}/>
            </Badge>
            {!isRead && 
              <div className={classes.readCircle}/>
            }
          </Grid>
          <Grid item container className={classes.rightSide} xs={9} sm={10} direction="column">
            <Grid item container justify="space-between" className={classes.cardInfo}>
              <Grid item>
                <Typography noWrap>
                  {getHostname(site)}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={clsx(!isRead && classes.notRead)}>
                  {smallDate.getDate()} {smallDate.toLocaleString('en-EN', { month: 'short' })}
                </Typography>
              </Grid>
            </Grid>
              <Grid item xs={12}>
                <Link onClick={() => setIsRead(true)} href={link} target="_blank" rel="noreferrer" underline='hover'>
                  <Typography display="block" noWrap className={classes.cardTitle}>
                    {title}
                  </Typography>
                </Link>
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
