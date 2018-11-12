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
  Separator,
  Footer
 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { goHome } from '../navigation';
import { Navigation } from 'react-native-navigation';
import { AsyncStorage } from "react-native"


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
      name: "",
      gender: undefined,
      amputationType: undefined,
      amputationSide: undefined,
      amputationReason: "",
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
      birthdate: new Date(),
      weight: 0,
      height: 0,
      shoeSize: 0,
      user: {
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
      }
    };
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  onValueChange = (key, val) => {
    this.setState({ [key]: val })
  }
  // signUp = async () => {
  //   const { user } = this.state
  //   try {
  //     goHome()
  //     console.log('user successfully signed up!: ', success)
  //   } catch (err) {
  //     console.log('error signing up: ', err)
  //   }
  // }

  saveUser = async () => {
    const user = this.state;
    try {
      console.log("SAVING");
      console.log(user);
      await AsyncStorage.setItem('USER', JSON.stringify(user));
      goHome()
    } catch (error) {
      console.log(error);
    }
  }

  navigationButtonPressed({ buttonId }) {
    Navigation.dismissModal(this.props.componentId);
    if(buttonId == "buttonSave"){
      return this.saveUser();
    }
  }


  render() {
    const {
      gender,
      laterality,
      amputationType,
      amputationSide,
      amputationReason,
      prevDisplacementTool,
      prevRehabilitation,
      preprostheticTherapy,
      postprostheticTherapy,
      glucose,
      prosthesis,
      name
     } = this.state;
    return (
      <Container>
        <Content>
          <Form>
            <ListItem itemHeader style={styles.divider}>
              <Text style={styles.dividerText}>DATOS GENERALES</Text>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text
                  style={styles.label}
                  onChangeText={(name) => this.onValueChange('name', name)}
                  value={ name }
                  >Nombre</Text>
                </Row>
                <Row>
                  <Input
                    autoCapitalize="words"
                    textContentType="name"
                   />
                </Row>
              </Grid>
            </ListItem>
            <Item style={styles.itemList}>
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de nacimiento</Text>
                </Row>
                <Row>
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
                </Row>
              </Grid>
            </Item>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Género</Text>
                </Row>
                <Row>
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
                    selectedValue={ gender }
                    onValueChange={val => this.onValueChange('gender',val)}
                  >
                    <Picker.Item label="Femenino" value="Femenino" />
                    <Picker.Item label="Masculino" value="Masculino" />
                    <Picker.Item label="Otro" value="Otro" />
                  </Picker>
                </Row>
              </Grid>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Peso (kg)</Text>
                </Row>
                <Row>
                  <Input
                    keyboardType="numeric"
                    textContentType="weight"
                  />
                </Row>
              </Grid>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Estatura (cm)</Text>
                </Row>
                <Row>
                  <Input
                    keyboardType="numeric"
                    textContentType="height"
                  />
                </Row>
              </Grid>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Talla de calzado (cm)</Text>
                </Row>
                <Row>
                  <Input
                    keyboardType="numeric"
                    textContentType="shoeSize"
                  />
                </Row>
              </Grid>
            </ListItem>
            <ListItem noIndent>
              <Grid>
                <Row>
                  <Text style={styles.label}>Lateralidad</Text>
                </Row>
                <Row>
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
                    selectedValue={ laterality }
                    onValueChange={val => this.onValueChange('laterality',val)}
                  >
                    <Picker.Item label="Zurdo" value="Zurdo" />
                    <Picker.Item label="Diestro" value="Diestro" />
                  </Picker>
                </Row>
              </Grid>
            </ListItem>


            <ListItem itemHeader style={styles.divider}>
              <Text style={styles.dividerText}>GLUCOSA</Text>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Nivel de glucosa (mg/dL)</Text>
                </Row>
                <Row>
                  <Input
                    keyboardType="numeric"
                    textContentType="glucose.level"
                  />
                </Row>
              </Grid>
            </ListItem>
            <ListItem noIndent style={styles.itemPicker}>
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de toma de glucosa</Text>
                </Row>
                <Row>
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
                </Row>
              </Grid>
            </ListItem>

            <ListItem itemHeader style={styles.divider}>
              <Text style={styles.dividerText}>DETALLES</Text>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Causa de amputación</Text>
                </Row>
                <Row>
                  <Textarea
                    style={styles.textarea}
                    textContentType="amputationReason"
                    rowSpan={2} />
                </Row>
              </Grid>
            </ListItem>
            <ListItem picker style={styles.itemPicker}>
              <Grid>
                <Row>
                  <Text style={styles.label}>Tipo de amputación</Text>
                </Row>
                <Row>
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
                    selectedValue={amputationType}
                    onValueChange={val => this.onValueChange('amputationType',val)}
                  >
                    <Picker.Item label="Transfemoral" value="Transfemoral" />
                    <Picker.Item label="Transtibial" value="Transtibial" />
                  </Picker>
                </Row>
              </Grid>
            </ListItem>
            <ListItem picker style={styles.itemPicker}>
              <Grid>
                <Row>
                  <Text style={styles.label}>Lado de la amputación</Text>
                </Row>
                <Row>
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
                    selectedValue={amputationSide}
                    onValueChange={val => this.onValueChange('amputationSide',val)}
                  >
                    <Picker.Item label="Izquierdo" value="Izquierdo" />
                    <Picker.Item label="Derecho" value="Derecho" />
                  </Picker>
                </Row>
              </Grid>
            </ListItem>
            <ListItem picker style={styles.itemPicker}>
              <Grid>
                <Row>
                  <Text style={styles.label}>
                    Antes de recibir la prótesis me desplazaba con
                  </Text>
                </Row>
                <Row>
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
                          Me desplazaba con
                        </Text>
                      </Body>
                      <Right />
                    </Header>}
                    style={{ width: '100%' }}
                    placeholder="Selecciona"
                    placeholderStyle={{ color: "#d3d3d3" }}
                    placeholderIconColor="#007aff"
                    selectedValue={prevDisplacementTool}
                    onValueChange={val => this.onValueChange('prevDisplacementTool',val)}
                  >
                    <Picker.Item label="Silla de ruedas" value="Silla de ruedas" />
                    <Picker.Item label="Andadera" value="Andadera" />
                    <Picker.Item label="Muleta" value="Muleta" />
                  </Picker>
                </Row>
              </Grid>
            </ListItem>

            <ListItem noIndent>
              <Body>
                <Text style={styles.label}>Previamente he tomado rehabilitación</Text>
              </Body>
              <Switch
                onValueChange={ value => this.onValueChange('prevRehabilitation',!this.state.prevRehabilitation)}
                value={ prevRehabilitation}
                onTintColor= "#00b3ae"
              />
            </ListItem>
          </Form>
          <Footer/>
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
  label: {
    color: '#00B3AE',
    fontWeight: '500'
  },
  divider: {
    backgroundColor: '#F8F8F8'
  },
  dividerText: {
    color:'#798d99'
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
  },
  itemList: {
    borderColor: '#c9c9c9',
    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 16,
    borderBottomWidth: 0.5,
    marginLeft: 16
  }
})
