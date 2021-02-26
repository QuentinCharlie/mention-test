import React, { useEffect } from "react";
import './App.css';
import Card from './comps/Card';
import { getMentions } from './utils/api';

const App = () => {
  useEffect(() => {
    (async () => console.log(await getMentions()))()
  }, [])

  return (
    <div>
      <header className="App-header">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </header>
    </div>
  );
}

export default App;
