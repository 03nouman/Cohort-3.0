import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { toast } from "react-toastify";
import { useState } from "react";

export const useAuth = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const registerForm = (data) => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    toast.success("User registered successfully");
    localStorage.setItem("registeredUser", JSON.stringify(arr));
  };

  const loginForm = (data) => {
    let user = registeredUser.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (!user) {
      toast.error("Invalid email or password");
      return;
    }

    dispatch(addUser(user));
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("User login successful");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    reset,
    registerForm,
    loginForm,
  };
};
