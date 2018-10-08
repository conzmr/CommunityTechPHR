import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';

registerScreens();

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: true
};


class App extends Component {
	constructor(props) {
		super(props)
		iconsLoaded.then(() => {
			this.startApp();
		});
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
