import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Post';
import userExist from './UserReducer'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    userExist:userExist,
  },
});

export default store;