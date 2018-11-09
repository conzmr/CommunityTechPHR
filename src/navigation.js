import { Navigation } from 'react-native-navigation';
import { iconsMap, iconsLoaded } from './utils/AppIcons';

export const goHome = () =>
  iconsLoaded.then(() => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BottomTabsId',
          children: [
            {
              component: {
                name: 'Home',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Inicio',
                    icon: iconsMap['ios-heart'],
          					selectedIcon: iconsMap['ios-pulse']
                  }
                }
              },
            },
            {
              component: {
                name: 'Exercises',
                options: {
                  topBar: {
                    title: {
                      text: 'Monitoreo de ejercicios'
                    },
                    largeTitle: {
                      visible: true,
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: 'black',
                      fontFamily: 'Helvetica'
                    }
                  },
                  bottomTab: {
                    text: 'Ejercicios',
                    fontSize: 12,
                    icon: iconsMap['ios-analytics']
                  }
                }
              },
            },
            {
              component: {
                name: 'Archive',
                options: {
                  bottomTab: {
                    text: 'Archivo',
                    fontSize: 12,
                    icon: iconsMap['ios-archive']
                  }
                }
              },
            },
            {
              component: {
                name: 'MedicalId',
                options: {
                  topBar: {
                    title: {
                      text: 'Identificación Médica'
                    },
                    largeTitle: {
                      visible: true,
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: 'black',
                      fontFamily: 'Helvetica'
                    }
                  },
                  bottomTab: {
                    text: 'ID Médico',
                    fontSize: 12,
                    icon: iconsMap['ios-medical']
                  }
                }
              },
            },
          ],
        }
      }
    });
});


export const goRegistration = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'CreateMedicalId',
          }
        }
    ],
    }
  }
})
