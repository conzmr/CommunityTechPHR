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
import { Navigation } from 'react-native-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class AgendaRecords extends Component {

  //https://github.com/wix/react-native-calendars
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {};
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  onValueChange = (key, val) => {
    this.setState({ [key]: val })
  }
  navigationButtonPressed({ buttonId }) {
    Navigation.dismissModal(this.props.componentId);
  }

  render() {
    return (
      <Container>
        <Header span style={styles.backgroundHeader}>
         <Body>
           <Title style={styles.headerTitle}>Agenda</Title>
         </Body>
       </Header>
        <Content>
        <Calendar
  // Collection of dates that have to be marked. Default = {}
  markedDates={{
    '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
    '2012-05-17': {marked: true},
    '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2012-05-19': {disabled: true, disableTouchEvent: true}
  }}
/>
        <Calendar
  // Initially visible month. Default = Date()
  current={'2012-03-01'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2012-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2012-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={(direction) => (<Arrow />)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={true}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={substractMonth => substractMonth()}
  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}

  markedDates={{
    '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
    '2012-05-17': {marked: true},
    '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2012-05-19': {disabled: true, disableTouchEvent: true}
  }}
/>
        <Agenda
            items={
              {'2012-05-22': [{text: 'item 1 - any js object'}],
               '2012-05-23': [{text: 'item 2 - any js object'}],
               '2012-05-24': [],
               '2012-05-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
              }}
            // callback that gets called when items for a certain month should be loaded (month became visible)
            loadItemsForMonth={(month) => {console.log('trigger items loading')}}
            // callback that fires when the calendar is opened or closed
            onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
            // callback that gets called on day press
            onDayPress={(day)=>{console.log('day pressed')}}
            // callback that gets called when day changes while scrolling agenda list
            onDayChange={(day)=>{console.log('day changed')}}
            // initially selected day
            selected={'2012-05-16'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2012-05-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2012-05-30'}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={50}
            // specify how each item should be rendered in agenda
            renderItem={(item, firstItemInDay) => {return (<View />);}}
            // specify how each date should be rendered. day can be undefined if the item is not first in that day.
            renderDay={(day, item) => {return (<View />);}}
            // specify how empty date content with no items should be rendered
            renderEmptyDate={() => {return (<View />);}}
            // specify how agenda knob should look like
            renderKnob={() => {return (<View />);}}
            // specify what should be rendered instead of ActivityIndicator
            renderEmptyData = {() => {return (<View />);}}
            // specify your item comparison function for increased performance
            rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
            // Hide knob button. Default = false
            hideKnob={true}
            // By default, agenda dates are marked if they have at least one item, but you can override this if needed
            markedDates={{
              '2012-05-16': {selected: true, marked: true},
              '2012-05-17': {marked: true},
              '2012-05-18': {disabled: true}
            }}
            // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
            onRefresh={() => console.log('refreshing...')}
            // Set this true while waiting for new data from a refresh
            refreshing={false}
            // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
            refreshControl={null}
            // agenda theme
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              monthTextColor: 'blue',
              textMonthFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
              agendaDayTextColor: 'yellow',
              agendaDayNumColor: 'green',
              agendaTodayColor: 'red',
              agendaKnobColor: 'blue'
            }}
            // agenda container style
            style={{}}
          />

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
