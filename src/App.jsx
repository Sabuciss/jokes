import { useState } from 'react';
import './App.css';
import Joke from './joke';

function App() {
  const [jokes, setJokes] = useState([
    {
      type: "programming",
      setup: "A user interface is like a joke.",
      punchline: "If you have to explain it then it is not that good.",
      id: 59,
    },
    {
      type: "general",
      setup: "What did the 0 say to the 8?",
      punchline: "Nice belt.",
      id: 165,
    },
    {
      type: "programming",
      setup: "What did the router say to the doctor?",
      punchline: "It hurts when IP.",
      id: 366,
    },
    {
      type: "general",
      setup: "What do you call a cow on a trampoline?",
      punchline: "A milk shake!",
      id: 195,
    },
    {
    "type": "general",
    "setup": "My older brother always tore the last pages of my comic books, and never told me why.",
    "punchline": "I had to draw my own conclusions.",
    "id": 386
  },
  {
    "type": "general",
    "setup": "What's the best thing about Switzerland?",
    "punchline": "I don't know, but their flag is a big plus.",
    "id": 426
  },
  {
    "type": "general",
    "setup": "What did one ocean say to the other ocean?",
    "punchline": "Nothing, they just waved.",
    "id": 425
  },
  {
    "type": "general",
    "setup": "Why did the kid cross the playground?",
    "punchline": "To get to the other slide.",
    "id": 327
  },
  {
    "type": "general",
    "setup": "A grocery store cashier asked if I would like my milk in a bag.",
    "punchline": "I told her 'No, thanks. The carton works fine.'",
    "id": 397
  },
  {
    "type": "general",
    "setup": "What do you get when you cross a rabbit with a water hose?",
    "punchline": "Hare spray.",
    "id": 231
  },
  {
    "type": "general",
    "setup": "What do you call a group of killer whales playing instruments?",
    "punchline": "An Orca-stra.",
    "id": 209
  },
  {
    "type": "general",
    "setup": "Did you hear the one about the guy with the broken hearing aid?",
    "punchline": "Neither did he.",
    "id": 100
  },
  {
    "type": "programming",
    "setup": "What is the most used language in programming?",
    "punchline": "Profanity.",
    "id": 381
  },
  {
    "type": "general",
    "setup": "Did you hear about the kidnapping at school?",
    "punchline": "It's ok, he woke up.",
    "id": 90
  }
  ]);

  
   return (
    <div>
      <h1 style={{color: "#8B5DFF", textAlign: "center" }}>Joki</h1>

      
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
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    </div>
  );
}

export default App;