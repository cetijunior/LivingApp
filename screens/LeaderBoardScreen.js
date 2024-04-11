import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, } from 'react-native';
import React, { useState, Component } from 'react'
import tw from 'twrnc'
import { TextInput } from 'react-native-paper';

const LeaderBord = ({ navigation, route }) => {
    const userName = route.params?.userName;
    const imageUri = route.params?.imageUri;

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "margin" : "height"} style={tw`flex-1`}>
            <View style={tw`flex-col items-center`}>
                <View style={[tw`pt-10 rounded-b-3xl flex-col items-center`]}>
                    {/* Section 1 - Top*/}
                    <View style={[tw`w-full py-4 px-3 rounded-b-3xl flex-col items-center`]}>


                        <View style={tw`flex-row justify-between items-center pt-4 w-full`}>
                            <TouchableOpacity onPress={() => navigation.navigate('MainMenu', { userName, imageUri })} style={tw`items-start`}>
                                <Text style={tw`text-lg text-[#5e9152]`}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`items-center`}>
                                <Text style={tw`text-4xl font-semibold text-black`}>LeaderBoard</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`items-end`}>
                                <Text style={tw`text-lg text-[#5e9152]`}>Filter</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={tw`flex-col h-85% items-center w-full`}>
                    <View style={tw`flex-row items-center pb-4`}>
                        <Image source={require('../assets/globe.png')} style={tw`h-8 w-8`} />
                        <Text style={tw`text-xl text-center font-bold pl-2`}>Biznesi</Text>
                    </View>
                    {/* Global Missions */}
                    <ScrollView style={[tw`w-full h-full`,]}>
                        <View style={tw`px-4`}>

                            {/* Mission/Notification card */}
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Player</Text>
                                    <Text style={tw`text-base`}>18000 Points in Coffe Crush</Text>
                                </View>
                            </TouchableOpacity>

                            {/* Repeat Mission/Notification card as needed */}
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Player</Text>
                                    <Text style={tw`text-base`}>18000 Points in Coffe Crush</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Player</Text>
                                    <Text style={tw`text-base`}>18000 Points in Coffe Crush</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Player</Text>
                                    <Text style={tw`text-base`}>18000 Points in Coffe Crush</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Player</Text>
                                    <Text style={tw`text-base`}>18000 Points in Coffe Crush</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Player</Text>
                                    <Text style={tw`text-base`}>18000 Points in Coffe Crush</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Player</Text>
                                    <Text style={tw`text-base`}>18000 Points in Coffe Crush</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Player</Text>
                                    <Text style={tw`text-base`}>18000 Points in Coffe Crush</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Player</Text>
                                    <Text style={tw`text-base`}>18000 Points in Coffe Crush</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>

                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default LeaderBord;