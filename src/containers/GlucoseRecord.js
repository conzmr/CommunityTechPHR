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
import moment from "moment/min/moment-with-locales";


export default class SignUp extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Registro de glucosa'
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
        glucose: {
          date: new Date(),
          time: new Date(),
          bloodGlucose: undefined,
          mealTime: ""
        }
    };
  }

  onValueChange = (key, val) => {
    this.setState({ [key]: val })
    this.setState(prevState => ({
        glucose: {
            ...prevState.glucose,
            [key]: val
        }
    }))
  }

  saveGlucose = async () => {
    try {
      const { date, bloodGlucose, mealTime } = this.state.glucose;
      let strDate = moment(date).format("DD-MM-YY");
      let register = {
        [strDate]: [
          {
            'bloodGlucose': bloodGlucose,
            'mealTime': mealTime
          }
        ]
      }
      await AsyncStorage.mergeItem('GLUCOSE', JSON.stringify(register));
      goHome()
    } catch (error) {
      console.log(error);
    }
  }

  navigationButtonPressed({ buttonId }) {
    Navigation.dismissModal(this.props.componentId);
    if(buttonId == "buttonSave"){
      return this.saveGlucose();
    }
  }

  render() {
    const {
      date,
      time,
      mealTime,
      bloodGlucose
    } = this.state.glucose;
    return (
      <Container>
        <Content>
          <Form>
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
                    onChangeText={(val) => this.onValueChange('bloodGlucose', val)}
                    value={ bloodGlucose }
                  />
                </Row>
              </Grid>
            </ListItem>
            <Item style={styles.itemList} noIndent >
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
                    onDateChange={val => this.onValueChange('date', val)}
                    />
                </Row>
              </Grid>
            </Item>
            <Item style={styles.itemList} noIndent >
              <Grid>
                <Row>
                  <Text style={styles.label}>Hora de la comida</Text>
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
                  selectedValue={ mealTime }
                  onValueChange={val => this.onValueChange('mealTime',val)}
                >
                  <Picker.Item label="Antes de comer" value="Antes de comer" />
                  <Picker.Item label="Después de comer" value="Después de comer" />
                </Picker>
                </Row>
              </Grid>
            </Item>
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
