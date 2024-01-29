import axios from 'axios'
import { apiUrl } from "./config"
export const getInfo = async (id) => {
  try {
      const response = await axios ({
        url: `${apiUrl}/api/info/${id}`,
        method: 'Get',
        headers:{
          'Content-Type': 'applicaion/json'
        },
      });
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message)
      }
      return response.data;
  } catch (err) {
    console.log(err);
    return { error:err.response.data.message || err.message}
  }
};

export const signin = async ({email,password}) =>{
  try {
    const response = await axios({
      url: `${apiUrl}/api/users/signin`,
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
      },
      data: {
        email,
        password,
      }
    });
    if(response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch(err){
    console.log(err);
    return {error: err.response.data.message || err.message}
  }
}


export const register = async ({fName, lName, email,password}) =>{
  try {
    const response = await axios({
      url: `${apiUrl}/api/users/register`,
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
      },
      data: {
        fName,
        lName,
        email,
        password,
      }
    });
    if(response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch(err){
    console.log(err);
    return {error: err.response.data.message || err.message}
  }
}