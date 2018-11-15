/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import MedicalId from './containers/MedicalId';
import CreateMedicalId from './containers/CreateMedicalId';
import SignUp from './containers/SignUp';
import Initializing from './containers/Initializing';
import Home from './containers/Home';
import Exercises from './containers/Exercises';
import Archive from './containers/Archive';
import Therapies from './containers/Therapies';
import AgendaRecords from './containers/AgendaRecords';

export function registerScreens() {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Initializing', (sc) => Initializing);
  Navigation.registerComponent('MedicalId', () => MedicalId);
  Navigation.registerComponent('SignUp', () => SignUp);
  Navigation.registerComponent('CreateMedicalId', () => CreateMedicalId);
  Navigation.registerComponent('Exercises', () => Exercises);
  Navigation.registerComponent('Archive', () => Archive);
  Navigation.registerComponent('Therapies', () => Therapies);
  Navigation.registerComponent('AgendaRecords', () => AgendaRecords);
}
