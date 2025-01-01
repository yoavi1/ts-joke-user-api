import { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import LoginPage from './LoginPage';
function RegisterPage() {
  const [userDetails, setUserDetails] = useState({});
  const [registed, setregisted] = useState(false);

  const saveUserDetails = (fName, Lname, phone_number) => {
    setUserDetails({ fName, Lname, phone_number });
  };
  const isRegisted = (registed) => {
    setregisted(!registed);
    // console.log(registed);
  };

  return (
    <>
      {registed ? (
        <LoginPage />
      ) : (
        <RegisterForm
          userDetails={userDetails}
          saveUserDetails={saveUserDetails}
          isRegisted={isRegisted}
          registed={registed}
        />
      )}
    </>
  );
}

export default RegisterPage;
