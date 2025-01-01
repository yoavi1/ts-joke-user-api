import { useState } from 'react';
import FormLoginPage2 from '../components/FormLoginPage2';

function LoginPage2() {
  const [FormData, setFormData] = useState({});

  const saveFormData = (data) => {
    setFormData(data);
    console.log(data);
  };

  return (
    <>
      <FormLoginPage2 handleSaveFormData={saveFormData} />
      <div>{FormData._id}</div>
    </>
  );
}

export default LoginPage2;
