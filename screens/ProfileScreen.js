import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform, } from 'react-native';
import React, { useState, Component } from 'react'
import tw from 'twrnc'
import { TextInput } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {

    const [text, setText] = useState('');
    const placeholderText = '*You have not advanced enough in your adventure'

    const [activeButton, setActiveButton] = useState('stats');

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "margin" : "height"} style={tw`flex-1`}>
            <View style={[tw`h-30% bg-[#226f62] pt-10 rounded-b-3xl flex-col items-center`]}>
                {/* Section 1 - Top*/}
                <View style={[tw`w-full py-4 px-3 rounded-b-3xl flex-col items-center`]}>
                    <View style={tw`flex-row justify-between items-center py-4 w-full`}>
                        <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} style={tw`items-start`}>
                            <Text style={tw`text-lg text-white`}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`items-center`}>
                            <Text style={tw`text-3xl font-bold text-white`}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`items-end`}>
                            <Text style={tw`text-lg text-white`}>Logout</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={tw`pt-10 items-center`}>
                            <Image
                                style={tw`h-35 w-35 border-4 border-[#fff] rounded-full items-center justify-center`}
                                source={require('../assets/profileImage.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={tw`flex-col justify-between items-center pt-3 w-full`}>
                        <Text style={tw`text-3xl font-bold text-black`}>Username</Text>
                        <Text style={tw`text-lg pt-1 text-black`}>Short Bio</Text>
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
                                placeholder="" // Keeping this empty since we're using a custom placeholder approach
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
        </KeyboardAvoidingView>
    )
}

export default ProfileScreen