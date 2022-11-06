import axios from "axios";
import {User} from "../interfaces/User"
import jwt_decode from 'jwt-decode'
 

const api : string = process.env.REACT_APP_API || "";

// Add new user
export const postUser = (newUser: User): Promise<any> =>
  axios.post(`${api}register`, newUser);



// Check existing user for login
export const getUserByEmail = (values: User) : Promise<any> => 
{
    return axios.post(api +"login",values)
}


// Get user's data
export const getUserData = (): Promise<any> =>
  axios.get(`${api}profile`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });



// Get "Biz" payload from token
export const getBiz = () => {
  
  return (jwt_decode(sessionStorage.getItem("token") as string) as any).isBiz;
};

// Get "UserId" payload from token
export const getUserId = () => {
  return (jwt_decode(sessionStorage.getItem("token") as string) as any)._id;
};
