import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Button, Dimensions } from 'react-native';
import tw from 'twrnc';
import { ProgressBar } from 'react-native-paper';
import MapView from 'react-native-maps';


const MainMenu = ({ navigation, route }) => {
    const userName = route.params?.userName;
    const imageUri = route.params?.imageUri;
    const birthday = route.params?.birthday;
    const latitude = route.params?.latitude;
    const longitude = route.params?.longitude;


    const progress = 0.744; // Example progress, calculate based on XP e.g., currentXP / requiredXP
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={tw`flex-1`} contentContainerStyle={tw`flex-1 justify-center items-center p-3`}>

            <View style={[tw`w-full bg-[#226f62] p-4 pt-15 rounded-b-3xl flex-row items-start justify-start`]}>

                <TouchableOpacity style={tw`flex-row items-center mb-2`} onPress={() => navigation.navigate('Profile', { userName: userName, imageUri: imageUri, birthday: birthday })}  >
                    <Image
                        source={imageUri ? { uri: imageUri } : require('../assets/profileImage.png')}
                        style={tw`w-16 h-16 border-2 border-white  rounded-full mr-4`}
                    />
                </TouchableOpacity>

                <View style={tw`flex-col justify-center items-start mt-3`}>
                    <View style={tw`flex items-start`}>
                        <Text style={tw`font-bold`}>Welcome, {userName}!</Text>
                    </View>

                    <View style={tw`flex-row justify-center items-center mt-1`}>
                        <ProgressBar progress={progress} role='meter' color="#bb622f" style={{ width: screenWidth * 0.5, height: 13, borderRadius: 10 }} />
                        <Text style={tw`text-sm text-center ml-2`}>2234/3000 XP</Text>
                    </View>
                </View>
            </View>

            {/* MapView */}
            <View style={tw`h-50 w-full p-3 mb-10`}>
                <TouchableOpacity onPress={() => navigation.navigate('Map', { userName: userName, imageUri: imageUri })} activeOpacity={0.9}>
                    <MapView
                        style={tw`h-50 w-full rounded-3xl`}
                        mapType='standard'
                        initialRegion={{
                            latitude: 41.3275,
                            longitude: 19.8187,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={tw`flex-row items-center w-full`}>
                <View style={tw`flex-1 h-0.5 bg-gray-300`}></View>
                <Image source={require('../assets/quests.png')} style={tw`h-10 w-10`} />
                <View style={tw`flex-1 h-0.5 bg-gray-300`}></View>
            </View>
            <View style={tw`flex-col items-center w-full mt-1`}>
                <Text style={[tw`text-sm`, { fontFamily: 'risque' }]}>
                    Misione
                </Text>
            </View>

            <View style={tw`w-full flex-row items-center -mt-1 justify-between px-15`}>
                <TouchableOpacity onPress={() => navigation.navigate('Mission', { userName: userName, imageUri: imageUri })} style={tw`items-center`}>
                    <Image source={require('../assets/colorMap.png')} style={tw`h-20 w-20 mb-2`} />
                    <Text style={[tw`text-lg`, { fontFamily: 'risque' }]}>
                        For You
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MissionEmpty', { userName: userName, imageUri: imageUri })} style={tw`items-center`}>
                    <Image source={require('../assets/colorGlobe.png')} style={tw`h-20 w-20 mb-2`} />
                    <Text style={[tw`text-lg`, { fontFamily: 'risque' }]}>
                        Global
                    </Text>
                </TouchableOpacity>
            </View>


            <View style={tw`flex-row items-center w-full`}>
                <View style={tw`flex-1 h-0.5 bg-gray-300`}></View>
                <Image source={require('../assets/globe.png')} style={tw`h-10 w-10`} />
                <View style={tw`flex-1 h-0.5 bg-gray-300`}></View>
            </View>
            <View style={tw`flex-col items-center w-full`}>
                <Text style={[tw`text-sm`, { fontFamily: 'risque' }]}>
                    Biznesi
                </Text>
            </View>


            <View style={tw`w-full flex-row items-center justify-between px-15`}>
                <TouchableOpacity onPress={() => navigation.navigate('LogBoard', { userName: userName, imageUri: imageUri, latitude: latitude, longitude: longitude })} style={tw`items-center`}>
                    <Image source={require('../assets/notes.png')} style={tw` h-20 w-20 mb-2`} />
                    <Text style={[tw`text-lg`, { fontFamily: 'risque' }]}>
                        LogBoard
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LeaderBoard', { userName: userName, imageUri: imageUri })} style={tw`items-center`}>
                    <Image source={require('../assets/achievment.png')} style={tw`h-20 w-20 mb-2`} />
                    <Text style={[tw`text-lg`, { fontFamily: 'risque' }]}>
                        LeaderBoard
                    </Text>
                </TouchableOpacity>
            </View>


            <View style={[tw`flex-2 w-full mt-16 rounded-xl bg-gray-400 items-center justify-center`]}>
                <TouchableOpacity onPress={() => navigation.navigate('QrScanner', { userName: userName, imageUri: imageUri })} style={[tw`rounded-xl items-center justify-end`]}>
                    <Image
                        source={require('../assets/qr.png')}
                        style={tw`w-25 h-25 bg-white border-4 z-10 -mt-16 border-gray-400 rounded-full `}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MainMenu;