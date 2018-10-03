import { Navigation } from 'react-native-navigation'


export const goRegistration = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'MedicalId',
          }
        }
    ],
    }
  }
})

export const goHome = () => Navigation.setRoot({
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
                text: 'Home'
              }
            }
          },
        },
        {
          component: {
            name: 'MedicalId',
            options: {
              bottomTab: {
                text: 'Sign Up',
                fontSize: 12
              }
            }
          },
        },
      ],
    }
  }
});
