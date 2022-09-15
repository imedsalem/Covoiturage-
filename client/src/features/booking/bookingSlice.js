import { createSlice } from "@reduxjs/toolkit";
import {
  activeBooking,
  desactiveBooking,
  deleteCustomer,
  deleteAllCustomer,
} from "./bookingAPI";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  customer: [],
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(activeBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(activeBooking.fulfilled, (state, action) => {
        console.log(action.data);
        state.isLoading = false;
        state.isSuccess = true;
        state.customer = action.payload;
      })
      .addCase(activeBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.booking = null;
      })
      .addCase(desactiveBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(desactiveBooking.fulfilled, (state, action) => {
        console.log(action.data);
        state.isLoading = false;
        state.isSuccess = true;
       state.customer = action.payload;
      })
      .addCase(desactiveBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.mk_cn_res = null;
      })
      // .addCase(activeReservation.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(activeReservation.fulfilled, (state, action) => {
      //   console.log(action.data)
      //   state.isLoading = false
      //   state.isSuccess = true
      //   state.ac_ds_res = [ ...state.ac_ds_res,action.payload  ]
      // })
      // .addCase(activeReservation.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      //   state.ac_ds_res = null
      // })
      .addCase(deleteCustomer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        console.log(action.data);
        state.isLoading = false;
        state.isSuccess = true;
        state.customer = action.payload;  
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.ac_ds_res = null;
      })
      .addCase(deleteAllCustomer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAllCustomer.fulfilled, (state, action) => {
        console.log(action.data);
        state.isLoading = false;
        state.isSuccess = true;
        state.customer = action.payload;
      })
      .addCase(deleteAllCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.ac_ds_res = null;
      });
  },
});

export const { reset } = bookingSlice.actions;
export default bookingSlice.reducer;
