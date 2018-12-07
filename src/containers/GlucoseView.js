
import React, { Component } from 'react';
import { Agenda } from 'react-native-calendars';
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
import { Navigation } from 'react-native-navigation';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('GLUCOSE');
      if (value !== null) {
        let items = JSON.parse(value);
        this.setState({
          'items': items
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
    const { items } = this.state;
    return (
      <Container>
        <Header style={styles.backgroundHeader}>
         <Body>
           <Title style={styles.headerTitle}>Control de glucosa</Title>
         </Body>
         <Right>
           <Button
             title="+"
             color= '#00b3ae'
             onPress={() => {
               Navigation.showModal({
                 stack: {
                   children: [{
                     component: {
                       name: 'GlucoseRecord'
                     }
                   }]
                 }
               });
             }}
           />
        </Right>
       </Header>
        <Content>
          <Agenda
            // items = {items}
            // items={{
            //   '2018-12-08':[
            //     {
            //       name: "hola",
            //       height: 20
            //     }
            //   ]
            // }}
            items={
            {'2018-12-07': [{name: 'Glucosa '+ Math.max(50, Math.floor(Math.random() * 150)), height: 80}],
             '2018-12-06': [{name: 'Glucosa '+ Math.max(50, Math.floor(Math.random() * 150)), height: 80}],
             '2018-12-05': [],
             '2018-12-04': [{name: 'Glucosa '+ Math.max(50, Math.floor(Math.random() * 150)), height: 80}],
            }}
            loadItemsForMonth={(month) => {console.log('Loading agenda')}}
            // loadItemsForMonth={this.loadItems.bind(this)}
            selected={new Date()}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            // markingType={'period'}
            // markedDates={{
            //    '2017-05-08': {textColor: '#666'},
            //    '2017-05-09': {textColor: '#666'},
            //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
            //    '2017-05-21': {startingDay: true, color: 'blue'},
            //    '2017-05-22': {endingDay: true, color: 'gray'},
            //    '2017-05-24': {startingDay: true, color: 'gray'},
            //    '2017-05-25': {color: 'gray'},
            //    '2017-05-26': {endingDay: true, color: 'gray'}}}
            //  monthFormat={'yyyy'}
            //  theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
            // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
          />
          <Footer/>
        </Content>
      </Container>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Glucosa ' + Math.max(50, Math.floor(Math.random() * 150)),
              height: 150
            });
          }
        }
      }
      console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
      console.log("NEW ITEMS ", newItems);
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>No hay registro</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
