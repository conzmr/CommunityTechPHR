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

export default class SignUp extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Documento clínico'
        },
        leftButtons: [
          {
            id: 'buttonCancel',
            text: 'Cancelar',
            color: '#00b3ae'
          }
        ],
        rightButtons: [
          {
            id: 'buttonSave',
            text: 'Guardar',
            color: '#00b3ae'
          }
        ]
      }
    }
  }
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    Navigation.events().bindComponent(this);
    this.state = {
      gender: undefined,
      amputationType: undefined,
      laterality: undefined,
      prevDisplacementTool: undefined,
      prevRehabilitation: false,
      preprostheticTherapy: {
        startDate: new Date(),
        endDate: new Date()
      },
      postprostheticTherapy: {
        startDate: new Date(),
        endDate: new Date()
      },
      glucose: {
        date: new Date(),
        level: undefined
      },
      prosthesis: {
        measurementDate: new Date(),
        deliveryDate: new Date()
      },
      birthdate: new Date()
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
        <Content>

          <Form>
            {/* <Separator bordered itemDivider>
              <Text>DATOS GENERALES</Text>
            </Separator> */}
            <ListItem itemHeader first>
              <Text>DATOS GENERALES</Text>
            </ListItem>
            {/* <ListItem itemDivider>
              <Text>A</Text>
            </ListItem> */}

            <Item stackedLabel>
              <Label>Nombre</Label>
              <Input
                autoCapitalize="words"
                textContentType="name"
               />
            </Item>
            <Item stackedLabel style={styles.itemPicker}>
              <Label>Fecha de nacimiento</Label>
              <DatePicker
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
                onDateChange={val => this.onChangeText('birthdate', val)}
                />
            </Item>
            <Item picker stackedLabel style={styles.itemPicker}>
              <Label>Género</Label>
              <Picker
                mode="dropdown"
                renderHeader={backAction =>
                <Header>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#00b3ae" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Text style={{ fontSize: 16 }}>Selecciona tu género</Text>
                  </Body>
                  <Right />
                </Header>}
                placeholder="Selecciona tu género"
                placeholderStyle={{ color: "#d3d3d3" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.gender}
                onValueChange={val => this.onValueChange('gender',val)}
              >
                <Picker.Item label="Femenino" value="Femenino" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Otro" value="Otro" />
              </Picker>
            </Item>
            <Item stackedLabel>
              <Label>Peso (kg)</Label>
              <Input keyboardType="numeric"/>
            </Item>
            <Item stackedLabel>
              <Label>Estatura (cm)</Label>
              <Input keyboardType="numeric"
              />
            </Item>
            <Item stackedLabel>
              <Label>Talla de calzado (cm)</Label>
              <Input keyboardType="numeric"
              />
            </Item>
            <Item picker stackedLabel style={styles.itemPicker}>
              <Label>Lateralidad</Label>
              <Picker
                mode="dropdown"
                renderHeader={backAction =>
                <Header>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#00b3ae" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Text style={{ fontSize: 16 }}>Selecciona</Text>
                  </Body>
                  <Right />
                </Header>}
                placeholder="Selecciona"
                placeholderStyle={{ color: "#d3d3d3" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.laterality}
                onValueChange={val => this.onValueChange('laterality',val)}
              >
                <Picker.Item label="Zurdo" value="Zurdo" />
                <Picker.Item label="Diestro" value="Diestro" />
              </Picker>
            </Item>
            <ListItem itemHeader first>
              <Text>GLUCOSA</Text>
            </ListItem>
            <Item stackedLabel>
              <Label>Nivel de glucosa (mg/dL)</Label>
              <Input keyboardType="numeric"/>
            </Item>
            <Item stackedLabel style={styles.itemPicker}>
              <Label>Fecha de toma de glucosa</Label>
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
                onDateChange={val => this.onChangeText('glucose.date', val)}
                />
            </Item>
            <ListItem itemHeader first>
              <Text>DETALLES</Text>
            </ListItem>
            <Item stackedLabel>
              <Label>Causa de amputación</Label>
              <Textarea
                style={styles.textarea}
                rowSpan={2} />
            </Item>
            <Item picker stackedLabel style={styles.itemPicker}>
              <Label>Tipo de amputación</Label>
              <Picker
                mode="dropdown"
                renderHeader={backAction =>
                <Header>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#00b3ae" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Text style={{ fontSize: 16 }}>Tipo de amputación</Text>
                  </Body>
                  <Right />
                </Header>}
                style={{ width: '100%' }}
                placeholder="Selecciona"
                placeholderStyle={{ color: "#d3d3d3" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.amputationType}
                onValueChange={val => this.onValueChange('amputationType',val)}
              >
                <Picker.Item label="Transfemoral" value="Transfemoral" />
                <Picker.Item label="Transtibial" value="Transtibial" />
              </Picker>
            </Item>
            <Item picker stackedLabel style={styles.itemPicker}>
              <Label>Lado de la amputación</Label>
              <Picker
                mode="dropdown"
                renderHeader={backAction =>
                <Header>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#00b3ae" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Text style={{ fontSize: 16 }}>Lado de la amputación</Text>
                  </Body>
                  <Right />
                </Header>}
                style={{ width: '100%' }}
                placeholder="Selecciona"
                placeholderStyle={{ color: "#d3d3d3" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.amputationSide}
                onValueChange={val => this.onValueChange('amputationSide',val)}
              >
                <Picker.Item label="Izquierdo" value="Izquierdo" />
                <Picker.Item label="Derecho" value="Derecho" />
              </Picker>
            </Item>
            <Item picker stackedLabel style={styles.itemPicker}>
              <Label>Antes de recibir la prótesis me desplazaba con</Label>
              <Picker
                mode="dropdown"
                renderHeader={backAction =>
                <Header>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#00b3ae" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Text style={{ fontSize: 16 }}>
                      Antes de recibir la prótesis me desplazaba con
                    </Text>
                  </Body>
                  <Right />
                </Header>}
                style={{ width: '100%' }}
                placeholder="Selecciona"
                placeholderStyle={{ color: "#d3d3d3" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.prevDisplacementTool}
                onValueChange={val => this.onValueChange('prevDisplacementTool',val)}
              >
                <Picker.Item label="Silla de ruedas" value="Silla de ruedas" />
                <Picker.Item label="Andadera" value="Andadera" />
                <Picker.Item label="Muleta" value="Muleta" />
              </Picker>
            </Item>
            <ListItem>
              <Body>
                <Text>Previamente he tomado rehabilitación</Text>
              </Body>
              <Switch
                onValueChange={ value => this.onValueChange('prevRehabilitation',!this.state.prevRehabilitation)}
                value={ this.state.prevRehabilitation}
                onTintColor= "#00b3ae"
              />
            </ListItem>
            <ListItem itemHeader first>
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
            <ListItem itemHeader first>
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
            <ListItem itemHeader first>
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
