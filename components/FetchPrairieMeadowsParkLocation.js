import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const fetchPrairieMeadowsParkLocation = props => {
    return  (
        <View>
        <Button title="Prairie Meadows Park" onPress={props.onSetLocation3} />
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

export default fetchPrairieMeadowsParkLocation;