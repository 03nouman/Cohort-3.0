import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setToggle }) => {
  // console.log("form rendering");// 2 times re-rendering first time and on trigged of an erorr
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues:{
      name:"",
      email:"",
      mobile:"",
      image:""
    }
  });
  // console.log("erors", errors);

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 ">
      <h1 className="text-2xl font-bold">Create User</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          // setUsers([...users, data]);
          setUsers((prev) => [...prev, data]);
          reset();
          setToggle((prev) => !prev);
        })}
        className="w-90 flex flex-col gap-4 border border-white p-4 rounded"
      >
        <input
          {...register("name", {
            required: "name is required",
            // pattern: {
            //   value: /^\s*$/,
            //   message: "Blank spaces are not allowed",
            // },
          })}
          className="p-2 rounded border outline-0"
          type="text"
          placeholder="name"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "please enter valid email",
            },
          })}
          className="p-2 rounded border outline-0"
          type="email"
          placeholder="email"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: "mobile is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          className="p-2 rounded border outline-0"
          type="number"
          placeholder="mobile"
        />
        {errors.mobile && (
          <p className="text-red-600">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", {
            required: "image url is required",
          })}
          className="p-2 rounded border outline-0"
          type="url"
          placeholder="image"
        />
        {errors.image && <p className="text-red-600">{errors.image.message}</p>}
        <button type="submit" className="p-2 rounded bg-blue-600 cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
