import React, { useEffect, useState } from "react";
import './App.css';
import Card from './comps/Card';
import { getMentions } from './utils/api';

const App = () => {
  const [mentions, setMentions] = useState([]);
  
  useEffect(() => {
    (async () => setMentions(await getMentions()))()
  }, [])
  useEffect(() => console.log(mentions), [mentions])

  return (
    <div>
      <header className="App-header">
        {mentions?.map(mention =>
          <Card
            key={mention.id}
            avatar={mention.picture_url}
            site={mention.source_url}
            date={mention.published_at}
            title={mention.title}
            description={mention.description}
          />
        )}
      </header>
    </div>
  );
}

export default App;
