import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  requestBluetoothPermission,
  sendStringToDevice,
} from '../../../services/blueToothServices/blueToothServices.service';
import {encodeStringToBase64} from '../../../utils/base64StringEncoder/base64StringEncoder';
import {StandardControlButton} from './MainLightControler.style';
interface Props {
  buttonText: string;
  turnOffDeviceStringMessageForBLE: string;
  turnOnDeviceStringMessageForBLE: string;
  reducerActions: {payload: undefined; type: string};
  deviceStatus: boolean;
}

const LightControler: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    requestBluetoothPermission();
  }, []);

  useEffect(() => {
    if (props.deviceStatus === true) {
      sendStringToDevice(
        encodeStringToBase64(props.turnOnDeviceStringMessageForBLE),
      );
    }
    if (props.deviceStatus === false) {
      sendStringToDevice(
        encodeStringToBase64(props.turnOffDeviceStringMessageForBLE),
      );
    }
  }, [props.deviceStatus]);

  const toggleDeviceOnOff = () => {
    dispatch(props.reducerActions);
  };

  return (
    <div>
      <StandardControlButton onPress={() => toggleDeviceOnOff()} />
    </div>
  );
};

export default LightControler;
