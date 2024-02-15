import axios from 'axios'
import { apiUrl } from "./config"
import { getUserInfo } from './localStorage';
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



export const personalUpdate = async ({fName, lName, email, password, date, phoneNumber}) =>{
  try {
    const {_id, token} = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/users/${_id}`,
      method: 'PUT',
      headers: {
        "Content-Type" : "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        fName,
        lName,
        date,
        phoneNumber,
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

export const createOrder = async(order) => {
try {
  const {token} = getUserInfo();
  const response = await axios({
    url: `${apiUrl}/api/orders`,
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: order,
  });
  if (response.statusText !== 'Created') {
    throw new Error(response.data.message);
  }
  return response.data;
} catch(err) {
  return {error: (err.response ? err.response.data.message: err.message)}
}
};

export const getOrder = async(id) => {
  try {
    const {token} = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/orders/${id}`,
      headers: {
        'Content-Type' : 'application-json',
        Authorization: `bearer ${token}`,
      },
    });
    if(response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return {error: err.message}
  }

}