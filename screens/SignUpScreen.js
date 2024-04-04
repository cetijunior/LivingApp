import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';
import { useFonts } from 'expo-font';


const SignUpScreen = ({ navigation }) => {

    const [] = useFonts({
        'PalatinoLinotype': require('../assets/fonts/PalatinoLinotype.ttf'),
        'risque': require('../assets/fonts/risque.ttf'),
        'rochester': require('../assets/fonts/rochester.ttf'),
        'zeyada': require('../assets/fonts/zeyada.ttf'),
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

    const emailInputStyle = tw.style(`border-2 w-full px-3 py-4 rounded-xl mb-4`, {
        'border-[#15631b83]': !isEmailFocused,
        'border-[#3dc548]': isEmailFocused,
    });

    const passwordInputStyle = tw.style(`border-2 w-full px-3 py-4 rounded-xl mb-4`, {
        'border-[#15631b83]': !isPasswordFocused,
        'border-[#3dc548]': isPasswordFocused,
    });

    const confirmPasswordInputStyle = tw.style(`border-2 w-full px-3 py-4 rounded-xl mb-4`, {
        'border-[#15631b83]': !isConfirmPasswordFocused,
        'border-[#3dc548]': isConfirmPasswordFocused,
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw`flex-1`}
        >
            <ScrollView contentContainerStyle={tw`flex-1 justify-center pt-10 px-5`}>
                {/* Section 1 - Top */}
                <View>
                    <Text style={[tw`text-7xl text-[#366648] text-center pt-10`, { fontFamily: 'rochester', lineHeight: 100 }]}>
                        Welcome,
                    </Text>
                    <Text style={[tw`text-3xl text-[#366648] text-center mb-4`, { fontFamily: 'rochester', }]}>
                        Lest us get to know you!
                    </Text>
                </View>

                {/* Section 2 - Middle */}
                <View style={tw`items-center py-20`}>
                    <TextInput
                        style={emailInputStyle}
                        placeholder="example@email.com"
                        value={email}
                        onChangeText={setEmail}
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)}
                    />
                    <TextInput
                        style={passwordInputStyle}
                        placeholder="password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                    />
                    <TextInput
                        style={confirmPasswordInputStyle}
                        placeholder="confirm password"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        onFocus={() => setIsConfirmPasswordFocused(true)}
                        onBlur={() => setIsConfirmPasswordFocused(false)}
                    />

                    <TouchableOpacity
                        style={tw`flex w-50% bg-[#07770b] py-3 rounded-xl items-center mt-5`}
                        onPress={() => navigation.navigate('SignUpConfirm', { email: email })}>
                        <Text style={[tw`text-white text-xl`, { fontFamily: 'risque' }]}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Section 3 - Bottom */}
                <View>
                    <View style={tw`flex-row items-center w-full mb-4`}>
                        <View style={tw`flex-1 h-0.5 bg-gray-300`}></View>
                        <Text style={[tw`px-4`, { fontFamily: 'risque' }]}>
                            Or Sign In With</Text>
                        <View style={tw`flex-1 h-0.5 bg-gray-300`}></View>
                    </View>

                    <View style={tw`flex flex-row justify-around items-center  w-full mb-10`}>
                        <TouchableOpacity
                            style={tw`items-center`}
                            onPress={() => console.log('Sign in with Facebook pressed')}>
                            <Image source={require('../assets/fbpng.png')} style={tw`h-10 w-10 mb-2`} />
                            <Text style={{ fontFamily: 'risque' }}>
                                Facebook
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={tw`items-center`}
                            onPress={() => console.log('Sign in with Google pressed')}>
                            <Image source={require('../assets/ggl.png')} style={tw`h-10 w-10 mb-2`} />
                            <Text style={{ fontFamily: 'risque' }}>
                                Google
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={[tw`text-red-600 text-center`, { fontFamily: 'risque' }]}>
                            Already have an Account? Log In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    );
};

export default SignUpScreen;
