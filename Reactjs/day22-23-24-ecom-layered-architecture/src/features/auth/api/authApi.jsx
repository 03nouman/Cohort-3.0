// import { axiosIntance } from "../../../config/axiosInstance";

// export const loginUserAPi = async (credentials) => {
//   try {
//     let res = await axiosIntance.post("/auth/login", credentials);
//     localStorage.setItem("accessToken", res.data.accessToken);
//     return res.data;
//   } catch (error) {
//     console.log("Eror from login api", error);
//   }
// };

// export const hydrateUser = async () => {
//   let token = localStorage.getItem("accessToken"); // storing access token in localStorage to fetch current user in hydrareUser api
//   try {
//     let res = await axiosIntance.get("/auth/me", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     // console.log("response from hydration api",res);
//     return res.data;
//   } catch (error) {
//     console.log("Eror from login api", error);
//   }
// };
