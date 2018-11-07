// Home.js
import React from 'react'
import {
  View,
  StyleSheet,
  AsyncStorage,
  Button
} from 'react-native'
import { Navigation } from 'react-native-navigation';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Left,
  Body,
  Right,
  Title
} from 'native-base';

export default class MedicalId extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  }

  static options(passProps) {
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
        <Container>
          <Header>
            <Left/>
           <Body>
             <Text>ID Médico</Text>
           </Body>
           <Right>
             <Button
               title="Editar"
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
             />
          </Right>
         </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Nombre</Label>
            </Item>
            <Item stackedLabel>
              <Label>Edad</Label>
            </Item>
            <Item stackedLabel>
              <Label>Nombre</Label>
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
      );
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
