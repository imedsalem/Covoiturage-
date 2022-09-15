import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/profile";

const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};


export const getProfileByToken = createAsyncThunk("profile/getProfileByToken", async () => {
    try {
      const response = await axios.get(`${API_URL}/getProfileByToken`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const getProfile = createAsyncThunk("profile/getProfile", async (id) => {
    try {
      const response = await axios.get(`${API_URL}/getProfile${id}`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const updateProfile = createAsyncThunk("profile/updateProfile", async (userData) => {
    try {
      const response = await axios.put(`${API_URL}/updateProfile`, userData, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const updateVerifyProfile = createAsyncThunk("profile/updateVerifyProfile", async (id, userData) => {
    try {
      const response = await axios.put(`${API_URL}/updateVerifyProfile${id}`, userData, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });