import {AppRegistry} from 'react-native';
import App from './App.jsx';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store.js';
// import {PersistGate} from 'redux-persist/lib/integration/react';

const RootComponent = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RootComponent);
