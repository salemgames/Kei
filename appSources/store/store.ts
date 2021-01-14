import { configureStore } from '@reduxjs/toolkit';
import mainLightReducer from "../features/LightControler/LightControlerSlice";


export default configureStore({
  reducer: {
    mainLightInterruptor: mainLightReducer,
  },
});
