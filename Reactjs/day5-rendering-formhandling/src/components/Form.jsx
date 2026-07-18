import React, { useState } from "react";

const Form = () => {
  // Brute force approach of Input handling
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  // Better approach of Input handling
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });
  //   const [formData, setFormData] = useState({});

  //  Optimised approach of Input handling
  const [formData, setFormData] = useState({});

  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log("formData->", formData);

  return (
    <div className="flex flex-col gap-2 w-80 p-4">
      <input
        // onChange={(e) => setName(e.target.value)} // brute force approach
        // onChange={(e) => setFormData({ ...formData, name: e.target.value })} // better approach
        onChange={handleChange} // optimised approach
        placeholder="Name"
        type="text"
        className="p-2 rounded border"
        name="name"
      />
      <input
        // onChange={(e) => setEmail(e.target.value)} // brute force approach
        // onChange={(e) => setFormData({ ...formData, email: e.target.value })} // better approach
        onChange={handleChange} // optimised approach
        placeholder="Email"
        type="email"
        className="p-2 rounded border"
        name="email"
      />
      <input
        // onChange={(e) => setPassword(e.target.value)} // brute force approach
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} // better approach
        onChange={handleChange} // optimised approach
        placeholder="password"
        type="password"
        className="p-2 rounded border"
        name="password"
      />

      <div>
        <h1>Name is : {formData.name}</h1>
        <h1>Email is : {formData.email}</h1>
        <h1>Password is : {formData.password}</h1>
      </div>
    </div>
  );
};

export default Form;
