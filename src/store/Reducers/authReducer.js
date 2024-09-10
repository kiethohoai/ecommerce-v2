import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  successMessage: '',
  errorMessage: '',
  loader: false,
  userInfo: '',
};

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = authReducer.actions;
export default authReducer.reducer;
