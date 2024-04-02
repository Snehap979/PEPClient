import axios from "axios";

export const get = async (url) => {
  try {
    let response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    let response = await axios.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const put = async (url, data) => {
  try {
    let response = await axios.put(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};
