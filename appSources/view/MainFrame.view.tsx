import React from 'react';
import KeiFrontView from '../components/ImagesComponents/MainBackGroundImage.component';
import {Container} from './MainFrame.style';
import {DeviceControlerUnit} from '../components/DeviceControlerUnit/DeviceControlerUnit.component';
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
console.log("motorControler store", motorControler.stepperMotorStatus)
  if (lightControler !== undefined && motorControler !== undefined) {
    return (
      <>
        <Container>

          <DeviceControlerUnit
            type="reducerActionModule"
            buttonText={'Eyes Light'}
            turnOffDeviceStringMessageForBLE={'eyesLightOff'}
            turnOnDeviceStringMessageForBLE={'eyesLightOn'}
            reducerActions={toggleEyesLight()}
            deviceStatus={lightControler.eyesLightStatus}
            deviceType="light"
          />
          {/* <DeviceControlerUnit
            type="reducerActionModule"
            buttonText={'Eyes Controler'}
            turnOffDeviceStringMessageForBLE={'eyesGoRight'}
            turnOnDeviceStringMessageForBLE={'eyesGoLeft'}
            reducerActions={toggleStepperDirection()}
            deviceStatus={motorControler.stepperMotorStatus}
            deviceType="stepperMotor"
          /> */}

          <KeiFrontView />
        </Container>
      </>
    );
  }
  return <></>;
};

export default MainFrame;
