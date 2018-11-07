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
                name: 'MedicalId',
                options: {
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
                name: 'MedicalId',
                options: {
                  bottomTab: {
                    text: 'Terapias',
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
