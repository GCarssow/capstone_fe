import React from 'react';
import { Button, StyleSheet, Header, Container, Image, source, ScrollView, Text, View } from 'react-native';
import { ImageBackground } from 'react-native'
import UsersMap from './components/UsersMap';
import AddNew from './components/AddNew'
import Dropdown from './components/DropDown'
import SeeEquipment from './components/SeeEquipment';
// import SearchBar from './components/SearchBar';

console.disableYellowBox = true

import FetchLocation from './components/FetchLocation';
import FetchCityParkLocation from './components/FetchCityParkLocation';
import FetchWashParkLocation from './components/FetchWashParkLocation';
import FetchPrairieMeadowsParkLocation from './components/FetchPrairieMeadowsParkLocation'
import FetchCentralParkLocation from './components/FetchCentralParkLocation'


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

getUserLocationHandler4 = () => {
  navigator.geolocation.getCurrentPosition(position => {
  this.setState({
    userLocation: {
      latitude: 39.761276452472735,
      longitude: -104.88364928491211,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  })
  }, err => console.log(err));
}

render() {
    return (
      <ScrollView style={{ marginTop: 0, marginBottom: 0, padding: 0, backgroundColor: '#7C7C7C' }}>
        <FetchLocation onSetLocation={this.getUserLocationHandler} />
            
            <UsersMap userLocation={this.state.userLocation}/>
          <Text style={styles.header}>Select Your Park</Text>
          <View style={styles.buttons}>
          <FetchCityParkLocation onSetLocation1={this.getUserLocationHandler1} />
          <FetchWashParkLocation onSetLocation2={this.getUserLocationHandler2} />
          <FetchPrairieMeadowsParkLocation onSetLocation3={this.getUserLocationHandler3} />
          <FetchCentralParkLocation onSetLocation4={this.getUserLocationHandler4} />
          </View>
         <SeeEquipment />
         <AddNew /> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
  zIndex: 10,
  alignItems: 'center',
  justifyContent: 'center',
  width: 350,
  marginTop: 0,
  marginBottom: 100,
  },
  header: {
    justifyContent: 'center',
    marginTop: 1,
    marginLeft: 70,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    shadowColor: 'black',
    width: '100%'
  },
});




// google maps API key:  AIzaSyDxnJQInPDX3XO6okHEAul4ZqM_2YDyD7s

  // <Button style={styles.button1} onPress={this.handleSubmit} >
//  <Text style={styles.text} >Submit your data!</Text>
  //   </Button>
  // <FormThing style={styles.form} />
// handleSubmit = () => {
// const value = this._form.getValue(); // use that ref to get the form value
// console.log('value: ', value);
// }