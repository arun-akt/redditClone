

import axios from 'axios';
const Base_URL = 'https://www.reddit.com'    
import {  AsyncStorage} from "react-native";
export const getRequest = async (endpoint ) => {
  return makeRequest(`${Base_URL}/${endpoint}`, "GET",);
};

export const postRequest = async (endpoint, body) => {
  return makeRequest(`${Base_URL}/${endpoint}`, "POST", body);
};


const makeRequest =  async  (endpoint, responseType, data) => {
  const  token  = await  AsyncStorage.getItem('AccessToken');
try {
    const resp = await axios({
      
      url: endpoint,
      method: responseType,
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` :'',
      },
    })

    return await resp

  } catch (e) {
    return e.response;
  }

};



