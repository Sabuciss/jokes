import { useState } from 'react';
import './joke.css';



function Joke({ joke }) {
  return (
    <div className="card">
      <div className="card-content">
        <p className="card-title">{joke.setup}</p>
        <p className="card-para">{joke.punchline}</p>
        <p className="card-para"><small>Kategorija: {joke.type}</small></p>
      </div>
    </div>
  );
}

export default Joke;


