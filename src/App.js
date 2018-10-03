import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import SplashScreen from 'react-native-splash-screen';

registerScreens();


class App extends Component {
	constructor(props) {
		super(props)
    this.startApp()
	}
	componentDidMount() {
    SplashScreen.hide()
  }
	startApp() {
		Navigation.events().registerAppLaunchedListener(() => {
		  Navigation.setRoot({
		    root: {
		      component: {
		        name: 'Initializing'
		      }
		    },
		  });
		});
	}

}

export default App;
