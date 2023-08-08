// App Wrapper
import React from 'react';
import {AppContainer} from '../Navigators/AppContainer';
import {Provider as PaperProvider} from 'react-native-paper';
// import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import DefaultTheme from '@themes/DefaultTheme';
import AppLoader from '@components/Loaders/AppLoader';
import RNModalError from '@components/RNModalError/RNModalError';
import {PersistGate} from 'redux-persist/integration/react';
import {Fragment} from 'react';
import {persistStore} from 'redux-persist';
import {Stores} from '../Redux/Stores/Store';

export const AppHoc = () => {
  let persistor = persistStore(Stores);
  return (
    <Fragment>
      <Provider store={Stores}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={DefaultTheme}>
            <AppContainer />
            <AppLoader />
            <RNModalError />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </Fragment>
  );
};
