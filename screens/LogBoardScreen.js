import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

const LogBoard = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const addMessage = () => {
        if (newMessage.trim()) {
            setMessages(previousMessages => [...previousMessages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={tw`flex-1`}>
            <View style={tw`flex-1 items-center justify-between`}>
                <View style={[tw`flex-row w-full justify-between items-center pt-10`]}>
                    {/* Header */}
                    <View style={tw`w-full`}>
                        <View style={tw`flex-row justify-between items-center pt-8 px-3`}>
                            <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} style={tw`items-start`}>
                                <Text style={tw`text-lg text-[#5e9152]`}>Back</Text>
                            </TouchableOpacity>
                            <Text style={tw`text-4xl font-semibold text-black`}>LeaderBoard</Text>
                            <TouchableOpacity style={tw`items-end`}>
                                <Text style={tw`text-lg text-[#5e9152]`}>Filter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Messages */}
                <View style={tw`flex  w-full`}>
                    <ScrollView style={tw`flex-grow p-4 w-full`}>
                        {messages.map((message, index) => (
                            <View key={index} style={tw`mb-4 p-4 bg-white rounded-lg shadow`}>
                                <Text style={tw`text-gray-800`}>{message}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

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
