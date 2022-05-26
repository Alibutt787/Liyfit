import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {post:[{id:1,initialPoint:"Sialkot",finalPoint:"Lahore",date:"sun 29 may 2:00 pm",fare:"1500",
  passenger:2,vehicle:"mercadi",driverName:"usama",
  photo:"https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
  ,rating:1
  ,comment:"Let go with sialkoti brand",publishtime:"30 sec"},
  {id:2,initialPoint:"islamabad",finalPoint:"Lahore",date:"wed 1 june 8:00 am",fare:"900",
  passenger:3,vehicle:"carola",driverName:"sarmad",
  photo:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VzdG9tZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  ,rating:1
  ,comment:"pa g Jhelum ayyy",publishtime:"60 mint"},
  {id:3,initialPoint:"jhelum",finalPoint:"Lahore",date:"fri 5 feb 11:00 am",fare:"2500",
  passenger:3,vehicle:"mehran",driverName:"Hassan",
  photo:"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
  ,rating:1
  ,comment:"We are foodiiii people",publishtime:"5 mint"},
  {id:4,initialPoint:"Gujranwala",finalPoint:"Lahore",date:"Mon 31 may 2:00",fare:"1400",
  passenger:3,vehicle:"mercadi",driverName:"Nabeel",
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