import React from 'react';
import KeiFrontView from '../Components/Screens/KeiFrontView.component';
import {Container} from './MainFrame.style';
import {DeviceControlerUnit} from '../Components/DeviceControlerUnit/DeviceControlerUnit.component';
import {
  toggleMainLight,
  toggleEyesLight,
} from '../features/LightsControler/LightsControlerSlice';
import {
  toggleStepperDirection,
} from '../features/motorsControler/motorsControlerSlice';
import store from '../store/store';

const MainFrame: React.FC = () => {
 
  const lightControler = store.getState().mainLightInterruptor;
  const motorControler = store.getState().motorControler;

  if (lightControler !== undefined && motorControler !== undefined) {
    return (
      <>
        <Container>
          <DeviceControlerUnit
            type="reducerActionModule"
            buttonText={'Main Light'}
            turnOffDeviceStringMessageForBLE={'mainLightOff'}
            turnOnDeviceStringMessageForBLE={'mainLightOn'}
            reducerActions={toggleEyesLight()}
            deviceStatus={lightControler.mainLightStatus}
            deviceType="light"
          />

          <DeviceControlerUnit
            type="reducerActionModule"
            buttonText={'Main Light '}
            turnOffDeviceStringMessageForBLE={'eyesLightOff'}
            turnOnDeviceStringMessageForBLE={'eyesLightOn'}
            reducerActions={toggleMainLight()}
            deviceStatus={lightControler.eyesLightStatus}
            deviceType="light"
          />
          <DeviceControlerUnit
            type="reducerActionModule"
            buttonText={'Eyes Controler'}
            turnOffDeviceStringMessageForBLE={'eyesGoRight'}
            turnOnDeviceStringMessageForBLE={'eyesGoLeft'}
            reducerActions={toggleStepperDirection()}
            deviceStatus={motorControler.stepperMotorStatus}
            deviceType="stepperMotor"
          />

          <KeiFrontView />
        </Container>
      </>
    );
  }
  return <></>;
};

export default MainFrame;
