import React from 'react';
import MainBackGroundImage from '../components/ImagesComponents/MainBackGroundImage.component';
import {Container} from './MainFrame.style';
import {DeviceControlerUnit} from '../components/DeviceControllerStandardModule/DeviceControllerStandardModule.component';
import ControlTable from '../components/ControlTable/ControlTable.component';
import {useSelector} from 'react-redux';
import {
  toggleMainLight,
  toggleEyesLight,
  selectLightMode,
} from '../features/LightsControler/LightsControlerSlice';
import {
  toggleStepperDirection,
  selectMotorActions,
} from '../features/motorsControler/motorsControlerSlice';
import store from '../store/store';

const MainFrame: React.FC = () => {
  // const lightControler = store.getState().lightController;
  // const motorControler = store.getState().motorController;
  // const light = useSelector(selectLightMode);
  // const motor = useSelector(selectMotorActions);

  return (
    <>
      <Container>
        <ControlTable />
        {/* <DeviceControlerUnit
            type="reducerActionModule"
            buttonText={'Main Light'}
            turnOffDeviceStringMessageForBLE={'mainLightOff'}
            turnOnDeviceStringMessageForBLE={'mainLightOn'}
            reducerActions={toggleMainLight()}
            deviceStatus={light.mainLightStatus}
            deviceType="light"
          />

          <DeviceControlerUnit
            type="reducerActionModule"
            buttonText={'EyesLight'}
            turnOffDeviceStringMessageForBLE={'eyesLightOff'}
            turnOnDeviceStringMessageForBLE={'eyesLightOn'}
            reducerActions={toggleEyesLight()}
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
          /> */}

        <MainBackGroundImage />
      </Container>
    </>
  );
};

export default MainFrame;
