/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import MedicalId from './containers/MedicalId';
import SignUp from './containers/SignUp';
import Initializing from './containers/Initializing';
import Home from './containers/Home';

export function registerScreens() {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Initializing', (sc) => Initializing);
  Navigation.registerComponent('MedicalId', () => MedicalId);
  Navigation.registerComponent('SignUp', () => SignUp);
}
