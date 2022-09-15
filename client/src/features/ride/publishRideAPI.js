import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/publishRide";

const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getRidesByToken = createAsyncThunk("publishRide/getRidesByToken", async () => {
    try {
      const response = await axios.get(`${API_URL}/getRidesByToken`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const getRide = createAsyncThunk("publishRide/getRide", async (id) => {
    try {
      const response = await axios.get(`${API_URL}/getRide${id}`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const getAllRide = createAsyncThunk("publishRide/getAllRide", async () => {
    try {
      const response = await axios.get(`${API_URL}/getAllRide`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const postRide = createAsyncThunk("publishRide/postRide", async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/postRide`, userData, config);

      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const updateRide = createAsyncThunk("publishRide/updateRide", async (id, userData) => {
    try {
      const response = await axios.put(`${API_URL}/updateRide${id}`, userData, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const deleteRide = createAsyncThunk("publishRide/deleteRide", async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/deleteRide${id}`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const deleteRideByAdmin = createAsyncThunk("publishRide/deleteRideByAdmin", async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/deleteRideByAdmin${id}`, config);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });