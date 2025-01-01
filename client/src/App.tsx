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

export type joke = {
  setup: string;
  punchline: string;
  _id: string;
};

export type user = {
  _id: string;
  phone_number: string;
  lName: string;
  fName: string;
  jokes: joke[];
};

function App() {
  // const [joke, setJoke] = useState('');
  const [jokes, setJokes] = useState([]);
  const [joke, setJoke] = useState<joke>({} as joke);
  const [users, setUsers] = useState<user[]>([]);

  //   function safeReturnValueInArray<T>(value: T) {
  //     return value;
  //   }

  //   // real use cases:
  // interface MyResponse<T> {
  //   items: T[];
  //   selectedItem: T | null;
  // }

  // const response_2: MyResponse<string | number> = {
  //   items: [],
  //   selectedItem: null,
  // };

  // response_2.selectedItem = 2;
  // response_2.selectedItem = "lulu";

  // response_2.items.push(2);
  // response_2.items.push("lulu");

  // function getFirstElement<Element>(kind: Element[]) {
  //   return kind[0];
  // }
  // const numbers = [1, 3, 3, 4, 5];
  // numbers.map((number) => {
  //   return "hey"
  // })
  // const string = ['1', '2', '3', '4', '5'];
  // const mix = [1, '2', 3, '4', 5];
  // const firstNumber = getFirstElement(numbers);
  // const firstSring = getFirstElement([1, '1']);
  // const mixed = [mix];

  // console.log(firstNumber);
  // console.log(firstSring);
  // console.log(mixed);

  async function fetchJoke() {
    const res = await axios.get('http://localhost:3000/api/v1/jokes/random');
    console.log(res.data);
    const { setup, punchline, _id } = res.data;
    setJoke({ setup, punchline, _id });
  }

  async function getAllJokes() {
    const res = await axios.get('http://localhost:3000/api/v1/jokes');
    console.log(res.data);
    setJokes(res.data);
  }

  async function handleGetAllUsers() {
    const res = await axios.get('http://localhost:3000/api/v1/users');
    console.log(res.data);
    setUsers(res.data);
  }

  useEffect(() => {
    // fetchJoke();
    getAllJokes();
  }, []);

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
