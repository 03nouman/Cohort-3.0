import { useForm } from "react-hook-form";

export const useAuthHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onRegisterSubmit = (data) => {
    console.log("Registration Data:", data);
  };

  const onLoginSubmit = (data) => {
    console.log("login Data:", data);
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
  };
};
