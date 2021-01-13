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
import store from './appSources/store/store';
import {Provider} from 'react-redux';
declare const global: {HermesInternal: null | {}};

const App = () => {
  useEffect(() => {
    requestBluetoothPermission();
  }, []);

  return (
    <>
      <Provider store={store}>
        <MainFrame />
      </Provider>
    </>
  );
};

export default App;
