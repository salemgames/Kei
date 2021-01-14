import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import KeiFrontView from '../Screens/KeiFrontView.component';
import {Container, LightBulbButton} from './MainFrame.style';
import DeviceControlerUnit from '../DeviceControlerUnit/DeviceControlerUnit.component';
import {
  selectLightMode,
  toggleMainLight,
  toggleEyesLight,
} from '../../features/LightControler/LightControlerSlice';
import {useSelector, useDispatch} from 'react-redux';
import {
  requestBluetoothPermission,
  sendStringToDevice,
} from '../../services/blueToothServices/blueToothServices.service';
const MainFrame: React.FC = () => {
  const [eyesMovement, setEyesMovement] = useState<boolean>(false);
  const lightControler = useSelector(selectLightMode);

  const dispatch = useDispatch();

  console.log('light', lightControler);

  // const toggleMainLightOnandOff = () => {
  //   console.log('toogle main light', lightControler.mainLightStatus);
  //   dispatch(toggleMainLight());
  // };
  // const toggleEyesLightOnandOff = () => {
  //   dispatch(toggleEyesLight());
  // };

  // const moveEyesOnandOff = () => {
  //   setEyesMovement((eyesMovement) => !eyesMovement);
  // };

  // const moveEyesLidsOnandOff = () => {
  //   sendStringToDevice('bGlkc09u');
  // };

  // useEffect(() => {
  //   requestBluetoothPermission();
  // }, []);

  // useEffect(() => {
  //   if (lightControler.mainLightStatus === true) {
  //     sendStringToDevice('bWFpbkxpZ2h0T24=');
  //   }
  //   if (lightControler.mainLightStatus === false) {
  //     sendStringToDevice('bWFpbkxpZ2h0T2Zm');
  //   }
  // }, [lightControler.mainLightStatus]);

  // useEffect(() => {
  //   if (lightControler.eyesLightStatus === true) {
  //     sendStringToDevice('ZXllc0xpZ2h0T24=');
  //   }
  //   if (lightControler.eyesLightStatus) {
  //     sendStringToDevice('ZXllc0xpZ2h0T2Zm');
  //   }
  // }, [lightControler.eyesLightStatus]);

  // useEffect(() => {
  //   if (eyesMovement === true) {
  //     sendStringToDevice('ZXllc0dvUmlnaHQ=');
  //   }
  //   if (eyesMovement === false) {
  //     sendStringToDevice('ZXllc0dvTGVmdA==');
  //   }
  // }, [eyesMovement]);

  return (
    <>
      <Container>
        {/* <LightBulbButton onPress={() => toggleMainLightOnandOff()}>
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
        </LightBulbButton> */}

        <DeviceControlerUnit
          buttonText={'Main Light'}
          turnOffDeviceStringMessageForBLE={'mainLightOff'}
          turnOnDeviceStringMessageForBLE={'mainLightOn'}
          reducerActions={toggleMainLight()}
          deviceStatus={lightControler.mainLightStatus}
          deviceType="light"
        />
        <KeiFrontView />
      </Container>
    </>
  );
};

export default MainFrame;
