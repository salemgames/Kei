import {configureStore} from '@reduxjs/toolkit';
import mainLightReducer from '../features/LightsControler/LightsControlerSlice';
import motorReducer from '../features/motorsControler/motorsControlerSlice';

export default configureStore({
  reducer: {
    lightController: mainLightReducer,
    motorController: motorReducer,
  },
});
