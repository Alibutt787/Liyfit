import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'user',
  initialState: {userr:{},AuthTerms:false},
  reducers: {
    userr: (state,action) => {state.userr =action.payload},
    term: (state,action) => {state.AuthTerms =action.payload},
    
  },
});

export const { userr ,term} = counterSlice.actions;
export const selectCount = (state) => state.userr;
export const AuthTerm = (state) => state.AuthTerm;
export default counterSlice.reducer;