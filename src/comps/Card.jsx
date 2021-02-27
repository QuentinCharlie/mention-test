import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import AvatarWithBadge from "../assets/AvatarWithBadge";
import CardDetails from "./CardDetails";

const useStyles = makeStyles({
  root: {
    width: "90%",
    maxWidth: "600px",
    border: "1px solid #282c34",
  },
  paper: {
    padding: "20px",
  },
  leftSide: {
    height: "40px",
    position: "relative",
  },
  readCircle: {
    position: "absolute",
    bottom: "-30px",
    left: "15px",
    width: "13px",
    height: "13px",
    borderRadius: "50px",
    backgroundColor: "#259ADB",
  },
  rightSide: {
    paddingLeft: "20px",
  },
});

const CardItem = ({ link, avatar, site, date, title, description, read }) => {
  const classes = useStyles();
  const [isRead, setIsRead] = React.useState(read);

  return (
    <div className={classes.root}>
      <Paper square className={classes.paper}>
        <Grid container>
          <Grid item container xs={2} sm={1} className={classes.leftSide}>
            <AvatarWithBadge avatar={avatar} />
            {!isRead && (
              <Grid item className={classes.readCircle} aria-label="not-read" />
            )}
          </Grid>
          <Grid
            item
            container
            xs={9}
            sm={10}
            direction="column"
            className={classes.rightSide}
          >
            <CardDetails
              link={link}
              site={site}
              date={date}
              title={title}
              description={description}
              read={isRead}
              setIsRead={setIsRead}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CardItem;
