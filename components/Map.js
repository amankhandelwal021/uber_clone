import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";

const Map = () => {
  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: 20.5937,
        longitude: 78.9629,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{
          latitude: 20.5937,
          longitude: 78.9629,
        }}
        title="Origin"
        description="This is the description"
        identifier="Origin"
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
