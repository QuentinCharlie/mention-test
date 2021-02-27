import React from "react";
import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { getHostname, highlightWord } from "../utils/functions";

const useStyles = makeStyles({
  cardInfo: {
    color: "#A2ADB7",
    fontSize: ".8rem",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#444444",
    cursor: "pointer",
  },
  cardDescription: {
    color: "#8797A5",
    height: "3rem",
    overflow: "auto",
  },
  notRead: {
    color: "#259ADB",
  },
  highlighted: {
    fontWeight: "bold",
    backgroundColor: "#FFF8A9",
  },
});

const CardDetails = ({
  link,
  site,
  date,
  title,
  description,
  read,
  setIsRead,
}) => {
  const classes = useStyles();
  const smallDate = new Date(date);

  return (
    <>
      <Grid item container justify="space-between" className={classes.cardInfo}>
        <Grid item>
          <Typography noWrap>{getHostname(site)}</Typography>
        </Grid>
        <Grid item>
          <Typography className={clsx(!read && classes.notRead)}>
            {smallDate.getDate()}{" "}
            {smallDate.toLocaleString("en-EN", { month: "short" })}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Link
          onClick={() => setIsRead(true)}
          href={link}
          target="_blank"
          rel="noreferrer"
          underline="hover"
        >
          <Typography display="block" noWrap className={classes.cardTitle}>
            {highlightWord(title, "mention", classes.highlighted)}
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.cardDescription}>
          {highlightWord(description, "mention", classes.highlighted)}
        </Typography>
      </Grid>
    </>
  );
};

export default CardDetails;
