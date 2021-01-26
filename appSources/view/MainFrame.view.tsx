import React from 'react';
import KeiFrontView from '../components/ImagesComponents/MainBackGroundImage.component';
import {Container} from './MainFrame.style';
import {DeviceControlerUnit} from '../components/DeviceControlerUnit/DeviceControlerUnit.component';
import {useDispatch, useSelector} from 'react-redux';
import {
  toggleMainLight,
  toggleEyesLight,
  selectLightMode
} from '../features/LightsControler/LightsControlerSlice';
import {
  toggleStepperDirection,
  selectMotorActions
} from '../features/motorsControler/motorsControlerSlice';
import store from '../store/store';

const MainFrame: React.FC = () => {
 
  const lightControler = store.getState().lighter;
  const motorControler = store.getState().motorController;
  const light = useSelector(selectLightMode);
  const motor = useSelector(selectMotorActions);

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
            deviceStatus={light.mainLightStatus}
            deviceType="light"
          />

          <DeviceControlerUnit
            type="reducerActionModule"
            buttonText={'Main Light '}
            turnOffDeviceStringMessageForBLE={'eyesLightOff'}
            turnOnDeviceStringMessageForBLE={'eyesLightOn'}
            reducerActions={toggleMainLight()}
            deviceStatus={light.eyesLightStatus}
            deviceType="light"
          />
          <DeviceControlerUnit
            type="reducerActionModule"
            buttonText={'Eyes Controler'}
            turnOffDeviceStringMessageForBLE={'eyesGoRight'}
            turnOnDeviceStringMessageForBLE={'eyesGoLeft'}
            reducerActions={toggleStepperDirection()}
            deviceStatus={motor.stepperMotorStatus}
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
