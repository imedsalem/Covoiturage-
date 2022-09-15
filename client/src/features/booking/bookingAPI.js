import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/booking";

const token = localStorage.getItem("user");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const activeBooking = createAsyncThunk("booking/activeBooking", async (id, userData) => {
    try {
      const response = await axios.post(`${API_URL}/activeBooking${id}`, userData);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const desactiveBooking = createAsyncThunk("booking/desactiveBooking", async (id, userData) => {
    try {
      const response = await axios.post(`${API_URL}/desactiveBooking${id}`, userData);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const deleteCustomer = createAsyncThunk("booking/deleteCustomer", async (id, idcust, userData) => {
    try {
      const response = await axios.post(`${API_URL}/deleteCustomer${id}/${idcust}`, userData);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });

  export const deleteAllCustomer = createAsyncThunk("booking/deleteAllCustomer", async (id, userData) => {
    try {
      const response = await axios.post(`${API_URL}/deleteAllCustomer${id}`, userData);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  });