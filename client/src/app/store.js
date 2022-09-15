import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import profileReducer from '../features/profile/profileSlice'
import rideReducer from '../features/ride/rideSlice'
import bookingReducer from '../features/booking/bookingSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    ride: rideReducer,
    booking:bookingReducer
  },
});
