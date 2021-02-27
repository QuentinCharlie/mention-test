import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./comps/Card";
import { getMentions } from "./utils/api";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

const App = () => {
  const [mentions, setMentions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setMentions(await getMentions());
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      <header className="App-header">
        {isLoading && <CircularProgress />}
        {!isLoading && !mentions && (
          <Grid container direction="column" alignItems="center">
            <ErrorIcon fontSize="large" color="error" />
            <Typography>Something went wrong...</Typography>
          </Grid>
        )}
        {!isLoading &&
          !!mentions &&
          mentions?.map((mention) => (
            <Card
              key={mention.id}
              link={mention.original_url}
              avatar={mention.picture_url}
              site={mention.source_url}
              date={mention.published_at}
              title={mention.title}
              description={mention.description_short}
              read={mention.read}
            />
          ))}
      </header>
    </div>
  );
};

export default App;
