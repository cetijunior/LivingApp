import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

const LogBoard = ({ navigation, route }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const addMessage = () => {
        if (newMessage.trim()) {
            setMessages(previousMessages => [...previousMessages, newMessage]);
            setNewMessage('');
        }
    };


    const { latitude, longitude, userName, imageUri } = route.params || {};

    if (!latitude || !longitude) {
        return (
            <View style={tw`flex-1 items-center justify-center`}>
                <Text style={tw`text-xl mb-4`}>No location data found.</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('QrScanner', { userName: userName, imageUri: imageUri })}
                    style={tw`bg-blue-500 px-5 py-2 rounded-lg`}
                >
                    <Text style={tw`text-white text-lg`}>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={tw`flex-1`}>
            <View style={tw`flex-1 items-center justify-between`}>
                {/* Header */}
                <View style={[tw`w-full pt-15`]}>
                    <View style={tw`flex-row justify-between items-center px-3`}>
                        <TouchableOpacity onPress={() => navigation.navigate('MainMenu', { userName, imageUri, latitude, longitude })} style={tw`items-start`}>
                            <Text style={tw`text-lg text-[#5e9152]`}>Back</Text>
                        </TouchableOpacity>
                        <Text style={tw`text-4xl font-semibold text-black`}>LogBoard</Text>
                        <TouchableOpacity style={tw`items-end`}>
                            <Text style={tw`text-lg text-[#5e9152]`}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Messages Board */}
                <ScrollView style={tw`flex p-4 w-full`}>
                    <View style={tw`flex-wrap flex-row justify-center`}>
                        {messages.map((message, index) => (
                            <View key={index} style={tw`m-2 bg-yellow-200 rounded-lg shadow-md max-w-40 max-h-40`}>
                                <ScrollView nestedScrollEnabled={true}>
                                    <Text style={tw`text-gray-800 text-center p-2`}>{message}</Text>
                                </ScrollView>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                {/* New Message Input */}
                <View style={tw`p-4 pb-8 w-full flex-row items-center bg-gray-100`}>
                    <TextInput
                        value={newMessage}
                        onChangeText={setNewMessage}
                        placeholder="Type your message here..."
                        style={tw`flex-1 bg-white p-2 rounded-lg border border-gray-300 mr-2`}
                    />
                    <TouchableOpacity onPress={addMessage} style={tw`bg-[#5e9152] rounded-2xl px-3 py-2`}>
                        <Text style={tw`text-white`}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LogBoard;
