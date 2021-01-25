import {createSlice} from '@reduxjs/toolkit';

export const motorsReducersSlice = createSlice({
  name: 'motorController',
  initialState: {
    stepperMotorStatus: false,
  },
  reducers: {
    toggleStepperDirection: (state) => {
      state.stepperMotorStatus = !state.stepperMotorStatus;
    },
  },
});

export const {toggleStepperDirection} = motorsReducersSlice.actions;
export const selectMotorActions = (state: any) => state.motorReducer;
export default motorsReducersSlice.reducer;
