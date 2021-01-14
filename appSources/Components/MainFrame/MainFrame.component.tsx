import React from 'react';
import KeiFrontView from '../Screens/KeiFrontView.component';
import {Container} from './MainFrame.style';
import {DeviceControlerUnit} from '../DeviceControlerUnit/DeviceControlerUnit.component';
import {
  selectLightMode,
  toggleMainLight,
  toggleEyesLight,
} from '../../features/LightsControler/LightsControlerSlice';
import {
  selectMotorActions,
  toggleStepperDirection,
} from '../../features/motorsControler/motorsControlerSlice';
import {useSelector} from 'react-redux';

const MainFrame: React.FC = () => {
  const lightControler = useSelector(selectLightMode);
  const motorControler = useSelector(selectMotorActions);

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
          buttonText={'Main Light'}
          turnOffDeviceStringMessageForBLE={'eyesLightOff'}
          turnOnDeviceStringMessageForBLE={'eyesLightOn'}
          reducerActions={toggleMainLight()}
          deviceStatus={lightControler.eyesLightStatus}
          deviceType="light"
        />
        <DeviceControlerUnit
          type="reducerActionModule"
          buttonText={'Main Light'}
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
};

export default MainFrame;
