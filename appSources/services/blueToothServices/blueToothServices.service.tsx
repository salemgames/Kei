import {BleManager, Characteristic, Service} from 'react-native-ble-plx';
import {PermissionsAndroid} from 'react-native';

const manager = new BleManager();

export const scanAndConnect = () => {
  manager.startDeviceScan(null, null, (error, device) => {
    if (error) {
      return;
    }
    // console.log('Name: ' + device?.name + '| ID: ' + device?.id);
    if (device?.name === 'kei' || device?.id === '98:4F:EE:0F:4B:2E') {
      manager.stopDeviceScan();
      device
        .connect()
        .then((device) => {
          console.log('Connected to Kei esp 32');
          return device.discoverAllServicesAndCharacteristics();
        })
        .then((device) => {
          findServicesAndCharacteristics(device);
        })
        .catch((error) => {
          console.log('error');
        });
    }
  });
};

let characteristic: Characteristic;
export const findServicesAndCharacteristics = (device: any) => {
  device.services().then((services: any) => {
    services.map((service: Service) => {
      console.log('Service UUID: ' + service.uuid);
      service
        .characteristics()
        .then((characteristicsArray: Characteristic[]) => {
          characteristicsArray.forEach((c: Characteristic, i: any) => {
            characteristic = c as Characteristic;
          });
        });
    });
  });
};

export const sendStringToDevice = (val: string) => {
  if (characteristic !== undefined) {
    console.log('try to write');
    characteristic.writeWithoutResponse(val).catch((err: any) => {
      console.log(err);
    });
  }
};

export const requestBluetoothPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool App BlueTooth Permission',
        message:
          'Cool App BlueTooth needs access to your BLUETOOTH ' +
          'so you can communicate with the frame.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use BLUETOOTH my friend');
      await scanAndConnect();
    } else {
      console.log('BLUETOOTH permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
