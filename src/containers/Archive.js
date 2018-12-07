import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Switch,
  Text,
   Button
} from 'react-native';
 import {
   Container,
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

export default class Archive extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      archive: {}
    };
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
        <Header span style={styles.backgroundHeader}>
         <Body>
           <Title style={styles.headerTitle}>Terapias</Title>
         </Body>
         <Right>
           <Button
             title="Editar"
             color= '#00b3ae'
             onPress={() => {
               Navigation.showModal({
                 stack: {
                   children: [{
                     component: {
                       name: 'Therapies'
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
            <ListItem itemHeader style={styles.divider}>
              <Text style={styles.dividerText}>PRÓTESIS</Text>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de toma de medidas</Text>
                </Row>
                <Row style={styles.marginTop}>
                  <Text>{measurementDate && moment(measurementDate).format("DD/MM/YY")}</Text>
                </Row>
              </Grid>
            </ListItem>
            <ListItem noIndent>
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de entrega</Text>
                </Row>
                <Row>
                  <Text>{deliveryDate && moment(deliveryDate).format("DD/MM/YY")}</Text>
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
                  <Text>{preprostheticStart && moment(preprostheticStart).format("DD/MM/YY")}</Text>
                </Row>
              </Grid>
            </ListItem>
            <ListItem >
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de terminación</Text>
                </Row>
                <Row>
                  <Text>{preprostheticEnd && moment(preprostheticEnd).format("DD/MM/YY")}</Text>
                </Row>
              </Grid>
            </ListItem>
            <ListItem noIndent>
              <Grid>
                <Row>
                  <Text style={styles.label}>Número de sesiones</Text>
                </Row>
                <Row>
                  <Text>{preprostheticSessions}</Text>
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
                  <Text>{postprostheticStart && moment(postprostheticStart).format("DD/MM/YY")}</Text>
                </Row>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid>
                <Row>
                  <Text style={styles.label}>Fecha de terminación</Text>
                </Row>
                <Row>
                  <Text>{postprostheticEnd && moment(postprostheticEnd).format("DD/MM/YY")}</Text>
                </Row>
              </Grid>
            </ListItem>
            <ListItem noIndent>
              <Grid>
                <Row>
                  <Text style={styles.label}>Número de sesiones</Text>
                </Row>
                <Row>
                  <Text>{postprostheticSessions}</Text>
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
  marginTop:{
    marginTop: 10
  },
  headerTitle:{
    fontSize: 30,
    fontWeight: '400'
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
  backgroundHeader: {
    backgroundColor: 'white'
  }
})
