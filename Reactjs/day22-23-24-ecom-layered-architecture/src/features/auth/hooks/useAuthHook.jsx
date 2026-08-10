import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../state/features/authAction";

export const useAuth = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const registerForm = (data) => {
    console.log("register", data);
  };

  const loginForm = async (data) => {
    // api call
    try {
      // let res = await loginUserAPi(data);
      // toast.success("user login successfull");
      // dispatch(addUser(res)); // saving in react-redux
      dispatch(loginUserAction(data)); // dispatching asyncthunk action
    } catch (error) {
      console.log("eror from login form", error);
    }
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
