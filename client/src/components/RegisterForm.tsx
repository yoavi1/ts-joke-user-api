import axios from 'axios';

function RegisterForm({ userDetails, saveUserDetails, isRegisted, registed }) {
  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    console.log(payload);
    const { firstName: fName, lastName: lName, phone: phone_number } = payload;
    const res = await axios.post('http://localhost:3000/api/v1/users', {
      fName,
      lName,
      phone_number,
    });
    console.log(res.data);
    saveUserDetails({ fName, lName, phone_number });
    isRegisted(registed);
  };

  return (
    <div className=" h-[100vh] w-[100%] flex justify-center  bg-gray-200">
      <form
        onSubmit={submitForm}
        className="max-w-screen-md w-[400px] m-[4rem] flex gap-3 flex-col   "
      >
        <h1 className=" text-center text-4xl">Register</h1>
        {/* justify-between */}
        <div className=" justify-between flex  gap-3 ">
          <label className="text-2xl">first name:</label>
          <input
            type="text"
            className="  border-solid border-2 border-yellow-400"
            placeholder="first name"
            name="firstName"
          />
        </div>
        <div className=" justify-between flex  gap-3 ">
          <label className="text-2xl">last name:</label>
          <input
            type="text"
            className="  border-solid border-2 border-yellow-400"
            placeholder="last name"
            name="lastName"
          />
        </div>
        <div className="justify-between flex gap-3 ">
          <label className="text-2xl">phone:</label>
          <input
            className=" border-solid border-2  border-yellow-400"
            type="phone"
            placeholder="phone"
            name="phone"
          />
        </div>
        <button
          className=" border-solid
         border-4
         border-neutral-950
         rounded-lg p-2
          bg-orange-900
           text-white"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
