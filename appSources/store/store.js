import { configureStore } from '@reduxjs/toolkit';
import mainLightReducer from '../features/lightControler/lightControlerSlice';


export default configureStore({
  reducer: {
    mainLightInterruptor: mainLightReducer,
    eyesLightInterruptor: mainLightReducer,
  },
});
