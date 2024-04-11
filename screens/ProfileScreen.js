import { View, Text, Alert, Image, TouchableOpacity, KeyboardAvoidingView, Platform, } from 'react-native';
import React, { useState, Component } from 'react'
import * as ImagePicker from 'expo-image-picker';
import tw from 'twrnc'
import { TextInput } from 'react-native-paper';

const ProfileScreen = ({ navigation, route }) => {
    const [userName, setUserName] = useState(route.params?.userName || '');
    const [imageUri, setImageUri] = useState(route.params?.imageUri || '');
    //changeable name and image
    const birthday = route.params?.birthday;

    const [text, setText] = useState('');
    const [shortBio, setShortBio] = useState('Short Bio');
    const placeholderText = '*You have not advanced enough in your adventure'
    const [inputEnabled, setInputEnabled] = useState(false);
    const [activeButton, setActiveButton] = useState('stats');


    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted !== true) {
            alert('You need to allow access to your photos!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result); // Log the entire result object

        if (!result.cancelled && result.assets && result.assets.length > 0) {
            const uri = result.assets[0].uri;  // Access the URI from the first asset
            setImageUri(uri);
        } else {
            console.log("No image picked or operation cancelled.");
        }
    }

    const confirmLogout = () => {
        Alert.alert(
            'Confirm Logout', // Title of the alert
            'Are you sure you want to log out?', // Message of the alert
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Logout canceled'), // No action taken
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => navigation.navigate('Home', { userName: null, imageUri: null, birthday: null }), // Navigates to Home and resets parameters
                },
            ],
            { cancelable: false } // Prevent the user from tapping outside the dialog to dismiss it
        );
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "margin" : "height"} style={tw`flex-1`}>
            <View style={[tw`h-30% bg-[#226f62] pt-10 rounded-b-3xl flex-col items-center`]}>
                {/* Section 1 - Top*/}
                <View style={[tw`w-full py-4 px-3 rounded-b-3xl flex-col items-center`]}>
                    <View style={tw`flex-row justify-between items-center py-4 w-full`}>
                        <TouchableOpacity onPress={() => navigation.navigate('MainMenu', { userName: userName, imageUri: imageUri, birthday: birthday })} style={tw`items-start`}>
                            <Text style={tw`text-lg text-white`}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`items-center`}>
                            <Text style={tw`text-3xl font-bold text-white`}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`items-end`}
                            onPress={confirmLogout}>
                            <Text style={tw`text-lg text-white`}>Logout</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={pickImage} style={tw`pt-10 items-center`}>
                            <Image
                                style={tw`h-35 w-35 border-4 border-[#fff] rounded-full items-center justify-center`}
                                source={imageUri ? { uri: imageUri } : require('../assets/profileImage.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={tw`flex-col justify-between items-center pt-3 w-full`}>
                        <Text style={tw`text-3xl font-bold text-black`}>{userName}</Text>
                        <Text style={tw`text-lg pt-1 text-black`}>{shortBio}</Text>
                    </View>

                    <View style={tw`flex-col w-full justify-center items-start pt-5 px-4`}>
                        <View style={tw`flex-row px-2 justify-between items-center w-full`}>
                            <Text style={tw`text-lg font-bold text-[#b68d50]`}>Your Description:</Text>
                            <TouchableOpacity>
                                <Text style={tw`justify-center items-center text-[#b68d50] pb-2 font-bold text-2xl `} >...</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`p-4 w-full`}>
                            {text === '' && (
                                <Text style={tw`text-[#b68d50] pb-2`}>
                                    {placeholderText}
                                </Text>
                            )}
                            <TextInput
                                style={tw`bg-white h-30 w-full rounded-2xl`}
                                onChangeText={setText}
                                value={text}
                                editable={inputEnabled}  // Control the editability dynamically
                                placeholder=""
                            />
                        </View>

                    </View>


                    {/* Stats/Achievements Content */}
                    {activeButton === 'stats' ? (
                        <View style={tw`flex-row w-full justify-between items-start pt-5 px-6`}>
                            {/* Displayed when "Stats" is selected */}
                            <View>
                                <Text style={tw`text-2xl font-bold text-[#b68d50]`}>
                                    Visited Places
                                </Text>
                                <View style={tw`flex-col items-start justify-between py-4 w-full`}>
                                    <Text style={tw`text-lg text-[#b68d50] font-semibold`}>
                                        Coffe Place
                                    </Text>
                                    <Text style={tw`text-lg text-[#b68d50] font-semibold`}>
                                        Coffe Place
                                    </Text>
                                    <Text style={tw`text-lg text-[#b68d50] font-semibold`}>
                                        Pizza Place
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={tw`text-2xl font-bold text-[#b68d50]`}>Frequency</Text>
                                <View style={tw`flex-col items-center justify-between py-4 w-full`}>
                                    <Text style={tw`text-lg text-[#b68d50] font-semibold`}>
                                        14
                                    </Text>
                                    <Text style={tw`text-lg text-[#b68d50] font-semibold`}>
                                        10
                                    </Text>
                                    <Text style={tw`text-lg text-[#b68d50] font-semibold`}>
                                        7
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View style={tw`w-full  px-6`}>
                            {/* Displayed when "Achievements" is selected */}
                            <Text style={tw`text-2xl text-center font-bold text-[#b68d50]`}>
                                Achievements
                            </Text>
                            <View style={tw`flex-row justify-between p-2`}>
                                <Image source={require('../assets/colorGlobe.png')} style={tw`w-15 h-15`} />
                                <Image source={require('../assets/plus.png')} style={tw`w-15 h-15`} />
                                <Image source={require('../assets/colorGlobe.png')} style={tw`w-15 h-15`} />
                                <Image source={require('../assets/plus.png')} style={tw`w-15 h-15`} />
                            </View>
                            <View style={tw`flex-row justify-between p-2`}>
                                <Image source={require('../assets/colorGlobe.png')} style={tw`w-15 h-15`} />
                                <Image source={require('../assets/plus.png')} style={tw`w-15 h-15`} />
                                <Image source={require('../assets/colorGlobe.png')} style={tw`w-15 h-15`} />
                                <Image source={require('../assets/plus.png')} style={tw`w-15 h-15`} />
                            </View>
                        </View>
                    )}

                    {/* Toggle Buttons */}
                    <View style={tw`flex-row bg-slate-300 rounded-3xl justify-evenly mt-3 items-center w-full`}>
                        <TouchableOpacity
                            onPress={() => setActiveButton('stats')}
                            style={[
                                tw`rounded-3xl w-1/2 justify-center items-center p-3`,
                                activeButton === 'stats' ? tw`bg-slate-700` : tw`bg-slate-300`,
                            ]}
                        >
                            <Text style={tw`text-lg text-white`}>
                                Stats
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setActiveButton('achievements')}
                            style={[
                                tw`rounded-3xl w-1/2 justify-center items-center p-3`,
                                activeButton === 'achievements' ? tw`bg-slate-700` : tw`bg-slate-300`,
                            ]}
                        >
                            <Text style={tw`text-lg text-white`}>
                                Achievements
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView >
    )
}

export default ProfileScreen