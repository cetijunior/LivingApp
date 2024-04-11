import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc'; // Assuming you are using Tailwind CSS for React Native

function SignUpConfirm({ navigation, route }) {
    const { email } = route.params; // Email passed from the SignUp screen
    const [confirmCode, setConfirmCode] = useState('');

    // Function to handle confirmation
    const handleConfirmation = () => {

        navigation.navigate('Login', { email: email, confirmCode: confirmCode });
        console.log('Email: ', email, " ConfirmationCode:", confirmCode)
        //Params: verifyConfirmationCode(email, confirmCode);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw`flex-1`}
        >
            <ScrollView contentContainerStyle={tw`flex-1 justify-center p-4`}>
                <Text style={tw`text-xl mb-4`}>Enter the confirmation code that was sent to your email</Text>
                <TextInput
                    style={tw`border-2 p-3 rounded-lg mb-4`}
                    placeholder="Confirmation Code"
                    value={confirmCode}
                    onChangeText={setConfirmCode}
                />
                <TouchableOpacity
                    style={tw`bg-blue-500 p-3 rounded-lg items-center`}
                    onPress={handleConfirmation}
                >
                    <Text style={tw`text-white text-lg`}>Confirm</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default SignUpConfirm;
