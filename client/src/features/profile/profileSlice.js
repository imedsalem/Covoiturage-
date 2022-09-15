import {  createSlice } from '@reduxjs/toolkit'
import {getProfileByToken,getProfile,  updateProfile, updateVerifyProfile} from './profileAPI'


const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    profile : {},
    profileUser : {},
  }

  export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
      .addCase(getProfileByToken.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProfileByToken.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profile = action.payload
      })
      .addCase(getProfileByToken.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profileUser =  action.payload
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        console.log(action.data)
        state.isLoading = false
        state.isSuccess = true
        state.profile = action.payload
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateVerifyProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateVerifyProfile.fulfilled, (state, action) => {
        console.log(action.data)
        state.isLoading = false
        state.isSuccess = true
        state.profileUser = action.payload
      })
      .addCase(updateVerifyProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      
    },
  })
  
  export const { reset } = profileSlice.actions
  export default profileSlice.reducer