import {createSlice} from '@reduxjs/toolkit';

export const lightSlice = createSlice({
  name: 'lighter',
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
      console.log("state.eyesLightStatus",state.eyesLightStatus)
    },
  },
});

export const {toggleMainLight, toggleEyesLight} = lightSlice.actions;
export const selectLightMode = (state: any) => state.lighter;


export default lightSlice.reducer;
