/** import react */
import React, { useEffect } from 'react';
/** import react-native */
import { View, StyleSheet, PermissionsAndroid } from 'react-native';
/** import map component */
import MapView, { Marker } from 'react-native-maps';

const LaunchMap = () => {
  /**
  * handle android navigation permission
  */
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Spacex',
          message: 'Spacex App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  /**
  * check location permission 
  */
  useEffect(() => {
    requestLocationPermission();
  }, []);

  /**
   * not getting the markers from appolo query so added static markers
   */

  const markers = [
    {
      latlng: {
        latitude: 37.75,
        longitude: -122.45
      },
      title: "",
      description: ""
    }
  ]

  /** Handle user interface */
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

export default LaunchMap;
/**
* custom stysheet 
*/
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});
