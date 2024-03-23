import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, } from 'react-native';
import React, { useState, Component } from 'react'
import tw from 'twrnc'
import { TextInput } from 'react-native-paper';

const MissionScreen = ({ navigation }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "margin" : "height"} style={tw`flex-1`}>
            <View style={tw`flex-col items-center`}>
                <View style={[tw`pt-10 rounded-b-3xl flex-col items-center`]}>
                    {/* Section 1 - Top*/}
                    <View style={[tw`w-full py-4 px-3 rounded-b-3xl flex-col items-center`]}>


                        <View style={tw`flex-row justify-between items-center py-4 w-full`}>
                            <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} style={tw`items-start`}>
                                <Text style={tw`text-lg text-[#5e9152]`}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`items-center`}>
                                <Text style={tw`text-4xl font-semibold text-black`}>Missions</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`items-end`}>
                                <Text style={tw`text-lg text-[#5e9152]`}>Filter</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={tw`flex-col h-80% items-center w-full`}>
                    <View style={tw`flex-row items-center pb-4`}>
                        <Image source={require('../assets/colorGlobe.png')} style={tw`h-10 w-10`} />
                        <Text style={tw`text-xl text-center font-bold pl-2`}>Global</Text>
                    </View>
                    {/* Global Missions */}
                    <ScrollView style={[tw`w-full`,]}>
                        <View style={tw`px-4`}>

                            {/* Mission/Notification card */}
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Mission Name</Text>
                                    <Text style={tw`text-base`}>Random Mission Explanation</Text>
                                </View>
                                <Text style={tw`text-sm`}>8m ago</Text>
                            </TouchableOpacity>

                            {/* Repeat Mission/Notification card as needed */}
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Mission Name</Text>
                                    <Text style={tw`text-base`}>Random Mission Explanation</Text>
                                </View>
                                <Text style={tw`text-sm`}>8m ago</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Mission Name</Text>
                                    <Text style={tw`text-base`}>Random Mission Explanation</Text>
                                </View>
                                <Text style={tw`text-sm`}>8m ago</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Mission Name</Text>
                                    <Text style={tw`text-base`}>Random Mission Explanation</Text>
                                </View>
                                <Text style={tw`text-sm`}>8m ago</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>

                    <View style={tw`flex-row items-center mt-4 pb-4`}>
                        <Image source={require('../assets/profileImage.png')} style={tw`h-10 w-10`} />
                        <Text style={tw`text-xl text-center font-bold pl-2`}>For You</Text>
                    </View>
                    <ScrollView style={[tw`w-full`,]}>
                        <View style={tw`px-4`}>

                            {/* Mission/Notification card */}
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Mission Name</Text>
                                    <Text style={tw`text-base`}>Random Mission Explanation</Text>
                                </View>
                                <Text style={tw`text-sm`}>8m ago</Text>
                            </TouchableOpacity>
                            {/* Repeat Mission/Notification card as needed */}
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Mission Name</Text>
                                    <Text style={tw`text-base`}>Random Mission Explanation</Text>
                                </View>
                                <Text style={tw`text-sm`}>8m ago</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Mission Name</Text>
                                    <Text style={tw`text-base`}>Random Mission Explanation</Text>
                                </View>
                                <Text style={tw`text-sm`}>8m ago</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-row items-center mb-4 bg-white rounded-2xl p-4 shadow`}>
                                <Image source={require('../assets/userImage.png')} style={tw`h-20 w-20 rounded-2xl`} />
                                <View style={tw`flex-1 ml-4`}>
                                    <Text style={tw`text-lg font-bold`}>Mission Name</Text>
                                    <Text style={tw`text-base`}>Random Mission Explanation</Text>
                                </View>
                                <Text style={tw`text-sm`}>8m ago</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default MissionScreen;