import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Switch,
  Text
} from 'react-native'
import {
  Container,
  Button,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Icon,
  Left,
  Subtitle,
  Right,
  Body,
  Textarea,
  Title,
  DatePicker,
  ListItem,
  Separator
 } from 'native-base';
import { goHome } from '../navigation';
import { Navigation } from 'react-native-navigation';

export default class Archive extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    Navigation.events().bindComponent(this);
    this.state = {
      preprostheticTherapy: {
        startDate: new Date(),
        endDate: new Date()
      },
      postprostheticTherapy: {
        startDate: new Date(),
        endDate: new Date()
      },
      prosthesis: {
        measurementDate: new Date(),
        deliveryDate: new Date()
      }
    };
  }

  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  onValueChange = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      goHome()
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }

  navigationButtonPressed({ buttonId }) {
    Navigation.dismissModal(this.props.componentId);
    if(buttonId == "buttonSave"){
      return this.signUp();
    }
  }


  render() {
    return (
      <Container>
        <Header span>
         <Body>
           <Title style={styles.headerTitle}>Terapias</Title>
         </Body>
         <Right />
       </Header>
        <Content>


          <Form>
            {/* <Separator bordered itemDivider>
              <Text>DATOS GENERALES</Text>
            </Separator> */}
            <ListItem itemHeader style={styles.divider}>
              <Text>PRÓTESIS</Text>
            </ListItem>
            <Item stackedLabel style={styles.itemPicker}>
              <Label>Fecha de toma de medidas</Label>
              <DatePicker
                style={styles.datePicker}
                defaultDate={new Date()}
                minimumDate={new Date(1900, 1, 1)}
                maximumDate={new Date()}
                locale={"es"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Selecciona una fecha"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={val => this.onChangeText('prosthesis.measurementDate', val)}
                />
            </Item>
            <Item stackedLabel style={styles.itemPicker}>
              <Label>Fecha de entrega</Label>
              <DatePicker
                style={styles.datePicker}
                defaultDate={new Date()}
                minimumDate={new Date(1900, 1, 1)}
                maximumDate={new Date()}
                locale={"es"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Selecciona una fecha"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={val => this.onChangeText('prosthesis.deliveryDate', val)}
                />
            </Item>
            <ListItem itemHeader style={styles.divider}>
              <Text>TERAPIA PREPROTÉSICA</Text>
            </ListItem>
            <Item stackedLabel style={styles.itemPicker}>
              <Label>Fecha de inicio</Label>
              <DatePicker
                style={styles.datePicker}
                defaultDate={new Date()}
                minimumDate={new Date(1900, 1, 1)}
                maximumDate={new Date()}
                locale={"es"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Selecciona una fecha"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={val => this.onChangeText('preprostheticTherapy.startDate', val)}
                />
            </Item>
            <Item stackedLabel style={styles.itemPicker}>
              <Label>Fecha de terminación</Label>
              <DatePicker
                style={styles.datePicker}
                defaultDate={new Date()}
                minimumDate={new Date(1900, 1, 1)}
                maximumDate={new Date()}
                locale={"es"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Selecciona una fecha"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={val => this.onChangeText('preprostheticTherapy.endDate', val)}
                />
            </Item>
            <Item stackedLabel>
              <Label>Número de sesiones</Label>
              <Input keyboardType="numeric"/>
            </Item>
            <ListItem itemHeader style={styles.divider}>
              <Text>TERAPIA POSTPROTÉSICA</Text>
            </ListItem>
            <Item stackedLabel style={styles.itemPicker}>
              <Label>Fecha de inicio</Label>
              <DatePicker
                style={styles.datePicker}
                defaultDate={new Date()}
                minimumDate={new Date(1900, 1, 1)}
                maximumDate={new Date()}
                locale={"es"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Selecciona una fecha"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={val => this.onChangeText('postprostheticTherapy.startDate', val)}
                />
            </Item>
            <Item stackedLabel style={styles.itemPicker}>
              <Label>Fecha de terminación</Label>
              <DatePicker
                style={styles.datePicker}
                defaultDate={new Date()}
                minimumDate={new Date(1900, 1, 1)}
                maximumDate={new Date()}
                locale={"es"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Selecciona una fecha"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={val => this.onChangeText('postprostheticTherapy.endDate', val)}
                />
            </Item>
            <Item stackedLabel>
              <Label>Número de sesiones</Label>
              <Input keyboardType="numeric"/>
            </Item>



          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    width: '100%'
  },
  headerTitle:{
    fontSize: 30,
    fontWeight: '400'
  },
  divider: {
    backgroundColor: '#F8F8F8'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  textarea: {
    width: '100%',
    marginTop: 8
  },
  itemPicker: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
})
