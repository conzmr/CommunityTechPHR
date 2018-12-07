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
import { AsyncStorage } from "react-native";

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
      archive: {}
    };
  }

  onValueChange = (key, val) => {
    this.setState({ [key]: val })
    this.setState(prevState => ({
        archive: {
            ...prevState.archive,
            [key]: val
        }
    }))
  }

  saveArchive = async () => {
    const { archive } = this.state;
    try {
      await AsyncStorage.setItem('ARCHIVE', JSON.stringify(archive));
      goHome();
      Navigation.dismissModal(this.props.componentId);
    } catch (error) {
      console.log(error);
    }
  }

  retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('ARCHIVE');
    if (value !== null) {
      let archive = JSON.parse(value);
      this.setState({
        'archive': archive
      })
    }
   } catch (error) {
     console.log(error);
   }
}

async componentDidMount() {
  try {
    await this.retrieveData();
  } catch (err) {
    console.log('Error: ', err)
  }
}

  navigationButtonPressed({ buttonId }) {
    Navigation.dismissModal(this.props.componentId);
    if(buttonId == "buttonSave"){
      return this.saveArchive();
    }
  }


  render() {
    const {
      preprostheticStart,
      preprostheticEnd,
      preprostheticSessions,
      postprostheticStart,
      postprostheticEnd,
      postprostheticSessions,
      measurementDate,
      deliveryDate
    } = this.state.archive;
    return (
      <Container>
        <Content>
          <Form>
            <ListItem itemHeader style={styles.divider}>
              <Text style={styles.dividerText}>PRÓTESIS</Text>
            </ListItem>
            <Item style={styles.itemList}>
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
                    onDateChange={val => this.onValueChange('measurementDate', val)}
                    />
                </Row>
              </Grid>
            </Item>
            <Item style={styles.itemList}>
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
                    onDateChange={val => this.onValueChange('deliveryDate', val)}
                    />
                </Row>
              </Grid>
            </Item>

            <ListItem itemHeader style={styles.divider}>
              <Text style={styles.dividerText}>TERAPIA PREPROTÉSICA</Text>
            </ListItem>
            <Item style={styles.itemList} >
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
                    onDateChange={val => this.onValueChange('preprostheticStart', val)}
                    />
                </Row>
              </Grid>
            </Item>
            <Item style={styles.itemList} >
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
                    onDateChange={val => this.onValueChange('preprostheticEnd', val)}
                    />
                </Row>
              </Grid>
            </Item>
            <ListItem noIndent>
              <Grid>
                <Row>
                  <Text style={styles.label}>Número de sesiones</Text>
                </Row>
                <Row>
                  <Input
                    keyboardType="numeric"
                    textContentType="preprostheticSessions"
                    onChangeText={(value) => this.onValueChange('preprostheticSessions', value)}
                    value={ preprostheticSessions }
                  />
                </Row>
              </Grid>
            </ListItem>

            <ListItem itemHeader style={styles.divider}>
              <Text style={styles.dividerText}>TERAPIA POSTPROTÉSICA</Text>
            </ListItem>
            <Item style={styles.itemList} >
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
                    onDateChange={val => this.onValueChange('postprostheticStart', val)}
                    />
                </Row>
              </Grid>
            </Item>
            <Item style={styles.itemList}>
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
                    onDateChange={val => this.onValueChange('postprostheticEnd', val)}
                    />
                </Row>
              </Grid>
            </Item>
            <ListItem noIndent>
              <Grid>
                <Row>
                  <Text style={styles.label}>Número de sesiones</Text>
                </Row>
                <Row>
                  <Input
                    keyboardType="numeric"
                    onChangeText={(value) => this.onValueChange('postprostheticSessions', value)}
                    value={ postprostheticSessions }
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
