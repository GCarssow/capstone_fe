import React from 'react';
import { Button } from 'react-native';

const fetchLocation = props => {
    return  (
        <Button title="Onwards to Unemployability!" onPress={props.onSetLocation} />
    );
};

export default fetchLocation;