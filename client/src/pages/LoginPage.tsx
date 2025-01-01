import LoginForm from '../components/LoginForm';
import BasicCard from '../components/BasicCard';
import { useState } from 'react';
function LoginPage() {
  const [userPropertys, setuserPropertys] = useState({});
  const [logedIn, setlogedIn] = useState(false);
  const { fName, lName, jokes } = userPropertys;

  console.log(fName, lName, jokes);
  //   console.log(logedIn);

  const saveUserId = (propertys) => {
    setuserPropertys(propertys);
    setlogedIn(!logedIn);
  };

  return (
    <>
      <div className="flex justify-center m-8 ">
        {logedIn ? (
          <>
            <div className="flex flex-col">
              <h1 className="text-center text-indigo-500 font-mono font-bold text-xl">
                Welcome {fName} {lName}
              </h1>
              {jokes.map((joke) => (
                <BasicCard key={joke._id} joke={joke} />
              ))}
            </div>
          </>
        ) : (
          <LoginForm saveUserId={saveUserId} />
        )}
      </div>
    </>
  );
}

export default LoginPage;
