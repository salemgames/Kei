import React from 'react';
import {DeviceControlerUnit} from '../DeviceControllerStandardModule/DeviceControllerStandardModule.component';
import {useSelector} from 'react-redux';
import {Container} from './DevicesControlTable.style';
import {
  toggleMainLight,
  toggleEyesLight,
  selectLightMode,
} from '../../features/LightsControler/LightsControlerSlice';
import {
  toggleStepperDirection,
  selectMotorActions,
} from '../../features/MotorsControler/MotorsControlerSlice';
import store from '../../store/store';

interface Props {
  onClick: () => void;
}

const ControlTable: React.FC<Props> = (props) => {
  const lightControler = store.getState().lightController;
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
            onClick={() => props.onClick()}
          />
        </Container>
      </>
    );
  }
  return <></>;
};

export default ControlTable;
