import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const fetchCityParkLocation = props => {
    return  (
        <View>
        <Button title="City Park" onPress={props.onSetLocation1} />
        </View>
    );
};

// const styles = StyleSheet.create({
//     button: {
//     zIndex: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 400,
//     backgroundColor: 'blue'
//     }
// });

export default fetchCityParkLocation;