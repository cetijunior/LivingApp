import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, } from 'react-native';
import React, { useState, Component } from 'react'
import tw from 'twrnc'
import { TextInput } from 'react-native-paper';

const MissionScreenEmpty = ({ navigation }) => {
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

                <View style={tw`flex-col justify-between items-center w-full`}>
                    <View style={tw`flex-row items-center pb-4`}>
                        <Image source={require('../assets/colorGlobe.png')} style={tw`h-10 w-10`} />
                        <Text style={tw`text-xl text-center font-bold pl-2`}>Global</Text>
                    </View>
                    {/* Global Missions */}
                    <View style={tw`flex-col py-25`}>
                        <Text style={tw`text-2xl text-center font-semibold opacity-75`}>
                            Your job is done for today!
                        </Text>
                        <Text style={tw`text-2xl text-center font-semibold opacity-75`}>
                            Check in tomorrow for more
                        </Text>
                    </View>


                    <View style={tw`flex-row items-center mt-4 pb-4`}>
                        <Image source={require('../assets/profileImage.png')} style={tw`h-10 w-10`} />
                        <Text style={tw`text-xl text-center font-bold pl-2`}>For You</Text>
                    </View>
                    {/* For You Missions */}
                    <View style={tw`flex-col py-25`}>
                        <Text style={tw`text-2xl text-center font-semibold opacity-75`}>
                            Your job is done for today!
                        </Text>
                        <Text style={tw`text-2xl text-center font-semibold opacity-75`}>
                            Check in tomorrow for more
                        </Text>
                    </View>

                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default MissionScreenEmpty;