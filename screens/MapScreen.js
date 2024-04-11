import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, Platform, ActionSheetIOS, Modal, Button } from 'react-native';
import tw from 'twrnc';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ navigation, route }) => {
    const [mapType, setMapType] = useState('hybrid'); // Default map type
    const [modalVisible, setModalVisible] = useState(false);

    // Example locations
    const locations = [
        { id: 1, title: "Location 1", latitude: 41.327546, longitude: 19.819025 },
        { id: 2, title: "Location 2", latitude: 41.328546, longitude: 19.818025 },
        // Add more locations as needed
    ];

    const userName = route.params?.userName;
    const imageUri = route.params?.imageUri;

    const showActionSheet = () => {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Cancel", "Standard", "Satellite", "Hybrid"],
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                if (buttonIndex === 0) {
                    // Cancel action
                } else {
                    setMapType(["standard", "satellite", "hybrid"][buttonIndex - 1]);
                }
            }
        );
    };

    const renderAndroidModal = () => (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={tw`flex-1 justify-center items-center`}>
                <View style={tw`bg-white p-5 rounded-xl`}>
                    {["standard", "satellite", "hybrid"].map((type, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                setMapType(type);
                                setModalVisible(false);
                            }}
                            style={tw`p-2`}
                        >
                            <Text style={tw`text-lg text-center`}>{type}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Modal>
    );

    return (
        <SafeAreaView style={tw`flex-1`}>
            <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />

            <View style={tw`flex-row justify-between items-center mt-5 p-4`}>
                <TouchableOpacity onPress={() => navigation.navigate('MainMenu', { userName: userName, imageUri: imageUri })} style={tw`items-start`}>
                    <Text style={tw`text-lg text-[#5e9152]`}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`items-center`}>
                    <Text style={tw`text-4xl font-semibold text-black`}>Map</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Platform.OS === 'ios' ? showActionSheet() : setModalVisible(true)} style={tw`items-end`}>
                    <Text style={tw`text-lg text-[#5e9152]`}>Filter</Text>
                </TouchableOpacity>
            </View>

            {Platform.OS === 'android' && renderAndroidModal()}

            <MapView
                style={tw`flex-1 -mb-3 mx-3 rounded-xl`}
                mapType={mapType}
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
