// Home.js
import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import {Navigation} from 'react-native-navigation';

export default class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Identificación Médica'
        },
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>MEDICAL ID.</Text>
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'SignUp',
              }
            });
          }}
          title="Crear registro médico"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
