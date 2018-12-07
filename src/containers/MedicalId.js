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
  Text,
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
import moment from "moment/min/moment-with-locales";

export default class MedicalId extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      user: {}
    }
  }

  retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('USER');
    if (value !== null) {
      let user = JSON.parse(value);
      this.setState({
        'user': user
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
      const {
        name,
        birthdate,
        gender,
        weight,
        height,
        shoeSize,
        laterality,
        glucose,
        amputationReason,
        amputationType,
        amputationSide,
        prevDisplacementTool,
        prevRehabilitation
      } = this.state.user;
      console.log(this.state);
      return (
        <Container>
          <Header span style={styles.backgroundHeader}>
           <Body>
             <Title style={styles.headerTitle}>ID Médico</Title>
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
             <ListItem itemHeader style={styles.divider}>
               <Text style={styles.dividerText}>DATOS GENERALES</Text>
             </ListItem>
             <ListItem >
               <Grid>
                 <Row>
                   <Text style={styles.label}>Nombre</Text>
                 </Row>
                 <Row>
                   <Text>{name}</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem >
               <Grid>
                 <Row>
                   <Text style={styles.label}>Fecha de nacimiento</Text>
                 </Row>
                 <Row>
                  <Text>{birthdate && moment(birthdate).format("DD/MM/YY")}</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem >
               <Grid>
                 <Row>
                   <Text style={styles.label}>Género</Text>
                 </Row>
                 <Row>
                   <Text>{gender}</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem >
               <Grid>
                 <Row>
                   <Text style={styles.label}>Peso (kg)</Text>
                 </Row>
                 <Row>
                   <Text>{weight}</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem >
               <Grid>
                 <Row>
                   <Text style={styles.label}>Estatura (cm)</Text>
                 </Row>
                 <Row>
                   <Text>{height}</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem >
               <Grid>
                 <Row>
                   <Text style={styles.label}>Talla de calzado (cm)</Text>
                 </Row>
                 <Row>
                   <Text>{shoeSize}</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem noIndent>
               <Grid>
                 <Row>
                   <Text style={styles.label}>Lateralidad</Text>
                 </Row>
                 <Row>
                   <Text>{laterality}</Text>
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
                    <Text>{amputationReason}</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem picker style={styles.itemPicker}>
               <Grid>
                 <Row>
                   <Text style={styles.label}>Tipo de amputación</Text>
                 </Row>
                 <Row>
                    <Text>{amputationType}</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem picker style={styles.itemPicker}>
               <Grid>
                 <Row>
                   <Text style={styles.label}>Lado de la amputación</Text>
                 </Row>
                 <Row>
                    <Text>{amputationSide}</Text>
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
                    <Text>{prevDisplacementTool}</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem noIndent>
               <Grid>
                 <Row>
                   <Text style={styles.label}>Previamente he tomado rehabilitación</Text>
                 </Row>
                 <Row>
                    <Text>{
                      prevRehabilitation ? 'Sí' : 'No'
                    }</Text>
                 </Row>
               </Grid>
             </ListItem>
           </Form>
           <Footer/>
         </Content>
      </Container>
      );
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
    fontWeight: '500',
    fontSize: 14
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
