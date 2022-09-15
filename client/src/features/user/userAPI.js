import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/user";

const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};


export const register = createAsyncThunk("user/register", async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    // const response = await axios.post(API_URL + "/register", userData);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const login = createAsyncThunk("user/login", async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    localStorage.setItem('token', response.data.token)
    console.log(response.data)
    return response.data;
    
  } catch (error) {
    console.log(error.response.data.msg);
  }
});

export const getUserByToken = createAsyncThunk("user/getUserByToken", async () => {
    try {
      const response = await axios.get(`${API_URL}/getUserByToken`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const getUserById = createAsyncThunk("user/getUserById", async (id) => {
    try {
      const response = await axios.get(`${API_URL}/getUserById${id}`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const updateUserFullName = createAsyncThunk("user/updateUserFullName", async (userData) => {
    try {
      const response = await axios.put(`${API_URL}/updateUserFullName`, userData, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const updateUserEmail = createAsyncThunk("user/updateUserEmail", async (userData) => {
    try {
      const response = await axios.put(`${API_URL}/updateUserEmail`, userData, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const updateUserPassword = createAsyncThunk("user/updateUserPassword", async (userData) => {
    try {
      const response = await axios.put(`${API_URL}/updateUserPassword`, userData, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/deleteUser${id}`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
    try {
      const response = await axios.get(`${API_URL}/getAllUser`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const updateUserRole = createAsyncThunk("user/updateUserRole", async (id, userData) => {
    try {
      const response = await axios.put(`${API_URL}/updateUserRole${id}`, userData, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const deleteUserByAdmin = createAsyncThunk("user/deleteUserByAdmin", async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/deleteUserByAdmin${id}`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });