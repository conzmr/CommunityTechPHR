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

export default class MedicalId extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('USER');
    console.log("YAY VALUE");
    console.log(value);
    if (value !== null) {
      // We have data!!
      let user = JSON.parse(value);
      console.log(user);
    }
   } catch (error) {
     // Error retrieving data
   }
}

componentDidMount() {
  try {
    console.log("DOING THISS");
    this.retrieveData();
  } catch (err) {
    console.log('error: ', err)
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
                   <Text>Carlota Padilla</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem >
               <Grid>
                 <Row>
                   <Text style={styles.label}>Fecha de nacimiento</Text>
                 </Row>
                 <Row>
                  <Text>27/11/97</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem >
               <Grid>
                 <Row>
                   <Text style={styles.label}>Género</Text>
                 </Row>
                 <Row>
                   <Text>Femenino</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem >
               <Grid>
                 <Row>
                   <Text style={styles.label}>Peso (kg)</Text>
                 </Row>
                 <Row>
                   <Text>52</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem >
               <Grid>
                 <Row>
                   <Text style={styles.label}>Estatura (cm)</Text>
                 </Row>
                 <Row>
                   <Text>165</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem >
               <Grid>
                 <Row>
                   <Text style={styles.label}>Talla de calzado (cm)</Text>
                 </Row>
                 <Row>
                   <Text>25</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem noIndent>
               <Grid>
                 <Row>
                   <Text style={styles.label}>Lateralidad</Text>
                 </Row>
                 <Row>
                   <Text></Text>
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
                    <Text></Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem noIndent style={styles.itemPicker}>
               <Grid>
                 <Row>
                   <Text style={styles.label}>Fecha de toma de glucosa</Text>
                 </Row>
                 <Row>
                    <Text>01/11/18</Text>
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
                    <Text></Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem picker style={styles.itemPicker}>
               <Grid>
                 <Row>
                   <Text style={styles.label}>Tipo de amputación</Text>
                 </Row>
                 <Row>
                    <Text>Transtibial</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem picker style={styles.itemPicker}>
               <Grid>
                 <Row>
                   <Text style={styles.label}>Lado de la amputación</Text>
                 </Row>
                 <Row>
                    <Text>Izquierdo</Text>
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
                    <Text>Muleta</Text>
                 </Row>
               </Grid>
             </ListItem>
             <ListItem noIndent>
               <Grid>
                 <Row>
                   <Text style={styles.label}>Previamente he tomado rehabilitación</Text>
                 </Row>
                 <Row>
                    <Text>Sí</Text>
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
