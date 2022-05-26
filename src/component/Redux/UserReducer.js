import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'user',
  initialState: {userr:{},AuthTerms:false,number:''},
  reducers: {
    userr: (state,action) => {state.userr =action.payload},
    term: (state,action) => {state.AuthTerms =action.payload},
    phone: (state,action) => {state.number =action.payload},
  },
});

export const { userr ,term, phone} = counterSlice.actions;
export const selectCount = (state) => state.userr;
export const AuthTerm = (state) => state.AuthTerm;
export const mobile = (state) => state.phone;
export default counterSlice.reducer;