import axios from 'axios';

function LoginForm({ saveUserId }) {
  const handleSubmite = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    console.log(payload);
    const res = await axios.get(
      `http://localhost:3000/api/v1/users/${payload.userId}`
    );
    console.log('fetch data', res.data);
    saveUserId(res.data);
  };

  return (
    <form
      onSubmit={handleSubmite}
      className="flex flex-col gap-4  items-center"
    >
      <div className="flex gap-4 ">
        <label>user id:</label>
        <input
          className="border-solid border-2 border- border-slate-900"
          type="text"
          placeholder="user id"
          name="userId"
          defaultValue="677573223a534ce8fe47a9d7"
        />
      </div>
      <button
        type="submit"
        className=" rounded-md max-w-24 p-2 border-solid border-2  border-red-700 bg-yellow-100"
      >
        submit
      </button>
    </form>
  );
}

export default LoginForm;
