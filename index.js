/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.jsx';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store.js';

const RootComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RootComponent);