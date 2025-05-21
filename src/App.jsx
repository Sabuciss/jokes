import { useState, useEffect } from 'react';
import './App.css';
import Joke from './joke';

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchJokes() {
      const response = await fetch("https://official-joke-api.appspot.com/jokes/random/10");
      const jokesFromAPI = await response.json();
      setJokes(jokesFromAPI);
      setLoading(false);
    }
    fetchJokes();
  }, []);

  return (
    <div>
      <h1 style={{ color: "#8B5DFF", textAlign: "center" }}>Joki</h1>

      {loading ? (
        <p style={{ textAlign: "center" }}>Lādējas...</p> 
      ) : (
        <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
          {jokes.map((joke) => (
            <Joke key={joke.id} {...joke}/> 
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
