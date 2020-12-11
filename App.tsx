/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import MainFrame from './appSources/Components/MainFrame/MainFrame.component';
import {requestBluetoothPermission} from './appSources/BlueToothServices/BlueToothServices';

declare const global: {HermesInternal: null | {}};

const App = () => {
  useEffect(() => {
    requestBluetoothPermission();
  }, []);

  return (
    <>
      <MainFrame />
    </>
  );
};

export default App;
