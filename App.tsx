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
import MainFrameView from './appSources/view/MainFrame.view';
import {requestBluetoothPermission} from './appSources/services/blueToothServices/blueToothServices.service';
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
        <MainFrameView />
      </Provider>
    </>
  );
};

export default App;
