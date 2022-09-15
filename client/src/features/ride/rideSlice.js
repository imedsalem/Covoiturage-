import { createSlice } from "@reduxjs/toolkit";
import {
  getRidesByToken,
  getRide,
  getAllRide,
  postRide,
  updateRide,
  deleteRide,
} from "./publishRideAPI";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  ridepub:false,
  ride: [],
};

export const rideSlice = createSlice({
  name: "ride",
  initialState,
  reducers: {
    reset: (state) => {
      state.ridepub = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRidesByToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRidesByToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = action.payload
      })
      .addCase(getRidesByToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRide.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = action.payload;
      })
      .addCase(getRide.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRide.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = action.payload;
      })
      .addCase(getAllRide.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(postRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postRide.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = [ action.payload,...state.ride];
        state.ridepub = true;
      })
      .addCase(postRide.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRide.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = action.payload;
      })
      .addCase(updateRide.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRide.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = state.ride.filter(item => item !== action.payload_id);
      })
      
      .addCase(deleteRide.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = rideSlice.actions;
export default rideSlice.reducer;
