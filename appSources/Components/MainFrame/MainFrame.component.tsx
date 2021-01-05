import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import KeiFrontView from '../Screens/KeiFrontView.component';
import {Container, LightBulbButton} from './MainFrame.style';
import {
  requestBluetoothPermission,
  sendStringToDevice,
} from '../../BlueToothServices/BlueToothServices';
const MainFrame: React.FC = () => {
  const [lightMainStateOn, setMainLightState] = useState<boolean>(false);
  const [eyesLightState, setEyesLightState] = useState<boolean>(false);
  const [eyesMovement, setEyesMovement] = useState<boolean>(false);
  const [eyesLidsStateOn, setEyesLidsMovement] = useState<boolean>(false);


  const toggleMainLightOnandOff = () => {
    setMainLightState((lightMainStateOn) => !lightMainStateOn);
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
    if (lightMainStateOn === true) {
      sendStringToDevice('bWFpbkxpZ2h0T24=');
    }
    if (lightMainStateOn === false) {
      sendStringToDevice('bWFpbkxpZ2h0T2Zm');
    }
  }, [lightMainStateOn]);

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
console.log("eyesLightStateOn",eyesLightState)

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
