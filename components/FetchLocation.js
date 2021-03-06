import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const fetchLocation = props => {
    return  (
    <View style={styles.button}>
    <Button title="Go to my location" onPress={props.onSetLocation} />
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

export default fetchLocation;