import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const fetchWashParkLocation = props => {
    return  (
        <View>
        <Button title="Wash Park" onPress={props.onSetLocation2} />
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
export default fetchWashParkLocation;