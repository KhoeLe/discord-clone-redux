import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/chatSlice'
import userReducer from '../features/userSlice'

export default configureStore({
  reducer: {
    chat: chatReducer,
    user: userReducer,
  },
});
