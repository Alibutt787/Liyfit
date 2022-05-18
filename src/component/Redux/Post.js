import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {post:[{id:1,initialPoint:"Jhelum",finalPoint:"Lahore",date:"sun 27 feb 2:00",fare:"1500",
  passenger:3,vehicle:"mercadi",driverName:"Afaq",
  photo:"https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg",rating:1
  ,comment:"pakistan zindabad",publishtime:"30 mint"},
]},
  reducers: {
    increment: (state) => {state.post.push(payload);},
  },
});

export const { increment, decrement} = counterSlice.actions;
export const selectCount = (state) => state.counter

export default counterSlice.reducer;