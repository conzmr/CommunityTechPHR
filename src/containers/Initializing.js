// Initializing.js
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import { goRegistration, goHome } from '../navigation'

import { USER_KEY } from '../config'

export default class Initializing extends React.Component {
  async componentDidMount() {
    SplashScreen.hide()
    try {
      const user = await AsyncStorage.getItem(USER_KEY)
      console.log('user: ', user)
      if (user) {
        goHome()
      } else {
        goRegistration()
      }
    } catch (err) {
      console.log('error: ', err)
      goRegistration()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Cargando...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
