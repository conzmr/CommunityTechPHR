// Home.js
import React from 'react'
import {
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import { Navigation } from 'react-native-navigation';
import { Container, Content, Button, Text } from 'native-base';

export default class CreateMedicalId extends React.Component {
  static get options() {
    return {
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
      }
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.infoText}>
          Para comenzar a utilizar la aplicación debes crear
          tu registro de identificación médica, el cual permitirá
          dar seguimiento a tu tratamiento.
        </Text>
        <Button block style={styles.button}
          onPress={() => {
            Navigation.showModal({
              stack: {
                children: [{
                  component: {
                    name: 'SignUp'
                  }
                }]
              }
            });
          }}

        >
        <Text style={styles.buttonText} >Crear registro médico</Text>
      </Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: 30,
    paddingHorizontal: 15
  },
  infoText: {
    fontSize: 17,
    color: 'black'
  },
  button: {
    marginTop: 40,
    backgroundColor: '#00b3ae'
    // backgroundColor: '#229691'
  },
  buttonText: {
    fontWeight: 'bold'
  }
})
