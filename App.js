import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UsersMap from './components/UsersMap';
import FetchLocation from './components/FetchLocation';

export default class App extends React.Component {
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
    
    }, err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onSetLocation={this.getUserLocationHandler} />
          <UsersMap />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


// google maps API key:  AIzaSyDxnJQInPDX3XO6okHEAul4ZqM_2YDyD7s