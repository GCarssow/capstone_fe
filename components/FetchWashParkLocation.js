import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const fetchWashParkLocation = props => {
    return  (
        <View style={styles.button}>
        <Button title="Wash Park" onPress={props.onSetLocation2} />
        </View>
    );
};
const styles = StyleSheet.create({
    button: {
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    }
});
export default fetchWashParkLocation;