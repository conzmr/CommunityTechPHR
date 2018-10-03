import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();


class App extends Component {
	constructor(props) {
		super(props)
    this.startApp()
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
