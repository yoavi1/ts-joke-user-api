import axios from 'axios';
function FormLoginPage2({ handleSaveFormData }) {
  async function handleSubmite(formData) {
    // console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data, 'data');
    const res = await axios.get(
      `http://localhost:3000/api/v1/users/${data.userId}`
    );
    // const { _id, fName, lName, phone_number } = res.data;

    // console.log(_id, fName, lName, phone_number);

    handleSaveFormData(res.data);
  }

  return (
    <form action={handleSubmite} className="flex flex-col gap-4  items-center">
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

export default FormLoginPage2;
