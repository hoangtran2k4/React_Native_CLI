import {AppRegistry} from 'react-native';
import Web from './Web';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Web);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
