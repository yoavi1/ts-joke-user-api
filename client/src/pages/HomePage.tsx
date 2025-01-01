import BasicCard from '../components/BasicCard';
import { joke } from '../App';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// type joke = {};
type jokesList = {
  joke: joke;
  jokes: joke[];
  fetchJoke: () => void;
};
function HomePage({ jokes, joke, fetchJoke }: jokesList) {
  //   console.log(joke, '2');
  console.log(jokes);

  //   const [joke, setJoke] = useState('');
  //   async function fetchJoke() {
  //     const res = await axios.get('http://localhost:3000/api/v1/jokes/random');
  //     console.log(res.data);

  //     setJoke(res.data);
  //     console.log('Component updated');
  //   }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p> {joke.setup}</p>
          <p> {joke.punchline}</p>
        </div>

        <h1>Random Joke</h1>
        <button onClick={fetchJoke}>Get Random Joke</button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {jokes.map((joke) => (
          <BasicCard key={joke._id} joke={joke} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
