import {createSlice} from '@reduxjs/toolkit';

export const lightSlice = createSlice({
  name: 'counter',
  initialState: {
    mainLightStatus: false,
    eyesLightStatus: false,
  },
  reducers: {
    toggleMainLight: (state) => {
      state.mainLightStatus = !state.mainLightStatus;
    },
    toggleEyesLight: (state) => {
      state.eyesLightStatus = !state.eyesLightStatus;
    },
  },
});

export const {toggleMainLight, toggleEyesLight} = lightSlice.actions;
export const selectLightMode = (state: any) => state.mainLightInterruptor;
export default lightSlice.reducer;
