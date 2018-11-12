import React from 'react'
import {
  View,
  StyleSheet,
  AsyncStorage
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
  Title,
  Button
} from 'native-base';
// import { decorator as sensors } from "react-native-sensors";
import { Accelerometer } from "react-native-sensors";

const Value = ({name, value}) => (
  <View style={styles.valueContainer}>
    <Text style={styles.valueName}>{name}:</Text>
    <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
  </View>
)

export default class Exercises extends React.Component {
  constructor(props) {
    super(props);

    new Accelerometer({
      updateInterval: 400 // defaults to 100ms
    })
      .then(observable => {
        observable.subscribe(({x,y,z}) => this.setState({x,y,z}));
      })
      .catch(error => {
        console.log("The sensor is not available");
      });

    this.state = {x: 1.057373, y: 7.747573, z: 5.562713};
    this.state = {x: 0, y: 0, z: 0};
  }

  render() {
    const { sensorsFound, Accelerometer, Gyroscope } = this.props;
      return (
        <Container>
          <Header>
           <Body>
             <Text>Monitoreo de ejercicios</Text>
           </Body>
         </Header>
        <Content style={styles.container}>
          {/* <Text>
          {(sensorsFound["Accelerometer"] &&
            `Acceleration has value: ${Accelerometer}`) ||
            "Acceleration is not available"}
        </Text> */}
        <View style={styles.container}>
        <Text style={styles.headline}>
          Valores del acelerómetro
        </Text>
        <Value name="x" value={this.state.x} />
        <Value name="y" value={this.state.y} />
        <Value name="z" value={this.state.z} />
      </View>
      <Button block style={styles.button}
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

      >
        <Text style={styles.buttonText} > Comenzar </Text>
    </Button>
        </Content>
      </Container>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15
  },
  headline: {
    fontSize: 18,
    textAlign: 'left',
    margin: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  valueValue: {
    width: 200,
    fontSize: 20
  },
  valueName: {
    width: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#00b3ae'
    // backgroundColor: '#229691'
    // backgroundColor: '#666'
  },
  buttonText: {
    fontWeight: 'bold'
  }
});

// export default sensors({
//   Accelerometer: {
//     updateInterval: 300 // optional
//   }
// })(Exercises);
