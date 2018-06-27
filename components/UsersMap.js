import React from 'react';
import { View, StyleSheet } from 'react-native'
import  MapView from 'react-native-maps'



const usersMap = props => {
    let userLocationMarker = null;

    if (props.userLocation) {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation} />
    }
    <MapView.Marker coordinate={props.userLocation} />
    return (
        <View style={styles.mapContainer}>
        <MapView onPress={(event)=> {console.log(event)}
        }
        initialRegion={{latitude: 39.757757,
            longitude: -105.006839,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }}
        region={props.userLocation}
        style={styles.map}> 
            {userLocationMarker}
        
        </MapView>
    </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: '75%',
        marginTop: 20
    },
    map: {
        width: '100%',
        height: '100%',
    }
})

export default usersMap