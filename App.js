import React from 'react';
import { Button, StyleSheet, ScrollView, Text, View } from 'react-native';
import UsersMap from './components/UsersMap';
import Dropdown from './components/DropDown'
import AddNew from './components/AddNew'


import FetchLocation from './components/FetchLocation';
import FetchCityParkLocation from './components/FetchCityParkLocation';
import FetchWashParkLocation from './components/FetchWashParkLocation';
import FetchPrairieMeadowsParkLocation from './components/FetchPrairieMeadowsParkLocation'
import SeeEquipment from './components/SeeEquipment';

export default class App extends React.Component {
  state = {
    userLocation: null,
}

getUserLocationHandler = () => {
  navigator.geolocation.getCurrentPosition(position => {
  this.setState({
    userLocation: {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  })
  }, err => console.log(err));
}

getUserLocationHandler1 = () => {
  navigator.geolocation.getCurrentPosition(position => {
  this.setState({
    userLocation: {
      latitude: 39.7459,
      longitude: -104.9476,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  })
  }, err => console.log(err));
}

getUserLocationHandler2 = () => {
  navigator.geolocation.getCurrentPosition(position => {
  this.setState({
    userLocation: {
      latitude: 39.6984,
      longitude: -104.9696,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  })
  }, err => console.log(err));
}

getUserLocationHandler3 = () => {
  navigator.geolocation.getCurrentPosition(position => {
  this.setState({
    userLocation: {
      latitude: 39.7928,
      longitude: -104.8921,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  })
  }, err => console.log(err));
}

render() {
    return (
      <ScrollView>
        <FetchLocation onSetLocation={this.getUserLocationHandler} />
          <UsersMap userLocation={this.state.userLocation}/>
          <FetchCityParkLocation onSetLocation1={this.getUserLocationHandler1} />
          <FetchWashParkLocation onSetLocation2={this.getUserLocationHandler2} />
          <FetchPrairieMeadowsParkLocation onSetLocation3={this.getUserLocationHandler3} />
          <Text>Hello, everyone!</Text>
         <Dropdown />
          <AddNew />
      </ScrollView>
    );
  }
}


// google maps API key:  AIzaSyDxnJQInPDX3XO6okHEAul4ZqM_2YDyD7s

  // <Button style={styles.button1} onPress={this.handleSubmit} >
//  <Text style={styles.text} >Submit your data!</Text>
  //   </Button>
  // <FormThing style={styles.form} />
// handleSubmit = () => {
// const value = this._form.getValue(); // use that ref to get the form value
// console.log('value: ', value);
// }



{/* <SeeEquipment /> */}