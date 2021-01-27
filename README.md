# Kei

Kei is a "code and draw" project, mixing traditonnal drawing, electronic and React Native.


# Software architecture

# Features

This folder will contain all Redux slices

*ie :*
```typescript
import {createSlice} from '@reduxjs/toolkit';

export const lightSlice = createSlice({
  name: 'lightController',
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
export const selectLightMode = (state: any) => state.lightController;

export default lightSlice.reduce
}
```

# Store

The store holds the whole state tree of the application.


*ie :*
```typescript
import {configureStore} from '@reduxjs/toolkit';
import mainLightReducer from '../features/LightsControler/LightsControlerSlice';
import motorReducer from '../features/MotorsControler/MotorsControlerSlice';

export default configureStore({
  reducer: {
    lightController: mainLightReducer,
    motorController: motorReducer,
  },
});
```
# Component

This folder contain all React Native components.
*ie :*
```typescript
import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  requestBluetoothPermission,
  sendStringToDevice,
} from '../../services/blueToothServices/blueToothServices.service';
import {encodeStringToBase64} from '../../utils/base64StringEncoder/base64StringEncoder';
import {StandardControlButton} from './DeviceControllerStandardModule.style';

type ReducerModuleProps = {
  type: 'reducerActionModule';
  buttonText: string;
  turnOffDeviceStringMessageForBLE: string;
  turnOnDeviceStringMessageForBLE: string;
  reducerActions: {payload: undefined; type: string};
  deviceStatus: boolean;
  deviceType: 'stepperMotor' | 'light' | 'servoMotor';
};

type SimpleModuleProps = {
  type: 'simpleActionModule';
  buttonText: string;
  stringMessageForBLE: string;
  deviceType: 'stepperMotor' | 'light' | 'servoMotor';
  turnOnDeviceStringMessageForBLE: string;
};

const SimpleDeviceControlerUnit: React.FC<SimpleModuleProps> = (props) => {
  useEffect(() => {
    requestBluetoothPermission();
  }, []);

  const toggleDeviceOnOff = () => {
    sendStringToDevice(
      encodeStringToBase64(props.turnOnDeviceStringMessageForBLE),
    );
  };

  const bulbImage = {uri: './assets/bulb.png'};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
    },
  });
  return (
    <>
      <StandardControlButton
        deviceType={props.deviceType}
        onPress={() => toggleDeviceOnOff()}>
        <ImageBackground source={bulbImage} style={styles.image} />
      </StandardControlButton>
    </>
  );
};

const DeviceControlerUnitWithReducer: React.FC<ReducerModuleProps> = (
  props,
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    requestBluetoothPermission();
  }, []);

  useEffect(() => {
    if (props.deviceStatus === true) {
      sendStringToDevice(
        encodeStringToBase64(props.turnOnDeviceStringMessageForBLE),
      );
    }
    if (props.deviceStatus === false) {
      sendStringToDevice(
        encodeStringToBase64(props.turnOffDeviceStringMessageForBLE),
      );
    }
  }, [props.deviceStatus]);

  const toggleDeviceOnOff = () => {
    if (props.deviceType !== 'servoMotor') dispatch(props.reducerActions);
    if (props.deviceType === 'servoMotor') {
      sendStringToDevice(
        encodeStringToBase64(props.turnOnDeviceStringMessageForBLE),
      );
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
    },
  });
  return (
    <>
      <StandardControlButton
        deviceType={props.deviceType}
        onPress={() => toggleDeviceOnOff()}>
        <ImageBackground
          source={
            props.deviceType === 'light'
              ? require('../../../assets/bulb.png')
              : require('../../../assets/gear.png')
          }
          style={styles.image}
        />
      </StandardControlButton>
    </>
  );
};

export const DeviceControlerUnit = (
  props: ReducerModuleProps | SimpleModuleProps,
) => {
  if (props.type === 'reducerActionModule')
    return <DeviceControlerUnitWithReducer {...props} />;
  else return <SimpleDeviceControlerUnit {...props} />;
};

```

