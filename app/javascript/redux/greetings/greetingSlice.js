import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greet: 'hi',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
});

export default greetingSlice.reducer;
