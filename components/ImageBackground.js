import React, { Component } from 'react';
import {
  AppRegistry,
  ImageBackground,
  Text,
} from 'react-native';

const remote = 'https://thewallpaper.co/wp-content/uploads/2016/10/Photos-Forest-HD-For-Home-desktop-wallpapers-high-definition-monitor-download-free-amazing-background-photos-artwork-1920x1080-768x432.jpg';

export default class BackgroundImage extends Component {
  render() {
    const resizeMode = 'center';

    return (
      <ImageBackground>
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={{ uri: remote }}

      </ImageBackground>
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);