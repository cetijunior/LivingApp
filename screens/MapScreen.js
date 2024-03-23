import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, Platform } from 'react-native';
import tw from 'twrnc';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
    // Example locations
    const locations = [
        { id: 1, title: "Location 1", latitude: 41.327546, longitude: 19.819025 },
        { id: 2, title: "Location 2", latitude: 41.328546, longitude: 19.818025 },
        // Add more locations as needed
    ];

    return (
        <SafeAreaView style={tw`flex-1`}>
            <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />

            <View style={tw`flex-row justify-between items-center mt-5 p-4`}>
                <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} style={tw`items-start`}>
                    <Text style={tw`text-lg text-[#5e9152]`}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`items-center`}>
                    <Text style={tw`text-4xl font-semibold text-black`}>Map</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`items-end`}>
                    <Text style={tw`text-lg text-[#5e9152]`}>Filter</Text>
                </TouchableOpacity>
            </View>

            <MapView
                style={tw`flex-1`}
                mapType='standard'
                initialRegion={{
                    latitude: 41.3275,
                    longitude: 19.8187,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {locations.map(location => (
                    <Marker
                        key={location.id}
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                        title={location.title}
                    />
                ))}
            </MapView>
        </SafeAreaView>
    );
};

export default MapScreen;
