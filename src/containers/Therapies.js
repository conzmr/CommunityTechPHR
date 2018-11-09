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

export default class Therapies extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Terapias'
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

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  onValueChange = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    try {
      Navigation.dismissModal(this.props.componentId);
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
            <ListItem itemHeader style={styles.divider}>
              <Text style={styles.dividerText}>PRÓTESIS</Text>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de toma de medidas</Text>
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
                    onDateChange={val => this.onChangeText('prosthesis.measurementDate', val)}
                    />
                </Row>
              </Grid>
            </ListItem>
            <ListItem noIndent>
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de entrega</Text>
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
                    onDateChange={val => this.onChangeText('prosthesis.deliveryDate', val)}
                    />
                </Row>
              </Grid>
            </ListItem>

            <ListItem itemHeader style={styles.divider}>
              <Text style={styles.dividerText}>TERAPIA PREPROTÉSICA</Text>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de inicio</Text>
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
                    onDateChange={val => this.onChangeText('preprostheticTherapy.startDate', val)}
                    />
                </Row>
              </Grid>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de terminación</Text>
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
                    onDateChange={val => this.onChangeText('preprostheticTherapy.endDate', val)}
                    />
                </Row>
              </Grid>
            </ListItem>
            <ListItem noIndent>
              <Grid>
                <Row>
                  <Text style={styles.label}>Número de sesiones</Text>
                </Row>
                <Row>
                  <Input
                    keyboardType="numeric"
                    textContentType="preprostheticTherapy.sessionsNumber"
                  />
                </Row>
              </Grid>
            </ListItem>

            <ListItem itemHeader style={styles.divider}>
              <Text style={styles.dividerText}>TERAPIA POSTPROTÉSICA</Text>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de inicio</Text>
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
                    onDateChange={val => this.onChangeText('postprostheticTherapy.startDate', val)}
                    />
                </Row>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de terminación</Text>
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
                    onDateChange={val => this.onChangeText('postprostheticTherapy.endDate', val)}
                    />
                </Row>
              </Grid>
            </ListItem>
            <ListItem noIndent>
              <Grid>
                <Row>
                  <Text style={styles.label}>Número de sesiones</Text>
                </Row>
                <Row>
                  <Input
                    keyboardType="numeric"
                    textContentType="postprostheticTherapy.sessionsNumber"
                  />
                </Row>
              </Grid>
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
  }
})
