import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const fetchCentralParkLocation = props => {
    return  (
        <View>
        <Button title="Central Park" onPress={props.onSetLocation4} />
        </View>
    );
};

// const styles = StyleSheet.create({
//     button: {
//     zIndex: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     }
// });
export default fetchCentralParkLocation;