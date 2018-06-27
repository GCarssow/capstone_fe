import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UsersMap from './components/UsersMap';
import FetchLocation from './components/FetchLocation';


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
  
  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onSetLocation={this.getUserLocationHandler} />
          <UsersMap userLocation={this.state.userLocation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


// google maps API key:  AIzaSyDxnJQInPDX3XO6okHEAul4ZqM_2YDyD7s