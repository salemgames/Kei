import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import KeiFrontView from '../Screens/KeiFrontView.component';
import {Container, LightBulbButton} from './MainFrame.style';
import {
  mainLightOnOff,
  selectMainLight,
} from '../../features/mainLightControler/mainLightControlerSlice';
import {useSelector, useDispatch} from 'react-redux';
import {
  requestBluetoothPermission,
  sendStringToDevice,
} from '../../BlueToothServices/BlueToothServices';
const MainFrame: React.FC = () => {
  const [eyesLightState, setEyesLightState] = useState<boolean>(false);
  const [eyesMovement, setEyesMovement] = useState<boolean>(false);

  const mainLightBooleanValue = useSelector(selectMainLight);

  const dispatch = useDispatch();
  console.log('light', mainLightBooleanValue);
  const toggleMainLightOnandOff = () => {
    dispatch(mainLightOnOff());
  };
  const toggleEyesLightOnandOff = () => {
    setEyesLightState((eyesLightState) => !eyesLightState);
  };

  const moveEyesOnandOff = () => {
    setEyesMovement((eyesMovement) => !eyesMovement);
  };

  const moveEyesLidsOnandOff = () => {
    sendStringToDevice('bGlkc09u');
  };

  useEffect(() => {
    requestBluetoothPermission();
  }, []);

  useEffect(() => {
    if (mainLightBooleanValue === true) {
      sendStringToDevice('bWFpbkxpZ2h0T24=');
    }
    if (mainLightBooleanValue === false) {
      sendStringToDevice('bWFpbkxpZ2h0T2Zm');
    }
  }, [mainLightBooleanValue]);

  useEffect(() => {
    if (eyesLightState === true) {
      sendStringToDevice('ZXllc0xpZ2h0T24=');
    }
    if (eyesLightState === false) {
      sendStringToDevice('ZXllc0xpZ2h0T2Zm');
    }
  }, [eyesLightState]);

  useEffect(() => {
    if (eyesMovement === true) {
      sendStringToDevice('ZXllc0dvUmlnaHQ=');
    }
    if (eyesMovement === false) {
      sendStringToDevice('ZXllc0dvTGVmdA==');
    }
  }, [eyesMovement]);

  return (
    <>
      <Container>
        <LightBulbButton onPress={() => toggleMainLightOnandOff()}>
          <Text>Main Light On"</Text>
        </LightBulbButton>
        <LightBulbButton onPress={() => toggleEyesLightOnandOff()}>
          <Text>Eyes Light On"</Text>
        </LightBulbButton>
        <LightBulbButton onPress={() => moveEyesOnandOff()}>
          <Text>Move Eyes"</Text>
        </LightBulbButton>
        <LightBulbButton onPress={() => moveEyesLidsOnandOff()}>
          <Text>Move Lids"</Text>
        </LightBulbButton>
        <KeiFrontView />
      </Container>
    </>
  );
};

export default MainFrame;
