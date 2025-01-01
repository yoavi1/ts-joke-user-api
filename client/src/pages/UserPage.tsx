import axios from 'axios';
import { useState } from 'react';
import { user } from '../App';
import { joke } from '../App';

type UserPageProps = {
  getAllUsers: () => void;
  users: user[];
};

export const UserPage = ({ getAllUsers, users }: UserPageProps) => {
  const [userjokes, setuserjokes] = useState<joke[]>([]);
  const [showuserjokes, setshowuserjokes] = useState(false);
  const [Userclickid, setUserclickid] = useState('');
  async function fetchJokeById(userId: string) {
    const res = await axios.get(`http://localhost:3000/api/v1/users/${userId}`);
    console.log(res.data.jokes);
    const { jokes } = res.data;
    setuserjokes(jokes);
    setshowuserjokes(!showuserjokes);
    setUserclickid(userId);
  }

  return (
    <>
      <div className="flex justify-center  ">
        <button
          className="m-6 border-solid border-2 rounded-md font-bold border-gray-900 p-2 bg-sky-300"
          onClick={getAllUsers}
        >
          click to show users
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {users.map((user: user) => {
          return (
            <div
              className="rounded-md bg bg-violet-400 font-semibold "
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid black',
                margin: '8px 10px',
                maxWidth: '400px',
                minWidth: '300px',
                minHeight: '200px',
                color: 'black',
                textAlign: 'center',
                justifyContent: 'center',
              }}
              key={user._id}
              onClick={() => fetchJokeById(user._id)}
            >
              {showuserjokes && Userclickid === user._id ? (
                <>
                  {userjokes.map((joke) => {
                    return (
                      <div className="mb-2 " key={joke.setup}>
                        <h3>{joke.setup}</h3>
                        <h3>{joke.punchline}</h3>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <h1>{user.lName}</h1>
                  <h2>{user.fName}</h2>
                  {/* <h2>{user._id}</h2> */}
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
