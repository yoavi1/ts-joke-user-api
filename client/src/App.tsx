import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage2 from './pages/LoginPage2';
import { UserPage } from './pages/UserPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  // const [joke, setJoke] = useState('');
  const [jokes, setJokes] = useState([]);
  const [joke, setJoke] = useState('');
  const [users, setUsers] = useState([]);

  // function getFirstElement<Element>(kind: Element[]) {
  //   return kind[0];
  // }
  // const number = [1, 2, 3, 4, 5];
  // const string = ['1', '2', '3', '4', '5'];
  // const mix = [1, '2', 3, '4', 5];
  // const firstNumber = getFirstElement(number);
  // const firstSring = getFirstElement([1, '1']);
  // const mixed = [mix];

  // console.log(firstNumber);
  // console.log(firstSring);
  // console.log(mixed);

  async function fetchJoke() {
    const res = await axios.get('http://localhost:3000/api/v1/jokes/random');
    console.log(res.data);

    setJoke(res.data);
    console.log('Component updated');
  }

  async function getAllJokes() {
    const res = await axios.get('http://localhost:3000/api/v1/jokes');
    console.log(res.data);

    setJokes(res.data);
    console.log('Component updated');
  }

  async function handleGetAllUsers() {
    const res = await axios.get('http://localhost:3000/api/v1/users');
    console.log(res.data);
    setUsers(res.data);
    console.log(users);
  }

  useEffect(() => {
    // fetchJoke();
    getAllJokes();
    console.log('Component mounted');
  }, []);
  console.log(joke, '1');

  return (
    <>
      {/* {console.log(users)} */}
      <NavBar />
      <Routes>
        <Route
          path="/"
          // element={<HomePage jokes={jokes} />}
          element={<HomePage jokes={jokes} joke={joke} fetchJoke={fetchJoke} />}
        />
        <Route
          path="/users"
          element={<UserPage getAllUsers={handleGetAllUsers} users={users} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login2" element={<LoginPage2 />} />
      </Routes>
    </>
  );
}

export default App;
