import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phoneNo: "",
  });

  const [save, setSave] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:8080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        phoneNo: data.phoneNo,
      }),
    });

    response = await response.json();
    console.log(response);
    if (response.success) {
      setSave(true);
      setData({
        firstName: "",
        lastName: "",
        age: "",
        phoneNo: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter First name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Last name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter age"
          name="age"
          value={data.age}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Phone no."
          name="phoneNo"
          value={data.phoneNo}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit" onClick={() => setSave((prev) => prev = !prev)}>{save ? "Add another" : "Save"}</button>
        {save && <h1>Data Saved</h1> }
      </form>
    </>
  );
}

export default App;
