import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import KeiFrontView from '../Screens/KeiFrontView.component';
import {Container, LightBulbButton} from './MainFrame.style';
import {
  requestBluetoothPermission,
  sendStringToDevice,
} from '../../BlueToothServices/BlueToothServices';
const MainFrame: React.FC = () => {
  const [lightStateOn, setLightState] = useState<boolean>(false);

  const ToggleMainLightOnandOff = () => {
    setLightState((lightStateOn) => !lightStateOn);
  };

  useEffect(() => {
    requestBluetoothPermission();
  }, []);

  useEffect(() => {
    if (lightStateOn === true) {
      sendStringToDevice('bWFpbkxpZ2h0T24=');
    }
    if (lightStateOn === false) {
      sendStringToDevice('bWFpbkxpZ2h0T2Zm');
    }
  }, [lightStateOn]);

  return (
    <>
      <Container>
        
        <LightBulbButton onPress={() => ToggleMainLightOnandOff()}>
          <Text>Main Light On"</Text>
        </LightBulbButton>
        <KeiFrontView   />
      </Container>
    </>
  );
};

export default MainFrame;
